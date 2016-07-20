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
