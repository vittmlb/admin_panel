/**
 * Created by Vittorio on 13/04/2016.
 */
angular.module('produtos').factory('Produtos', ['$resource', function($resource) {
    return $resource('/api/produtos/:produtoId', {
        produtoId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);