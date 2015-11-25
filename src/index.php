<!DOCTYPE html>
<html ng-app="portal">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Jobers Hub</title>
    <link rel="stylesheet" href="assets/css/bootstrap.css"/>
    <link id="main" rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="assets/css/icons.css">
    <link rel="stylesheet" type="text/css" href="assets/css/owl.css">
    <link rel="stylesheet" type="text/css" href="assets/css/prettyPhoto.css">
    <link href="assets/font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="assets/css/animate.css" rel="stylesheet" type="text/css">
    <link rel="icon"
          type="image/png"
          href="assets/img/favico.png"/>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
</head>
<body>
<div class="main-container" ng-controller="mainController">
    <div ng-include="'common/partials/nav.html'"></div>
    <div ui-view></div>
</div>
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/angularjs/angular.min.js"></script>
<script src="js/angularjs/angular-ui-router.js"></script>
<script src="app.js"></script>
<script src="js/smoothWheel.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/owl.carousel.js"></script>
<script src="js/jquery.prettyPhoto.js"></script>
<script src="js/images-loaded.js"></script>
<script src="js/jquery.count.js"></script>
<script src="js/knobify.js"></script>
<script src="js/isotope.js"></script>
<script src="js/main.js"></script>
<script src="employee/controllers/mainController.js"></script>
<script src="employee/directives/employeeDirectives.js"></script>

</body>
</html> 
