(function (w) {
    w.onload=function(){
        toTop();
        function toTop(){
            var toTop = document.querySelector("#wrap .toTop");
            toTop.onclick = function () {
                document.documentElement.scrollTop = 0;
            }
        }
        //切换图片
        photo()
        function photo(){
            for(var i = 1 ; i <21 ; i++){
                desk.push("img/list/desk"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                safa.push("img/list/safa"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                bed.push("img/list/bed"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                chair.push("img/list/chair"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                robe.push("img/list/robe"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                dresser.push("img/list/dresser"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                bookcase.push("img/list/bookcase"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                teapoy.push("img/list/teapoy"+i+".jpg")
            }
            for(var i = 1 ; i <21 ; i++){
                Cabinet.push("img/list/Cabinet"+i+".jpg")
            }
            arr.push(desk,safa,bed,chair,robe,dresser,bookcase,teapoy,Cabinet);
            seek_list.forEach(function (item,seekIndex) {
                //给导航条的li添加点击事件
                item.onclick=function (event) {
                    event = window.event||event
                    event.stopPropagation()

                    //切换背景色
                    for(var i = 0 ; i < seek_list.length ; i++){
                        seek_list[i].className="seek_list"
                    }
                    this.className="seek_list activ"
                    //切换图片
                    linkImg.forEach(function (item,linkIndex) {
                        (function (seekIndex) {
                            item.src = arr[seekIndex][linkIndex]
                        })(seekIndex)
                    })
                }
            })
         }


        tablist()
        function tablist(){
            //切换上一页
            tops.onclick = function (event) {
                event = window.event||event
                event.stopPropagation()
                index--;
               jump.value=index+2  //让表单的value同步下标

                index = index <=0?0:index
                tab()
            };
            //切换下一页
            bottoms.onclick = function (event) {
                event = window.event||event
                event.stopPropagation()

                index++;
                jump.value=index//让表单的value同步下标

                index = index >= 8 ?8:index;
                console.log(index)
                tab()
            }
            //点击切换相对应的页面
            btn.onclick = function () {
                var number = jump.value-1   //获取表单的value值
                 index= number   //更新下标的值

                for(var i = 0 ; i < seek_list.length ; i++){
                    seek_list[i].className="seek_list"
                }
                seek_list[number].className="seek_list activ";

                linkImg.forEach(function (item,linkIndex) {
                    (function (number) {
                        item.src = arr[number][linkIndex]
                    })(number)
                })

            }
            function tab() {
                for(var i = 0 ; i < seek_list.length ; i++){
                    seek_list[i].className="seek_list"
                }
                seek_list[index].className="seek_list activ";

                linkImg.forEach(function (item,linkIndex) {
                    (function (index) {
                        item.src = arr[index][linkIndex]
                    })(index)
                })
            }
        }
    }
})(window)