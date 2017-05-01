'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
//var storeApp = angular.module('AngularStore', []);
/*storeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).
      when('/customer', {
        templateUrl: 'partials/customerDetails.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
      }).
      when('/addon', {
        templateUrl: 'partials/addonStore.html',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);*/
var storeApp = angular.module('AngularStore', ['ui.router']);
alert("v0.2");
storeApp.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/store');

    $stateProvider.state("store", {
        name: 'store',
        url: "/store",
        templateUrl: 'partials/store.htm',
        controller: storeController 
      }).state("customer", {
        name: 'customer',
        url: "/customer",
        templateUrl: 'partials/customerDetails.htm',
        controller: storeController
      }).state("cart", {
        url: "/cart",
        name: 'cart',
        templateUrl: 'partials/shoppingCart.htm',
        controller: storeController
      }).state("addon", {
        url: "/addon",
         name: 'addon',
        templateUrl: 'partials/addonStore.htm',
        controller: storeController
      })
      /*.state("otherwise", {
         url : '/'
       });*/
});



// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
storeApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "paypaluser@youremail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "xxxxxxx",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // enable Stripe checkout
    // note: the second parameter identifies your publishable key; in order to use the 
    // shopping cart with Stripe, you have to create a merchant account with 
    // Stripe. You can do that here:
    // https://manage.stripe.com/register
    myCart.addCheckoutParameters("Stripe", "pk_test_xxxx",
        {
            chargeurl: "https://localhost:1234/processStripe.aspx"
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
})

storeApp.filter('INR', function() {
  return function (input) {
    if (!isNaN(input)) {
      var currencySymbol = ' INR ';
      var result = input.toString().split('.');
      var lastThree = result[0].substring(result[0].length - 3);
      var otherNumbers = result[0].substring(0, result[0].length - 3);
      if (otherNumbers !== '')
        lastThree = ',' + lastThree;
      var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
      if (result.length > 1) {
        output += '.' + result[1];
      }
      return  output + currencySymbol ;
    }
    return '';
  };
})

storeApp.filter('ticketStore', function() {
  return function(item) {
    return item.filter(function(element, index, array) {
      return (element.category.toUpperCase() === 'TICKET') ;  
    });
  };
});

storeApp.filter('addonStore', function() {
  return function(item) {
    return item.filter(function (element, index, array) {
      return (element.category.toUpperCase() === 'PACKAGE') ;    
    })
  }
})