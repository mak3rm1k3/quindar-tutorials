##Important NodeJS Concepts
Now that we have the code functioning and some essential files, we need to establish some key NodeJS components to complete the webapp. These are exemplified in the Appendix of the FOSS Guidelines.

###Server.js
In order to run your app on a local server and test it out in a server environment (rather than open up index.html in a browser), you must run a server.js script which will establish that server. This tutorial makes the most bare-bones server.js file with necessary security/system configuration to get your app running. In later tutorials we will build out our code to be more robust with more NodeJS modules.

###Build server.js
Open a new file and save it as “server.js.” Remember to insert the header as in the example above. Now copy the following script into the file:

```javascript
‘use strict’;
var express = require('express');
var app = express();
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});
var securePort = process.env.SECUREPORT || 3001;
app.listen(securePort, function() {
	console.log('Node server started @ http://localhost:' + securePort);
	console.log('Press Ctrl + c for server termination');
});
```
The previous code executes the following scripts in order:
	1. Imports express, one of the dependencies you installed from package.json. Express is what allows us to create and run our server. It is a native module to NodeJS.
	1. Establishes our “app” to be the operable express module. Essentially renaming express to app for ease of read and use.
	1. Defines a handler function that will take requests and respond to them accordingly. This is the interaction point of our server for information to and from our webapp. For example, when you click, that information is sent to the handler function which sends it to the appropriate code (index.html) to await a response and send that back to the webapp.
	1. Writes to the user environment object a variable named SECUREPORT with the value 3001. The user environment object is called and written to via process.env (env is environment) and is a collection of information on the user. We could hard code the port number into a variable and just use that instead of writing it to the user environment, but it is in our FOSS guidelines to operate according to the above code.
	1. Activates the port we specified via the securePort address (think of it as a pier number in a shipyard, a literal port) to listen for activity on that port. The activity will be passed to the handler function and travel down the operation line outlined above.

You should be able to initiate the server now, and see your webapp at http://localhost:3001 as if it were a real website:
```
$ nodemon server.js  //Note: ‘node’ and ‘nodemon’ commands operate the same for our purposes, except
				//nodemon monitors index.html for any changes and updates the website accordingly on refresh
```
###Next Steps
Now that you have the server up and running, go to the next tutorial to see how we can incorporate more NodeJS modules into our code to make it more robust.
