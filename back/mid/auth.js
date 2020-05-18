const jwt = require('jsonwebtoken');
const fs = require('fs');
const util = require('util');

const publicKey = fs.readFileSync('./data/login/public.key', 'utf8');

module.exports = async function(req, res, next) {
  try {
    const cookie = req.cookies.jwt;
    if (cookie) {
      const verified = await jwt.verify(cookie, publicKey, {
        algorithm: ['RS256'],
        issuer: 'Vu Luong'
      });
      if (verified) {
        res.locals.auth = {type: verified.type, account: verified.account};
        next();
      } else {
        res.clearCookie('jwt');
        res.redirect('/login/');
      }
    } else {
      res.redirect('/login/');
    }
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.clearCookie('jwt');
      res.redirect('/login/');
    }
    next(err);
  }
};
