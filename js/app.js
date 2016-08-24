/**
 * Created by hxsd on 2016/8/5.
 */
var myApp=angular.module("myapp",["ionic"]);

//添加一个购物车
myApp.factory("shoppingCart",function(){
    //alert(1)
    var cart=[];
 return{

     //添加商品
     add:function(product){
         var flag=true;
         for(var i=0; i<cart.length; i++){
             if(cart[i].product.name==product.name){
                 cart[i].number+=1;
                 flag=true;
                 break;
             }


         };

         if(!flag){
            var item={product:product,number:1};
             cart.push(item);
         };


     },
     //查看购物车，买了哪些东西
     find:function(){
         return cart;
     }


 }

});




//ion-tabs的显示与隐藏
myApp.directive('hideTabs',function($rootScope){
    return {
        restrict:'AE',
        link:function($scope){
            $rootScope.hideTabs = 'tabs-item-hide';
            $scope.$on('$destroy',function(){
                $rootScope.hideTabs = ' ';
            })
        }
    }
});

myApp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){


//android tabs在底部
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('bottom');//默认为left

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    //去掉后退按钮的文字
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText(false);


    $stateProvider.state("tab",{
        url:"/tab",
        abstract:true,
        templateUrl:"views/tab/tab.html",
        controller:"homeCtrl"
    });

    $stateProvider.state("tab.home",{
        url:"/home",
       views:{"tab-home":{
               templateUrl:"views/home/home.html"
           }
       }
    });
    $stateProvider.state("tab.category",{
        url:"/category",
        views:{"tab-category":{
            templateUrl:"views/category/category.html"
        }
        }
    });

    $stateProvider.state("tab.myarea",{
        url:"/myarea",
        views:{"tab-myarea":{
                templateUrl:"views/myarea/myarea.html"
                }
        }
    });
    $stateProvider.state("tab.cart",{
        url:"/cart",
        views:{"tab-cart":{
            templateUrl:"views/cart/cart.html",
            controller:"cartCtrl",


        }
        }
    });
    $stateProvider.state("tab.discuss",{
        url:"/discuss",
        views:{"tab-discuss":{
            templateUrl:"views/discuss/discuss.html",
            controller:"discussCtrl"
        }
        }
    });

    $stateProvider.state("tab.login",{
        url:"/login",
        views:{"tab-myarea":{
        templateUrl:"views/login/login.html",
        controller:"logCtrl"
    }}
    });
    $stateProvider.state("tab.order",{
        url:"/order",
        views:{"tab-cart":{
            templateUrl:"views/order/order.html",
            controller:"orderCtrl",
            controller:"cartCtrl"

        }}
    });
    $stateProvider.state("tab.results",{
        url:"/results",
        views:{"tab-cart":{
            templateUrl:"views/results/results.html"

        }}
    });
    $stateProvider.state("tab.buyarea",{
        url:"/buyarea",
        views:{"tab-category":{
            templateUrl:"views/buyarea/buyarea.html",
            controller:"buyareaCtrl"


        }}
    });

    $urlRouterProvider.otherwise("/tab/home")

});



