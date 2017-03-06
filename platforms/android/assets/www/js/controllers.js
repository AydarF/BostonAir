angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $state, $ionicSideMenuDelegate) {
  $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
})
   
.controller('aboutCtrl', function($scope) {
  
})
  
 .controller('CambrOverviewCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    }; 
})

.controller('BostOverviewCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    }; 
})    

      
.controller('shopCtrl', function($scope) {

})
   
.controller('contactUsCtrl', function($scope) {
  $scope.emailFormat = /^[a-z]+[a-z0-9_\.]+@[a-z]+\.[a-z.]{2,5}$/;
  $scope.nameFormat = /^[a-zA-Z0-9_-\s\.]{1,55}$/;

  $scope.submitForm = function(isValid) {
   
    if (isValid) {
      $scope.msg = "The message has been sent";
    }
  }

})
   
.controller('productPageInShopPageCtrl', function($scope, $state, Authorization, $ionicSideMenuDelegate) {
  $scope.input = Authorization;

  $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    }; 
})

.controller('productPage2InShopPageCtrl', function($scope, $state, Authorization, $ionicSideMenuDelegate) {
  $scope.input = Authorization;

  $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };   
})
   
.controller('cartBostonCtrl', function($scope, $ionicHistory, Authorization, $ionicPopup, $ionicSideMenuDelegate) {
  $scope.pageTitle = "<a style=\"text-decoration: none;\" href='#/side-menu21/home'><p>Boston Air</p></a>";

  $scope.input = Authorization;

  $scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '',
    title: 'You bought your Boston Air!',
    subTitle: 'We hope you enjoy our product!',
    scope: $scope,
    cssClass: 'animated zoomIn',
    buttons: [
      { text: 'Procede to overview' }
    ]
  });
 };

   $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

})

.controller('cartCambridgeCtrl', function($scope, $ionicHistory, Authorization, $ionicPopup, $ionicSideMenuDelegate) {
  $scope.pageTitle = "<a style=\"text-decoration: none;\" href='#/side-menu21/home'><p>Boston Air</p></a>";

  $scope.input = Authorization;  

  $scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '',
    title: 'You bought your Cambridge Air!',
    subTitle: 'We hope you enjoy our product!',
    scope: $scope,
    cssClass: 'animated zoomIn',
    buttons: [
      { text: 'Procede to overview' }
    ]
  });
 };

 $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    }; 
    
})

.controller('TocalcCtrl', function($scope) {
    $scope.total = function(){
        return $scope.input.one * 25;
    };
})

.controller('TocalcBosCtrl', function($scope) {
    $scope.total = function(){
        return $scope.input.two * 25;
    };
})
   
.controller('homePageVideoCtrl', function($scope) {

})

.controller('mediaCtrl', function($scope, $ionicModal) {
  $scope.allImages = [{
    'src' : 'img/boston_media.jpg'
  }, {
    'src' : 'img/mit_media.jpg'
  }, {
    'src' : 'img/boston_media2.jpg'
  }, {
    'src' : 'img/boston_media1.jpg'
  }, {
    'src' : 'img/Boston-Common_media.jpg'
  },  {
    'src' : 'img/mit_media.jpg'
  },  {
    'src' : 'img/mit-sailing_media.jpg'
  }, {
    'src' : 'img/cambridge_media.jpg'
  }, {
    'src' : 'img/harvardsq_media.jpg'
  }];

  $scope.clipSrc = 'img/boston-air.MP4';
 
  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/image-popover.html');
  }
  
   $scope.playVideo = function() {
        $scope.showModal('templates/video-popover.html');
    }


  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }
 
  // Close the modal
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };
});




 