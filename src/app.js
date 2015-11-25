/**
 * Created by lenovo on 16/11/15.
 */
var portal = angular.module('portal', ['ui.router']);

portal.run(function ($rootScope) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
            event.preventDefault();
            // get me a login modal!
        }
    });
}).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'employee/partials/home.html',
        data: {
            requireLogin: false
        }
    }).state('about', {
        url: '/about',
        templateUrl: 'employee/partials/home.html',
        data: {
            requireLogin: true
        }
    }).state('login', {
        url: '/login',
        templateUrl: 'employee/partials/login_form.html',
        data: {
            requireLogin: true
        }
    }).state('signup', {
        url: '/signup',
        templateUrl: 'employee/partials/signup_form.html',
        data: {
            requireLogin: true
        }
    });

});
