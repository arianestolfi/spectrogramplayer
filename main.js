/**
 * Created by intelWorx on 19/11/2015.
 * adapted by Ariane Stolfi, 10/01/2017
 */
(function () {
  'use strict';
  angular.module('mdWavesurferApp', ['mdWavesurfer'])
    .config(function ($mdIconProvider) {
      //$mdIconProvider.fontSet('zmdi', 'fontawesome');
    })
    .controller('MainController', ['$scope',
      function ($scope) {
        $scope.folder = "samples_0/";
        $scope.extension = ".mp3";
        $scope.longList = [];
        //for (var i = 32; i < 126; i++) {
        //for (var i = 32; i < 79; i++) {
          for (var i = 33; i < 43; i++) {
          $scope.longList.push({
            title: i,
            url: $scope.folder + i + $scope.extension,
            itemid: i,
          });
        }
      }])
})();
