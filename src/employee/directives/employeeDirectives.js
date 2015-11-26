portal.directive('headerSlider', function(){
    return {
        restrict: 'E',
        templateUrl: 'employee/partials/header_slider.html',
        link: function(scope, element, attrs) {
            var items = $('.item');
            var owlHeader = $('.owl-header');
            for (var i = 0; i < items.length; i++) {
                var bg = items.eq(i).data("background");
                items.eq(i).css({
                    "background-image": "url('" + bg + "')"
                });
            }
            owlHeader.children('.owl-wrapper-outer').children('.owl-wrapper').children('.owl-item').height(owlHeader.siblings('form').outerHeight(false));
            owlHeader.owlCarousel({
                singleItem: true,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                autoPlay: 6000
            });
        }
    };
}).directive('jobSearch', function(){
    return {
        restrict: 'E',
        templateUrl: 'employee/partials/job_search_form.html',
        link: function(scope, element, attrs) {
            scope.searchForm = {};
            scope.enableSearchJob = false;
            scope.$watch('searchForm', function(newVal, oldVal){
                if (!$.isEmptyObject(newVal)) {
                    if(newVal.skill || newVal.location || newVal.experience) {
                        scope.enableSearchJob = true;
                    } else {
                        scope.enableSearchJob = false;
                    }
                } else {
                    scope.enableSearchJob = false;
                }
            }, true);
            scope.advancedJobSearchForm = {};
        }
    };
});