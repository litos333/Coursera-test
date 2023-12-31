(function () {
  'use strict';

  angular.module('Data')
         .service('MenuDataService', MenuDataService)
         .constant('ApiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com/')


  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: (ApiBasePath + 'categories.json')
      }).then(function (response) {
        console.log(response.data);
        return response.data;
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      console.log(categoryShortName);
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items/' + categoryShortName + '.json')
      }).then(function (response) {
        console.log("The name retrieved by the service is: " + categoryShortName);
        console.log(response.data);
        return response.data;
      });
    };
  }

})();
