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
        arr.push(desk,safa,bed,chair,robe,dresser,bookcase,teapoy,Cabinet)
        console.log(arr)
        seek_list.forEach(function (item,seekIndex) {
            item.onclick=function () {
                linkImg.forEach(function (item,linkIndex) {
                    (function (seekIndex) {
                        item.src = arr[seekIndex][linkIndex]
                    })(seekIndex)

                })

            }
        })
    }
    }
})(window)