2# trello-app

Angularjs single page app over node and express that displays summary information about Trello boards.

http://radiant-escarpment-6232.herokuapp.com/

---------------

Create .env and Procfile_dev with environment variables:

 - APP_NAME
 - TRELLO_KEY
 - TRELLO_SECRET
 - HOSTNAME
 - DB

If deploying, these config vars need set in the Heroku dashboard.

---------------

**npm run dev** to start dev environment

**webpack -p && npm start** to run production environment

Both need Heroku's foreman

---------------

#To Do

 - Break board view into two directives
 - Fix Mocha unit tests previously passing with hardcoded credentials by logging the user in beforeEach test
 - Implement html2js so directives can be properly tested
 - Karma tests updated to match all views and components
 - Protractor tests updated for e2e testing
 - Update scripts in package.json to create proper build workflow
 - Better front end styling and interactions
