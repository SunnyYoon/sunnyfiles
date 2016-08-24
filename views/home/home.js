/**
 * Created by hxsd on 2016/8/5.
 */

angular.module("myapp").controller("homeCtrl",function($scope,$interval,$http,$ionicLoading,$ionicScrollDelegate){
    $scope.date=new Date(Date.now()+24*60*60*1000);
    $interval(function(){
        $scope.interv={
            time:new Date()
        }
    },1000);
    $http.get("data/forsale.json").success(function(data){
        $scope.forSale=data;
    });

    //大家都爱买
    $http.get("data/Buylover.json").success(function(Data){
        $scope.buylover=Data;
    });

    //下拉刷新数据
    $scope.refresh=function(){
        //向服务器端请求新的数据，替换掉现有的数据
        var url=aa.json;
        $http.get(url).success(function(data){
            $scope.products=data;
            $ionicLoading.hide();
        }).error(function() {
            $ionicLoading.show({
                template: "请检查网速",
                duration: 1000
            });
        })
    };

    $scope.toTop=function(){
        //将窗口滚动到顶部
        $ionicScrollDelegate.scrollTop(true);

    };



});