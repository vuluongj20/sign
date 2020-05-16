var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
// var nodemailer = require('nodemailer');
var util = require('util');
var crypto = require('crypto');

var readFile = util.promisify(fs.readFile);
var writeFile = util.promisify(fs.writeFile);

// var transporter = nodemailer.createTransport({
//   host: 'hostname',
//   auth: {
//       user: 'id',
//       pass: 'password'
//   }
// });

router.post('/login', async function (req, res, next) {
  try {
    var email = req.body.email;
    var pass = req.body.pass;
    var authorized = false;
    var users = JSON.parse(await readFile('./data/login/users.json'));
    for (let user of users) {
      if (user.email === email && user.pass === pass) {
        authorized = true;
        if (user.active) {
          var privateKey = await readFile('./data/login/private.key', 'utf8');
          var tokenSettings = {
            algorithm: 'RS256',
            expiresIn: 120,
            issuer: 'Vu Luong',
            subject: email
          };
          if (user.type === 'admin') {
            var token = jwt.sign({account: email, type: 'admin'}, privateKey, tokenSettings);
            res.cookie('jwt', token, { maxAge: 120000, httpOnly: false, secure: true });
            res.json({authorized: true, active: true, type: 'admin'});
          } else if (user.type === 'norm'){
            var token = jwt.sign({account: email, type: 'norm'}, privateKey, tokenSettings);
            res.cookie('jwt', token, { maxAge: 120000, httpOnly: false, secure: true });
            res.json({authorized: true, active: true, type: 'norm'});
          } else if (user.type === 'demo') {
            var token = jwt.sign({account: email, 'type': 'demo'}, privateKey, tokenSettings);
            res.cookie('jwt', token, { maxAge: 120000, httpOnly: false, secure: true });
            res.json({authorized: true, active: true, type: 'demo'});
          }
        } else {
          res.json({authorized: true, active: false})
        }
      }
    }
    if (!authorized) {
      res.json({authorized: false});
    }
  } catch (err) {
    next(err);
  }
});

router.post('/recover', async function (req, res, next) {
  try {
    var mailRe = req.body.mail;
    var userExists = false;
    var users = JSON.parse(await readFile('./data/login/users.json'));
    for (let user of users) {
      if (user.email === mailRe) {
        var rand = crypto.randomBytes(20).toString('hex');
        // var link = 'domain.com/recover' + rand;
        // let mailOptions = {
        //   from: 'address',
        //   to: mailRe,
        //   subject: 'subject',
        //   text: 'content'
        // };
        userExists = true;
        user.resetRand = rand;
        user.resetUntil = Date.now() + 900000;
        await writeFile('./data/login/users.json', JSON.stringify(users, null, 2));
        // transporter.sendMail(mailOptions, (err, info) => {
        //   if (err) throw err;
          res.json({userExists: true});
        // });
      }
    }
    if (!userExists) {
      res.json({userExists: false});
    }
  } catch (err) {
    next(err);
  }
});

router.post('/reset', async function (req, res, next) {
  try {
    var rand = req.body.rand;
    var newPass = req.body.newPass;
    var userFound = false;
    var users = JSON.parse(await readFile('./data/login/users.json'));
    for (let user of users) {
      if (user.resetRand === rand) {
        userFound = true;
        if (user.resetUntil > Date.now()) {
          user.pass = newPass;
          user.resetUntil = '';
          user.resetRand = '';
          await writeFile('./data/login/users.json', JSON.stringify(users, null, 2));
          res.json({userFound: true, randValid: true});
        } else {
          res.json({userFound: true, randValid: false});
        }
      }
    }
    if (!userFound) {
      res.json({userFound: false});
    }
  } catch (err) {
    next(err);
  }
});

router.post('/new', async function (req, res, next) {
  try {
    var email = req.body.email;
    var pass = req.body.pass;
    var userExists = false;
    var users = JSON.parse(await readFile('./data/login/users.json'));
    for (let user of users) {
      if (user.email === email) {
        userExists = true;
        res.json({userExists: true});
      }
    }
    if (!userExists) {
      var rand = crypto.randomBytes(20).toString('hex');
      var until = Date.now() + 900000;
      // var link = 'domain.com/' + rand;
      // let mailOptions = {
      //   from: 'address',
      //   to: email,
      //   subject: 'subject',
      //   text: 'content'
      // };
      users.push({
        email: email,
        pass: pass,
        type: 'norm',
        active: false,
        activateRand: rand,
        activateUntil: until
      });
      await writeFile('./data/login/users.json', JSON.stringify(users, null, 2))
      // transporter.sendMail(mailOptions, (err, info) => {
      //   if (err) throw err;
        res.json({userExists: false});
      // });
    }
  } catch (err) {
    next(err);
  }
});

router.post('/verify', async function (req, res, next) {
  try {
    var rand = req.body.rand;
    var userFound = false;
    var users = JSON.parse(await readFile('./data/login/users.json'));
    for (let user of users) {
      if (user.activateRand === rand) {
        if (user.activateUntil > Date.now()) {
          userFound = true;
          user.activateRand = '';
          user.activateUntil = '';
          user.active = true;
          await writeFile('./data/login/users.json', JSON.stringify(users, null, 2));
          res.json({userFound: true, randValid: true});
        } else {
          userFound = true;
          res.json({userFound: true, randValid: false});
        }
      }
    }
    if (!userFound) {
      res.json({userFound: false});
    }
  } catch (err) {
    next(err);
  }
});

router.post('/resend', async function (req, res, next) {
  try {
    var rand = req.body.rand;
    var userFound = false;
    var users = JSON.parse(await readFile('./data/login/users.json'));
    if (req.body.type === 'activate') {
      for (let user of users) {
        if (user.activateRand === rand) {
          // let mailOptions = {
          //   from: 'address',
          //   to: user.email,
          //   subject: 'subject',
          //   text: 'content'
          // };
          userFound = true;
          user.activateRand = crypto.randomBytes(20).toString('hex');
          user.activateUntil = Date.now() + 900000;
          await writeFile('./data/login/users.json', JSON.stringify(users, null, 2));
          // transporter.sendMail(mailOptions, (err, info) => {
          //   if (err) throw err;
            res.sendStatus(204);
          // });
        }
      }
    } else if (req.body.type === 'reset') {
      for (let user of users) {
        if (user.resetRand === rand) {
          // let mailOptions = {
          //   from: 'address',
          //   to: user.email,
          //   subject: 'subject',
          //   text: 'content'
          // };
          userFound = true;
          user.resetRand = crypto.randomBytes(20).toString('hex');
          user.resetUntil = Date.now() + 900000;
          await writeFile('./data/login/users.json', JSON.stringify(users, null, 2));
          // transporter.sendMail(mailOptions, (err, info) => {
          //   if (err) throw err;
            res.status(204).send();
          // });
        }
      }
    }
    if (!userFound) {
      res.json({userFound: false, success: false});
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
