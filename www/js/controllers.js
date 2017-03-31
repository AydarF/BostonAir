angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {
})
   
.controller('aboutCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
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
   
.controller('contactUsCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.nameFormat = /^[a-zA-Z0-9\s]{2,55}$/;
  $scope.emailFormat = /^[a-z]+[a-z0-9_\.]+@[a-z]+\.[a-z.]{2,5}$/;

  $scope.submitForm = function(isValid) {   
    if (isValid) {
      $scope.msg = "The message has been sent";
    }
  }

  $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

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

  $scope.input = Authorization;

   $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

})

.controller('cartCambridgeCtrl', function($scope, $ionicHistory, Authorization, $ionicPopup, $ionicSideMenuDelegate) {

  $scope.input = Authorization;  

 $scope.openMenuLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    }; 
    
})

.controller('TocalcCtrl', function($scope) {
    $scope.total = function(){
        return $scope.input.one * 14.99;
    };
})

.controller('TocalcBosCtrl', function($scope) {
    $scope.total = function(){
        return $scope.input.two * 14.99;
    };
})
   
.controller('homePageVideoCtrl', function($scope) {

})

.controller('mediaCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate) {
  $scope.allImages = [{
    'src' : 'img/boston_media.jpg'
  }, {
    'src' : 'img/mit_media.jpg'
  }, {
    'src' : 'img/boston_media2.jpg'
  }, {
    'src' : 'img/boston_media1.jpg'
  }, {
    'src' : 'img/boston-common_media.jpg'
  }, {
    'src' : 'img/tufts.jpg'
  },  {
    'src' : 'img/back_bay.jpg'
  }, {
    'src' : 'img/cambridge_media.jpg'
  }, {
    'src' : 'img/harvardsq_media.jpg'
  }];

  $scope.clipSrc = 'img/boston-air.mp4';
 
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
  }

})
 
.controller('EmailController', function($scope) {
    $scope.sendFeedback= function() {
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Feedback for your App", // Subject
            "",                      // Body
            ["faidarik@mail.ru"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }
});




 