/**
 * Created by Vittorio on 13/04/2016.
 */
angular.module('produtos').controller('ProdutosController', ['$scope', '$routeParams', '$location', 'Produtos',
    function($scope, $routeParams, $location, Produtos) {
        $scope.create = function() {
            var produto = new Produtos({
                nome: this.nome,
                modelo: this.modelo,
                descricao: this.descricao,
                preco_usd: this.preco_usd
            });
            produto.$save(function (response) {
                // $location.path('produtos/' + response._id);
                $location.path('www.oantagonista.com');
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.find = function() {
            $scope.produtos = Produtos.query();
        };
    }
]);