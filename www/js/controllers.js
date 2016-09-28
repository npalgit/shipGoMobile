
angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('trackCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('rateCtrl', ['$scope', '$stateParams','$ionicModal','$ionicSlideBoxDelegate','$state','addressService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal,$ionicSlideBoxDelegate,$state,addressService) {

	
	 $scope.gPlace;
	
		$scope.fromaddress=false;
		$scope.toaddress=false;
		
		 $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
   }
   
    $scope.openFromAddress = function () {
        $scope.hashtagValue = 'From Address'; // if selected, it'll display this value
        $ionicModal.fromTemplateUrl('templates/FromAddressModal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
 
            $scope.modal = modal;
			$scope.modal.show();
			populateCountries("country", "state");
        });
		 }
		 
		 
		 
		$scope.openToAddress = function () {
        $scope.hashtagValue = 'To Address'; // if selected, it'll display this value

        $ionicModal.fromTemplateUrl('templates/ToAddressModal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
 
            $scope.modal = modal;
			$scope.modal.show();
			populateCountries("country", "state");
        });
		 }
		 
		 
     /*   $scope.openModal = function () {
            $scope.modal.show();
        };
		*/
        $scope.closeModalFrom = function () {
			var address={};
			address=addressService.getfromAddress();
				$scope.fromaddress1=address.address1;
				$scope.fromaddress2=address.address2;
				$scope.fromcountry=address.country;
				$scope.fromcity=address.city;
				$scope.fromastate=address.state;
				$scope.fromzip=address.zip;
				if(Object.keys(address).length > 0)
				$scope.fromaddress=true;

				$scope.modal.hide();
        };
		 $scope.closeModalTo = function () {
				address=addressService.gettoAddress();
				$scope.toaddress1=address.address1;
				$scope.toaddress2=address.address2;
				$scope.tocountry=address.country;
				$scope.tocity=address.city;
				$scope.toastate=address.state;
				$scope.tozip=address.zip;
				if(Object.keys(address).length > 0)
				$scope.toaddress=true;
                $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
		$scope.rate = function(){
       $state.go('menu.rateList')
		}
   
}])
 .controller('rateListCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {
			 $http.get("http://localhost:8080/fedex/rates")
             .then(function(response) {
              $scope.RateReply = response.data.RateReplyDetails;
  });

}])
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 