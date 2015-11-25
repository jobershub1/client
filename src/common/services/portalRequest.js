/**
 * Created by lenovo on 25/11/15.
 */
portal.factory('portalRequest', function () {
    return {
        post: function (url, successCallback, errorCallback) {
            $http({
                method: 'POST',
                url: url
            }).then(successCallback(response), errorCallback(response));
        },
        get: function (url, successCallback, errorCallback) {
            $http({
                method: 'GET',
                url: url
            }).then(successCallback(response), errorCallback(response));
        }
    };
});