const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const nodemailer = require('nodemailer');
const util = require('util');
const crypto = require('crypto');

// Private key for JWT generation
const privateKey = fs.readFileSync('./data/login/private.key', 'utf8');

// Connect with MongoDB database
const UserModel = require('../models/user');
// Delete existing MongoDB documents, and initialize with two users.
// Edit this if you don't want to wipe the database every time the app restarts
UserModel.deleteMany({}, (err) => {
  if (err) throw err;
  UserModel.insertMany([
    {
      "email": "test@test.com",
      "pass": "test",
      "type": "norm",
      "verified": true,
      "verifyRand": "",
      "verifyUntil": "",
      "resetRand": "",
      "resetUntil": ""
    },
    {
      "email": "abc@xyz.com",
      "pass": "hello",
      "type": "norm",
      "verified": true,
      "verifyRand": "",
      "verifyUntil": "",
      "resetRand": "",
      "resetUntil": ""
    }
  ])
});

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
   secure: false,
    port: 587,
    auth: {
        user: 'asa.kilback45@ethereal.email',
        pass: 'NJW1UT4dXQTX268Hme'
    }
});
// Set up an email template engine for use below
const Email = require('email-templates');
const emailer = new Email({
    transport: transporter,
    send: true,
    preview: false,
  });


// ---------
// MAIN LOGIN ROUTE
// ---------
router.post('/login', async function (req, res, next) {
  try {
    const email = req.body.email,
      pass = req.body.pass,
      user = await UserModel.findOne({ email: email });
    // If user exists, then check if password is correct
    if (user) {
      // If password is correct, then check if the email address has been verified
      if (user.pass === pass) {
        // If email address has been verified, then respond with a JWT token to allow access
        if (user.verified) {
          const tokenSettings = {
            algorithm: 'RS256',
            expiresIn: 7200,
            issuer: 'Vu Luong',
            subject: email
          };
          // httpOnly: false allows the browser to see the token (this is for displaying the token at /home)
          // --> Set to true for normal applications
          // secure: false allows non-secure (i.e. non-https) connections, including local hosts
          // --> Set to true for normal applications
          if (user.type === 'admin') {
            const token = jwt.sign({account: email, type: 'admin'}, privateKey, tokenSettings);
            res.cookie('jwt', token, { maxAge: 7200000, httpOnly: false, secure: false });
            res.json({userFound: true, authorized: true, verified: true, type: 'admin'});
          } else if (user.type === 'norm') {
            const token = jwt.sign({account: email, type: 'norm'}, privateKey, tokenSettings);
            res.cookie('jwt', token, { maxAge: 7200000, httpOnly: false, secure: false });
            res.json({userFound: true, authorized: true, verified: true, type: 'norm'});
          } else if (user.type === 'demo') {
            const token = jwt.sign({account: email, 'type': 'demo'}, privateKey, tokenSettings);
            res.cookie('jwt', token, { maxAge: 7200000, httpOnly: false, secure: false });
            res.json({userFound: true, authorized: true, verified: true, type: 'demo'});
          }
        } else {
          res.json({userFound: true, authorized: true, verified: false})
        }
      } else {
        res.json({userFound: true, authorized: false})
      }
    // If user doesn't exist
    } else {
      res.json({userFound: false});
    }
  } catch (err) {
    next(err);
  }
});


// ---------
// TO SEND OUT EMAILS WITH PASSWORD RESET LINKS
// ---------
router.post('/recover', async function (req, res, next) {
  try {
    const mailRe = req.body.mail,
      user = await UserModel.findOne({ email: mailRe });
    // If user exists, then create a random password reset link
    if (user) {
      const rand = crypto.randomBytes(20).toString('hex'),
        link = 'https://signvl.herokuapp.com/login/reset/' + rand
      // Send out an email with the link
      emailer.send({
        template: 'reset',
        message: {
          from: '"Sign" <hello@sign.com>',
          to: mailRe,
        },
        locals: {
          link: link
        },
      }).catch(console.error);
      user.resetRand = rand;
      user.resetUntil = Date.now() + 900000;
      await user.save();
      res.json({userExists: true, mailSent: true});
    // If user doesn't exist
    } else {
      res.json({userExists: false});
    }
  } catch (err) {
    next(err);
  }
});


