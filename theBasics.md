#Making Apps For Quindar

###The Basics
If you are familiar with node.js, angular-js, and have cloned/run a github web app before, skip down to the next section: editing the app.

First, download node.js from their website here (https://nodejs.org/en/).

Next you need to create a folder to hold all the code and dependencies for the project. You can do this either through your GUI or through the terminal with the mkdir command:
```
$ mkdir temp
```
Which will make a folder “temp” in whatever directory you are in (we recommend you add it to your desktop). Enter that folder with cd:
```
$ cd temp
```
Now that you have your new folder, you’re ready to edit or create an application

###Editing a Quindar Application
####Download the Necessary Files
Open your terminal if you haven’t already. cd into temp and clone the project from our github branch:
```
$ git clone https://github.com/audacyDevOps/quindar-angular/
```
In temp there is now the quindar-angular folder with everything necessary to get started. Run the buildme.sh:
```
$ ./buildme.sh
```
Now you will have all the necessary dependencies to launch the app. It is necessary to test that everything works before making edits, so establish a local server on your computer and test the application:
```
$ node server.js //this opens up the server for just the local port on your computer. End the server with ‘Ctrl’+’c’ keys.
^C                      //‘Ctrl’+’c’
```
Congrats, you have run your web app!

It is important to note that all the dependencies necessary for the application to work are listed in the package.json file. This serves as the central repository of all dependencies and third party code. If your edits call more dependencies, they should be included under the “dependencies” section, then you need to rerun buildme.sh to install your dependencies before continuing.

####How to Edit
You are most likely to edit the html page, or the data visualization via directives and controllers. These are found in the highest directory of the quandary app, with directives stored in directives/ and controllers stored in controllers/ respectively, where index.html is our critical html page. Make sure to run and pass all the necessary frontend and backend tests listed on the quandary wiki page before you push to github.

####Pushing to Github
Once you have made any edits you see fit, you can push to github and submit a merge (pull) request to queue your edits for review and possible integration. IT IS CRITICAL YOU ADHERE TO THE FOLLOWING PROCEDURE WHEN PUSHING AND MERGE REQUESTING:

	1. Checkout into a new brach: run the following command to create a new branch in the particular project tree you are working in, so that you may push your code to a place other than master. THIS IS THE MOST IMPORTANT STEP. without checking out to a new branch, you risk overwriting the master branch, which can crash any developer’s code. (Note: sometimes edits made do not allow checkout to a new branch so it is good practice to checkout into a brach immediately after cloning).
	```
	$ git checkout -b <name (e.g. issue53)> 
	```
	2. Check that the edits you made are apparent in the new branch you have entered. It is possible that by creating a new branch, the edits from your local copy of master did not transfer (it cloned a branch from the master on github, not your local copy). You can run “$ git status” which will tell you which brach you are on and its status of edits relative to other branches. You should also reopen the files you edited to see if your edits stuck through the transfer.
	3. If you have everything consolidated in YOUR branch and you’re ready to push to the github and request a merge run the following:
	```
	$ git add *
	$ git commit -m “[insert a message about the edits including name and date and what you changed]”
	$ git push -u origin <the name of YOUR branch (e.g. issue53)>
	```
	4. On github, visit your branch in the project and select “Pull Request” which will alert our team of the request and we can read your comments and edits, to asses if it is ready to merge.

That’s it, you are officially a developer on the Audacy project, welcome to the team!

###Creating a new Project
Let’s walk through an example of making a new project from scratch. Since you have a folder, temp, already, we will use that.

####Create the Necessary Files/Folders
It is important that all the apps supported by Audacy Dev Ops use the same folder structure. Notice the folder structure outlined in the wiki and visit the quandary apps individually to see them used appropriately. It is important to use this format with your own apps.

If you have never coded in AngualrJS before, now is a good time to stop and learn. Go to the quindar wiki and go through the learning steps outlined in the “Getting Started with Quindar AngularJS” section (https://github.com/audacyDevOps/quindar-angular/wiki/Getting-Started-with-Quindar---AngularJS).

After learning AngularJS, you can continue. Whatever your app does, make sure to separate its functionality by controllers, directives, and factories (if necessary) and save those files into their necessary directories. Let’s walk through a simple example of an app you might create. This example will use an interactive list of items. (Note: we encourage running through examples on W3 Schools to learn effective coding, so we are using their example found here: http://www.w3schools.com/angular/angular_application.asp to demonstrate).

The code in the example is all contained in an html file, but we want to stress the importance of file separation for ease of reading/editing.

We start with the html file, which you will name index.html and store in the highest directory, in your case “temp.” The code should read as such:
```html
<!DOCTYPE html>
<html>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  <body>
    <script src= “app/controllers/listController.js”></script>
    <div ng-app="myShoppingList" ng-controller="myCtrl">
      <ul>
        <li ng-repeat="x in products">{{x}}<span ng-click="removeItem($index)">×</span></li>
      </ul>
      <input ng-model="addMe">
      <button ng-click="addItem()">Add</button>
    </div>
    <p>Click the little x to remove an item from the shopping list.</p>
  </body>
</html>
```
Notice the spacing of paired beginning and end tags, each sub level is two spaces indented from its parent, not tabbed, and each pair is aligned for ease of reading.

Also notice that the html calls two scripts, one from the google ajax library, and once from the app/controllers/ directory. We will be creating that controller next in a app/controllers/ directory which we will also create. Once you have created the controllers folder within app/, open a new file and copy in the following lines:
```javascript
// Program: listController.js
// Purpose: An Interactive grocery lists
// Author: W3 Schools
// Updated: today
//Licence: See Licensing section of wiki for details
//
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }
});
```
Now save the file as “listController.js” into the controllers/ directory. If you open the index.html file in a browser it should show the same functionality as the example on W3 schools. Great, we have a working webapp! Note the header in the listController.js file, this is the standard header for all application files. Any files you write must contain that information.

Moving on, the next step is to install the necessary dependencies to run this on a local server. To do that, we must have a package.json file that holds the dependency list in a central repository, as well as installs them upon request (see the previous section for more details). Run the following to create a package.json (assuming you have downloaded NPM, if not download that first).
```
$ npm init
```
Enter the name of your project (Note: don’t use a word of core Node module like “js” or “node”), and otherwise accept all defaults by hitting enter, we will edit the necessary sections. Open the new package.json file and copy/paste the following:

```javascript
{
  "name": "quindar-angular",
  "version": "1.0.0",
  "description": "AngularJS version of mission operations app widgets and data visualization ",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/audacyDevOps/quindar-angular.git"
  },
  "keywords": [
    "quindar",
    "mission",
    "operations",
    "data",
    "visualization"
  ],
  "author": “Your name”,
  "license": “See wiki for details”,
  "bugs": {
    "url": "https://github.com/audacyDevOps/quindar-angular/issues"
  },
  "homepage": "https://github.com/audacyDevOps/quindar-angular#readme",
  "dependencies": {
    "async": "^2.0.0-rc.3",
    "body-parser": "^1.15.0",
    "express": "^4.13.4",
    "express-mongoose-docs": "^0.3.1",
    "file-stream-rotator": "0.0.6",
    "fs": "0.0.2",
    "line-by-line": "^0.1.4",
    "mocha": "^2.4.5",
    "mongoose": "^4.4.14",
    "morgan": "^1.7.0",
    "nodemon": "^1.9.2",
    "pug": "^2.0.0-alpha7",
    "randomstring": "^1.1.4",
    "socket.io": "^1.4.6",
    "winston": "^2.2.0"
  }
}
```
You now have the necessary file to keep track of and install your dependencies (Audacy apps use the dependencies listed above for frontend and backend testing and to host a local server). Now that package.json is written, you can install all the dependencies by running:
```
$ npm install
```
However, it is necessary to create an automated build script for any Audacy app, to make development easier in the future. Let’s create the buildme.sh file in the highest directory (temp/) and copy the following code into the file:
```javascript
#!/bin/bash
# Program: buildme.sh
# Purpose: Example how to build quindar widgets
# Author:  Ray Lai
# Updated: May 24, 2016
echo "Quindar widget build scripts"
echo "...building dependencies"
npm install
echo "...complete installing dependencies"
```
So if you run “$ ./buildme.sh” in the command terminal, it will install all the dependencies listed in package.json.

Congrats, you have officially made a working webapp! You are well on your way to contributing to the Audacy Dev Ops team! There is still much more to learn before you can submit your app for our approval so check out the other tutorials to finish your app.
