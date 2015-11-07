angular.module("sportsStore")
.controller("sportsStoreCtrl", function($scope) {
  $scope.data = {
    products: [
      {name: "Product #1", description: "A Product", category: "Category #1", price: 100},
      {name: "Product #2", description: "B Product", category: "Category #2", price: 110},
      {name: "Product #3", description: "C Product", category: "Category #3", price: 200},
      {name: "Product #4", description: "D Product", category: "Category #1", price: 210}
    ]
  };
});
