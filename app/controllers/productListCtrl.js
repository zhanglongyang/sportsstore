angular.module("sportsStore")
    .constant("activeClass", "btn-primary")
    .constant("pageCount", 3)
    .controller("productListCtrl", function ($scope, $filter, activeClass, pageCount, cart) {
        var selectedCategory = null;

        $scope.seletedPage = 1;
        $scope.pageSize = pageCount;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? activeClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? activeClass : "";
        }

        $scope.addProductToCart = function (product) {
          cart.addProduct(product.id, product.name, product.price);
        }
    });
