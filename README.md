# Sign
Sign is a reusable login system that takes advantage of JWT authentication and Nodemailer to create a versatile, full-featured login page.

![Sign](feature.jpg)

## Features
The back end uses Express.js and three libraries:
* **JSON Web Tokens (JWT)** - an authentication method that securely encodes user information into JSON objects for easy web transfer. In Sign the server sends out these tokens in secure cookies.
* **Nodemailer** - a mailing service that allows for sending emails directly from a Node app (a well-configured account is needed).
* **Mongoose** - a MongoDB database engine.

The front end uses Angular and has 5 different pages:
* Login.
* New Account.
* Verify New Account.
* Request for Password Reset.
* Password Reset.

## Try it out
You can try a demo of Sign [here](https://signvl.herokuapp.com/login/). Use this account to log in:
* Email: abc@xyz.com
* Password: hello

A few things to try:
* Logging in with the account above.
* Taking a peep at the JWT cookie. Open the web inspector on your browser, and look for "Cookies" in the "Storage" section (the exact path depends on the browser). Find a cookie called 'jwt'.
* Creating a new account.
* Requesting for a password reset.

## Use it
Sign is versatile. Download it, edit it, do whatever you like with it!

#### Directory structure
The most important folders and files are:
```
- back
  - bin
    - www
  - data
    - login
      - private.key
      - public.key
  - mid
    - auth.js
  - models
    - user.js
  - pages
    - home
    - login
  - routes
    - users.js
  - app.js

- front
  - dist
  - src
```

#### Front end
Edit the Angular app whichever way you like. To build, run ```ng build --prod```, and you're done! Angular has been configured to build to ```back/pages/login```.

#### Back end
The three most important files are:
* ```back/app.js``` - the main Express.js app.
* ```back/routes/users.js``` - primary route to process login data.
* ```back/mid/auth.js``` - authentication middleware, checks if a user is logged in and if their credentials are valid, if not, then redirect to login page.

#### Database
Sign uses a MongoDB (via Mongoose) database. The Mongoose schema is in ```back/models/user.js```. All database operations are done in ```back/routes/users.js```.

#### Deployment checklist
* **[IMPORTANT] Add a database link:** add the link to your own database in ```back/models/user.js```, ```line 5```. Without this, the app won't work.
* **Update JWT settings:** there are two things you should update for JWT - expiration time and issuer. You can change the cookie expiration time, ```lines 87, 91, and 95``` (the ```expiresIn``` and ```maxAge``` fields). The intercepting middleware must recognize the same issuer as in the cookie. Update the same issuer value to ```back/mid/auth.js```, ```line 14```.
* **Set the public-private key pair:** this JWT instance uses public-key cryptography and requires a set of public-private keys for authentication. An example key set is used but needs to be changed as they are public and thus defeats the point of crypto. Update the keys in ```back/data/login/private.key``` and ```back/data/login/public.key```.
* **Reconfigure Nodemailer (optional):** the Nodemailer instance currently sends emails out to Ethereal, an email interceptor. To send out real emails, update the credentials in ```back/routes/users.js```, ```lines 44-50```.
* **Change the port (optional):** the app is currently set to listen on port ```8080```. You can change this to whatever port you wish in ```back/bin/www```, ```line 15```. If you do so, make sure to update it in the front end too, in ```front/src/environments``` (both files).

## License
Sign is open for all to use under the MIT License.
