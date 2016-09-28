angular.module('app.services', [])

.factory('addressService', [function(){
  var addressFactory = {};
		fromaddress={};
		toaddress={};

       addressFactory.getfromAddress = function () {
           return this.fromaddress ;
        };

        addressFactory.setfromAddress = function (value) {
            this.fromaddress= value;
        };

		addressFactory.gettoAddress = function () {
           return this.fromaddress ;
        };


        addressFactory.settoAddress = function (value) {
            this.fromaddress= value;
        };
		
		
        return addressFactory;
}])

.service('BlankService', [function(){

}]);