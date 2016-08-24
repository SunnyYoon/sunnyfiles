/**
 * Created by yq on 2016/8/13.
 */


angular.module("myapp").controller("buyareaCtrl",function($scope,$http,shoppingCart){
    //要加一个新数组
    $scope.fruits=[];
    $http.get("data/buyarea.json").success(function(data){
        $scope.fruits=data;
    });

    //上拉无限滚动
    $scope.loadMore=function(){
        $http.get("data/buyarea.json").success(function(Data){
            Array.prototype.push.apply($scope.fruits,Data);
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");   //固定的写法
        });
    };

    //点击分类区增加按钮 在购物车页面增加商品
    $scope.addproducts=function(item){
        //alert(1)
        shoppingCart.add(item);

    };

});
