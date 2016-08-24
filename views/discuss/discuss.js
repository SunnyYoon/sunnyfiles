/**
 * Created by hxsd on 2016/8/5.
 */

angular.module("myapp").controller("discussCtrl",function($scope,$http){
    //要加一个新数组
    $scope.news=[];
    $http.get("data/news.json").success(function(data){
        $scope.news=data;
    });

    //上拉无限滚动
    $scope.loadMore=function(){
        $http.get("data/newsload.json").success(function(Data){
            Array.prototype.push.apply($scope.news,Data);
            //$scope.news=Data;
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");   //固定的写法
        });
    };

   
});


