angular
    .module("cart", [])
    .factory("cart", cart)
    .directive("cartSummary", cartSummary);

function cart() {
    var cartData = [];

    return {
        addProduct: addProduct,
        removeProduct: removeProduct,
        getProducts: getProducts
    };

    function addProduct(id, name, price) {
        var addedToExistingItem = false;
        for (var i = 0; i < cartData.length; i++) {
            if (cartData[i].id == id) {
                cartData[i].count++;
                addedToExistingItem = true;
                break;
            }
        }
        if (!addedToExistingItem) {
            cartData.push({
                count: 1, id: id, price: price, name: name
            });
        }
    }

    function removeProduct(id) {
        for (var i = 0; i < cartData.length; i++) {
            if (cartData[i] == id) {
                cartData.splice(i, 1);
                break;
            }
        }
    }

    function getProducts() {
        return cartData;
    }
}

function cartSummary(cart) {
  return {
    restrict: "E",
    templateUrl: "components/cart/cartSummary.html",
    controller: function($scope) {
      var cartData = cart.getProducts();

      $scope.total = function() {
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
          total += (cartData[i].price * cartData[i].count);
        }
        return total;
      }

      $scope.itemCount = function() {
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
          total += cartData[i].count;
        }
        return total;
      }
    }
  };
}
