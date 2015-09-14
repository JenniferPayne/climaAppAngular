(function() {

  var app = angular.module("climaViewer", []);

  var MainController = function($scope, $http) {

      /*

      Para que o app funcione, execute no cmd.exe, na pasta do projeto o arquivo server.bat

      Qualquer dúvida, favor me contactar em nennypayne@gmail.com ou através do 9722-7516.

      */

      //comente a linha abaixo para visualizar os dados offline.
      $scope.tempo = previsao.previsao;

      $scope.dadoOff = previsao.previsao;

      var dadosOffline = $scope.tempo;

      var stringTempo = JSON.stringify(dadosOffline);

      localStorage.setItem("jsonSave", stringTempo);
      var dados = localStorage.getItem("jsonSave");

      console.log(dados);


    var onError = function(reason) {
      $scope.error = "Falha ao tentar recuperar a previsão do tempo no servidor";
    };

    $scope.message = "Você está no modo offline."

  };

  app.controller("MainController", ["$scope", "$http", MainController]);

}());