// ---------
// TO VERIFY RESET LINKS, AND CHANGE THE PASSWORD
// ---------
router.post('/reset', async function (req, res, next) {
  try {
    const rand = req.body.rand,
      newPass = req.body.newPass,
      user = await UserModel.findOne({ resetRand: rand });
    // If user exists, and the random string matches, then change the password
    if (user) {
      if (user.resetUntil > Date.now()) {
        user.pass = newPass;
        user.resetUntil = '';
        user.resetRand = '';
        await user.save()
        res.json({userFound: true, randValid: true});
      } else {
        res.json({userFound: true, randValid: false});
      }
    // If user doesn't exist
    } else {
      res.json({userFound: false});
    }
  } catch (err) {
    next(err);
  }
});


// ---------
// TO CREATE NEW USERS
// ---------
router.post('/new', async function (req, res, next) {
  try {
    const email = req.body.email,
      pass = req.body.pass,
      user = await UserModel.findOne({ email: email });
    // If the email has already been registered
    if (user) {
      res.json({userExists: true});
    // If not, then send an email to that address for verification
    } else {
      const rand = crypto.randomBytes(20).toString('hex'),
        until = Date.now() + 900000,
        link = 'https://signvl.herokuapp.com/login/verify/' + rand,
        newUser = new UserModel({
          email: email,
          pass: pass,
          type: 'norm',
          verified: false,
          verifyRand: rand,
          verifyUntil: until
        })
      emailer.send({
        template: 'verify',
        message: {
          from: '"Sign" <hello@sign.com>',
          to: email,
        },
        locals: {
          link: link
        },
      }).catch(console.error);
      await newUser.save();
      res.json({userExists: false});
    }
  } catch (err) {
    next(err);
  }
});


// ---------
// TO VERIFY NEW USERS' EMAIL ADDRESS
// ---------
router.post('/verify', async function (req, res, next) {
  try {
    const rand = req.body.rand
    // For verifying new accounts
    if (req.body.type === 'verify') {
      const user = await UserModel.findOne({ verifyRand: rand });
      if (user) {
        if (user.verifyUntil > Date.now()) {
          user.verifyRand = null;
          user.verifyUntil = null;
          user.verified = true;
          await user.save();
          res.json({userFound: true, randValid: true});
        } else {
          res.json({userFound: true, randValid: false});
        }
      } else {
        res.json({userFound: false});
      }
    // For verifying password reset links
    } else if (req.body.type === 'reset') {
      const user = await UserModel.findOne({ resetRand: rand });
      if (user) {
        if (user.resetUntil > Date.now()) {
          res.json({userFound: true, randValid: true});
        } else {
          res.json({userFound: true, randValid: false});
        }
      } else {
        res.json({userFound: false});
      }
    }
  } catch (err) {
    next(err);
  }
});


// ---------
// TO RESEND EMAILS CONTAINING VERIFICATION OR PASSWORD RESET LINKS
// ---------
router.post('/resend', async function (req, res, next) {
  try {
    const rand = req.body.rand;
    // For resending new account verification emails
    if (req.body.type === 'verify') {
      const user = await UserModel.findOne({ verifyRand: rand });
      if (user) {
        const rand = crypto.randomBytes(20).toString('hex'),
          until = Date.now() + 900000,
          link = 'https://signvl.herokuapp.com/login/verify/' + rand;
        emailer.send({
          template: 'verify',
          message: {
            from: '"Sign" <hello@sign.com>',
            to: user.email,
          },
          locals: {
            link: link
          },
        }).catch(console.error);
        user.verifyRand = rand;
        user.verifyUntil = until;
        await user.save();
        res.sendStatus(204);
      } else {
        res.json({userFound: false});
      }
    // For resending password reset links
    } else if (req.body.type === 'reset') {
      const user = await UserModel.findOne({ resetRand: rand });
      if (user) {
        const rand = crypto.randomBytes(20).toString('hex'),
          until = Date.now() + 900000,
          link = 'https://signvl.herokuapp.com/login/reset/' + rand;
        emailer.send({
          template: 'reset',
          message: {
            from: '"Sign" <hello@sign.com>',
            to: user.email,
          },
          locals: {
            link: link
          },
        }).catch(console.error);
        user.resetRand = rand;
        user.resetUntil = until;
        await user.save();
        res.sendStatus(204);
      } else {
        res.json({userFound: false});
      }
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
