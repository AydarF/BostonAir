angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.media', {
    url: '/media',
    views: {
      'side-menu21': {
        templateUrl: 'templates/media.html',
        controller: 'mediaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.shop', {
    url: '/shop',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shop.html',
        controller: 'shopCtrl'
      }
    }
  })

  .state('menu.contactUs', {
    url: '/contact-us',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('menu.productPageInShopPage', {
    url: '/product-page',
    views: {
      'side-menu21': {
        templateUrl: 'templates/productPageInShopPage.html',
        controller: 'productPageInShopPageCtrl'
      }
    }
  })

  .state('menu.productPage2InShopPage', {
    url: '/product-page',
    views: {
      'side-menu21': {
        templateUrl: 'templates/productPage2InShopPage.html',
        controller: 'productPage2InShopPageCtrl'
      }
    }
  })

  .state('menu.cartBoston', {
    url: '/cart',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cartBoston.html',
        controller: 'cartBostonCtrl'
      }
    }
  })

  .state('menu.cartCambridge', {
    url: '/cart',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cartCambridge.html',
        controller: 'cartCambridgeCtrl'
      }
    }
  })

  .state('menu.homePageVideo', {
    url: '/video',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homePageVideo.html',
        controller: 'homePageVideoCtrl'
      }
    }
  })

.state('menu.CambrOverview', {
    url: '/CambrOverview',
    views: {
      'side-menu21': {
        templateUrl: 'templates/CambrOverview.html',
        controller: 'CambrOverviewCtrl'
      }
    }
  })

.state('menu.BostOverview', {
    url: '/BostOverview',
    views: {
      'side-menu21': {
        templateUrl: 'templates/BostOverview.html',
        controller: 'BostOverviewCtrl'
      }
    }
  })
  

$urlRouterProvider.otherwise('/side-menu21/home')

  
  


});