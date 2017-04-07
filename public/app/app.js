(function() {

  var app = angular.module('app', ['ngRoute']);

  app.config(['$logProvider', '$routeProvider', function ($logProvider, $routeProvider) {

    $logProvider.debugEnabled(true);

    $routeProvider
      .when('/', {
        controller: 'HomeController',
        controllerAs: 'home',
        templateUrl: '/app/templates/home.html'
      })
      .when('/schools', { // by default the routes are case-sensitive
        controller: 'AllSchoolsController',
        controllerAs: 'schools',
        templateUrl: '/app/templates/allSchools.html'
        //caseInsensitiveMatch: true // can use this to make case-insensitive
      })
      .when('/classrooms', {
        controller: 'AllClassroomsController',
        controllerAs: 'classrooms',
        templateUrl: '/app/templates/allClassrooms.html'
        // redirectTo: '/schools' // can use a simple URL to redirect
        // redirectTo: function(params, currPath, currSearch) { // can also use a function
        //   console.log(params); // { id: "1" } in /classrooms/1?foo=bar, if :id specified in route
        //   console.log(currPath); // /classrooms/1
        //   console.log(currSearch); // { foo: "bar" }
        //   return '/';
        // }
      })
      .when('/activities', {
        controller: 'AllActivitiesController',
        controllerAs: 'activities',
        templateUrl: '/app/templates/allActivities.html'
      })
      .otherwise('/');

  }]);

}());