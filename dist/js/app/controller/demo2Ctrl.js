angular.module("serviceDemo").controller("demo2Ctrl",["$scope","$rootScope","broadCastService",function(o,n,t){o.sendInformation=function(o,n){t.broadCast("listenInformation",o,n)},o.$on("listenInformation",function(n,t){o.c=t.data})}]).controller("demo2SecondCtrl",["$scope","$rootScope",function(o,n){o.$on("listenInformation",function(n,t){o.c=t.data})}]);