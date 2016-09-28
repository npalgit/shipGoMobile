angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

.directive('fromaddress', function(addressService) {
	 var componentForm = {
        premise: 'long_name',
        street_number: 'short_name',
        route: 'long_name',
        sublocality_level_1: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };
    var mapping = {
        premise: 'BuildingName',
        street_number: 'Unit',
        route: 'Street',
        sublocality_level_1: 'Suburb',
        locality: 'City',
        administrative_area_level_1: 'State',
        country: 'Country',
        postal_code: 'PostCode'
        //Region, District, Level
    };
	
	
	
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
				
				var geoComponents = scope.gPlace.getPlace();
                var latitude = geoComponents.geometry.location.lat();
                var longitude = geoComponents.geometry.location.lng();
                var addressComponents = geoComponents.address_components;
				
				for (var i = 0; i < addressComponents.length; i++) {
					var addressType =addressComponents[i].types[0];
					if (componentForm[addressType]) {
						var val = addressComponents[i][componentForm[addressType]];
						location[mapping[addressType]] = val;
					}
				}
				
				
                address={};
				scope.address1 = "";

				scope.city = "";

				scope.State = "";

				scope.country = "";

				scope.zip = "";
				
				
                if (location.Unit!=undefined && location.Street!=undefined)
				scope.address1 = location.Unit + " " + location.Street;

				if (location.City!=undefined)
				scope.city = location.City;
			    if (location.State!=undefined)
				scope.state = location.State;
			    if (location.Country!=undefined)
				scope.country = location.Country;
			    if (location.PostCode!=undefined)
				scope.zip = location.PostCode;
			
			    address.address1=scope.address1;
				address.city=scope.city;
				address.State=scope.State;
				address.country=scope.country;
				address.zip=scope.zip;
			    addressService.setfromAddress(address);
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
				//document.getElementById("country").value=scope.country;
				//populateStates('country', 'state');
				//document.getElementById("state").value=scope.state;
            });
        }
    };
})
.directive('toaddress', function(addressService) {
	 var componentForm = {
        premise: 'long_name',
        street_number: 'short_name',
        route: 'long_name',
        sublocality_level_1: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };
    var mapping = {
        premise: 'BuildingName',
        street_number: 'Unit',
        route: 'Street',
        sublocality_level_1: 'Suburb',
        locality: 'City',
        administrative_area_level_1: 'State',
        country: 'Country',
        postal_code: 'PostCode'
        //Region, District, Level
    };
	
	
	
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
				
				var geoComponents = scope.gPlace.getPlace();
                var latitude = geoComponents.geometry.location.lat();
                var longitude = geoComponents.geometry.location.lng();
                var addressComponents = geoComponents.address_components;
				
				for (var i = 0; i < addressComponents.length; i++) {
					var addressType =addressComponents[i].types[0];
					if (componentForm[addressType]) {
						var val = addressComponents[i][componentForm[addressType]];
						location[mapping[addressType]] = val;
					}
				}
				
				
                address={};
				scope.address1 = "";

				scope.city = "";

				scope.State = "";

				scope.country = "";

				scope.zip = "";
				
				
                if (location.Unit!=undefined && location.Street!=undefined)
				scope.address1 = location.Unit + " " + location.Street;

				if (location.City!=undefined)
				scope.city = location.City;
			    if (location.State!=undefined)
				scope.state = location.State;
			    if (location.Country!=undefined)
				scope.country = location.Country;
			    if (location.PostCode!=undefined)
				scope.zip = location.PostCode;
			
			    address.address1=scope.address1;
				address.city=scope.city;
				address.State=scope.State;
				address.country=scope.country;
				address.zip=scope.zip;
			    addressService.settoAddress(address);
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
				//document.getElementById("country").value=scope.country;
				//populateStates('country', 'state');
				//document.getElementById("state").value=scope.state;
            });
        }
    };
});