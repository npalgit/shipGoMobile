angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.track', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/track.html',
        controller: 'trackCtrl'
      }
    }
  })

  .state('menu.rateList', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rateList.html',
        controller: 'rateListCtrl'
      }
    }
  })
  .state('menu.rate', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rate.html',
        controller: 'rateCtrl'
      }
    }
  })
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  /*.state('page', {
    url: '/page4',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })
*/
$urlRouterProvider.otherwise('/side-menu21/page1')

  

});