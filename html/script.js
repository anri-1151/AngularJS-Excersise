var app=angular.module('myApp',['ngMaterial','ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
    when('/addUser', {
      templateUrl: 'addUser.html'
   }).
   
    when('/viewUsers', {
      templateUrl: 'viewUsers.html'
   }).
   
    when('/addUser',{
		templateUrl:'addUser.html'
	}).
	
	when('/editUser',{
		templateUrl:'editUser.html'
	}).
	
	when('/info', {
		templateUrl:'info.html'
	}).
	
    otherwise({
      redirectTo: '/viewUsers'
   });
	
}]);

app.controller('userCtrl',function($scope) {
	$scope.fName = '';
	$scope.lName = '';
	$scope.passw1 = '';
	$scope.passw2 = '';
	$scope.id='';
	$scope.findUsers=[];
	$scope.users = [
	{id:1, fName:'Hege', lName:"Pege",password:"123" },
	{id:2, fName:'Kim',  lName:"Pim",password:"123"},
	{id:3, fName:'Sal',  lName:"Smith",password:"123" },
	{id:4, fName:'Jack', lName:"Jones",password:"123" },
	{id:5, fName:'John', lName:"Doe",password:"123" },
	{id:6, fName:'Peter',lName:"Pan" ,password:"123"},
	{id:7, fName:'Hege',lName:"Doe" ,password:"123"}
	];
	$scope.editUser = function(id) {
        for (var user in $scope.users) {
			if ($scope.users[user].id==id) {
			    $scope.id=$scope.users[user].id;
				$scope.fName = $scope.users[user].fName;
		        $scope.lName = $scope.users[user].lName; 
				document.getElementById("fName").value=$scope.fName;
				document.getElementById("lName").value=$scope.lName;
			}
		}	
    };
	$scope.remove=function(id) {
		for (var user in $scope.users) {
			if ($scope.users[user].id==id) {
			    $scope.users.splice(user,1);
			}
		}
		$scope.id='';
		$scope.fName = '';
		$scope.lName = '';
	};
	$scope.findUser=function(inputUser) {
		$scope.findUsers=[];
		for (var user in $scope.users) {
			if ($scope.users[user].fName==inputUser || $scope.users[user].lName==inputUser) {
			    $scope.findUsers.push($scope.users[user]);
			}
		}
	};
	$scope.save=function(id,fName,lName) {
		for (var user in $scope.users) {
			if ($scope.users[user].id==id) {
			    $scope.users[user].fName=fName;
				$scope.users[user].lName=lName;
			}
		}
		$scope.id='';
		$scope.fName='';
		$scope.lName='';
		document.getElementById("fName").value="";
		document.getElementById("lName").value="";
	};
	$scope.firstName='';
	$scope.lastName='';
	$scope.add=function(fName,lName,passw1) {
		$id=0;
	    for (var user in $scope.users) {
			$id=$scope.users[user].id;
		}
		$id++;
		$scope.users.push({'id':$id,'fName':fName,'lName':lName,'password':passw1});
		document.getElementById("fName").value="";
		document.getElementById("lName").value="";
		document.getElementById("passw1").value="";
		document.getElementById("passw2").value="";
		
	};
	/*$scope.error = false;
	$scope.incomplete = false
	$scope.$watch('passw1',function() {$scope.test();});
	$scope.$watch('passw2',function() {$scope.test();});
	$scope.$watch('firstName', function() {$scope.test();});
	$scope.$watch('lastName', function() {$scope.test();});

	$scope.test = function() {

		if ($scope.passw1 !== $scope.passw2) {
		  
			$scope.error = true;
		} else {
		  
			$scope.error = false;
		}
		$scope.incomplete = false;
		if (!$scope.firstName.length ||
				!$scope.lastName.length ||
				!$scope.passw1.length || !$scope.passw2.length) {
			
			$scope.incomplete = true;
		}
	};*/
});
