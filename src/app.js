/**
 * Created by lenovo on 16/11/15.
 */
var portal = angular.module('portal', ['ui.router']);

portal.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'employee/partials/home.html'
    }).state('about', {});

});
