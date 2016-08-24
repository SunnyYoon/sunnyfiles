/**
 * Created by hxsd on 2016/8/5.
 */

angular.module("myapp").controller("cartCtrl",function($scope){
   //var itemdb=$scope.cart.item;
    $scope.cart=[
        {   imgsrc:"images/forsale3.jpg",
            goods:"墨西哥牛油果",
            number:2,
            price:78
        },
        {
            imgsrc:"images/forsale5.jpg",
            goods:"墨西哥牛油果",
            number:2,
            price:78

        },
        {
            "imgsrc":"images/forsale1.jpg",
            "goods":"佳沛新西兰阳光金奇异果",
            "price":78.00,
            "number":12
        },
        {
            "imgsrc":"images/forsale5.jpg",
            "goods":"南非葡萄柚",
            "price":43.00,
            "number":6
        }
        //{
        //    "imgsrc":"images/apple.jpg",
        //    "goods":"新西兰爵士苹果",
        //    "name2":"咔嚓一口脆爽 跳跃的酸甜",
        //    "price":38.90,
        //    "number":6
        //},
        //{
        //    "imgsrc":"images/mugua.jpg",
        //    "goods":"海南木瓜",
        //    "name2":"熟在树上 奶香浓郁",
        //    "price":29.00,
        //    "number":3
        //},
        //{
        //    "imgsrc":"images/lanmei.jpg",
        //    "goods":"新奇士美国瓦伦西亚蓝莓",
        //    "name2":"清润酸甜 初恋的味道",
        //    "price":39.00,
        //    "number":12
        //},
        //{
        //    "imgsrc":"images/wuhuaguo.jpg",
        //    "goods":"精选波姬无花果",
        //    "name2":"软糯绵密入心甜",
        //    "price":29.00,
        //    "number":4
        //}
    ];

          $scope.sum=function(){
                var total=0;
                for(var i=0; i<$scope.cart.length; i++){
                    total+=$scope.cart[i].number*$scope.cart[i].price
                }
                return total;
           };
    //数量添加
        $scope.add=function(item){
            var index=$scope.cart.indexOf(item);
            $scope.cart[index].number+=1
        };


        //弹框显示开关
        $scope.isShow=false;

    //数量减少
   // var index=$scope.cart.indexOf(item);
        $scope.reduce=function(item){
            var index=$scope.cart.indexOf(item);
            $scope.cart[index].number-=1;
            if($scope.cart[index].number<1){
                $scope.index=index;
                //alert($scope.index);
                $scope.cart[index].number=1;
                $scope.isShow=!$scope.isShow;

            }

        };
    //弹框取消显示
        $scope.hide=function(){
            $scope.isShow=!$scope.isShow;
        };
    //删除商品
    $scope.Delete=function(item){
        var index=$scope.cart.indexOf(item);
        $scope.cart.splice($scope.index,1);

    };

    //删除商品
    $scope.delete=function(item){
        var index=$scope.cart.indexOf(item);
        $scope.cart.splice(index,1);

    };

    //编辑按钮显示或隐藏
    $scope.turnoffon={
        showDelete:false
    };


});







