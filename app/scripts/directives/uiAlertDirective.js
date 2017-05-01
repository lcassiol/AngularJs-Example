angular.module("angularjsExampleApp").directive("uiAlert", function () {
	return {
		templateUrl: "views/alert.html",
		replace: true,
		restrict: "AE",
		scope: {
			title: "@"
		},
		transclude: true
	};
});
