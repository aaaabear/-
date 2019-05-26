//liNodes图片列表，smallImg小图集合，bigImg大图集合
function tapSwitch(liNodes,smallImg,bigImg){
	/*var liNodes = document.querySelectorAll("#wrap > .list > li");
	var smallImg = document.querySelector("#wrap > .smallPic > img");
	var bigImg = document.querySelector("#wrap > .bigPic > img");*/
	
	liNodes.forEach(function(item){
		item.onmouseenter=function(){
			//将所有的遮罩全部去掉
			liNodes.forEach(function(item){
				item.classList.remove("active");
			})
			//让当前点击的这个遮罩显示出来
			item.classList.add("active")
			
			
			//换图!!
			/*smallImg.src= item.getAttribute("small-src");
			bigImg.src = item.getAttribute("big-src");*/
			
			smallImg.src= item.dataset.smallSrc;
			bigImg.src = item.dataset.bigSrc;
		}
	})
}




//	smallPic小图片，bigPic大图片，move移动的方块
	function readingGlass(smallPic,bigPic,moveNode){
		/*var smallPic = document.querySelector("#wrap .smallPic");
		var bigPic = document.querySelector("#wrap .bigPic");*/
		console.log(smallPic,bigPic);
		bigPic.style.width = getComputedStyle(smallPic).width;
		bigPic.style.height = getComputedStyle(smallPic).height;
		
		
		
//		var moveNode = document.querySelector("#wrap .move");
		var bigImg = bigPic.querySelector("img");
		
		
		smallPic.onmouseenter=function(){
			moveNode.style.display = "block";
			bigPic.style.display = "block";
		}
		
		smallPic.onmousemove=function(ev){
			ev = ev || event;
			// move块跟随鼠标移动
			var bLW = parseInt(getComputedStyle(this).borderLeftWidth);
			var bTW = parseInt(getComputedStyle(this).borderTopWidth);
			
			var moveW = moveNode.offsetWidth;
			var moveH = moveNode.offsetHeight;
			
			
			var L =0;
			var T =0;
			
			L = ev.clientX - this.getBoundingClientRect().left - bLW - moveW/2;
			T = ev.clientY - this.getBoundingClientRect().top - bTW - moveH/2;
			
			
			//限定范围
			var maxL = this.clientWidth - moveNode.offsetWidth;
			var maxT = this.clientHeight - moveNode.offsetHeight;
			L = L<0?0:L;
			L = L>maxL?maxL:L;
			T = T<0?0:T;
			T = T>maxT?maxT:T;
			
			
			moveNode.style.left = L+"px";
			moveNode.style.top = T+"px";
			
			
			//放大镜核心代码
			/*
				moveNode 在  smallPic 中移动的实时距离 / moveNode 在  smallPic 移动的最大距离(flag)
					||
				bigPic.img 在 bigPic  中移动的实时距离  / bigPic.img 在 bigPic  中移动的最大距离
				
				bigPic.img 在 bigPic  中移动的实时距离 = flag * bigPic.img 在 bigPic  中移动的最大距离
			*/
			
			var bigL =0;
			var bigT =0;
			var flagL = L/maxL;
			var flagT = T/maxT;
			var maxBigL = bigImg.offsetWidth - bigPic.clientWidth;
			var maxBigT = bigImg.offsetHeight - bigPic.clientHeight;
			bigL = maxBigL * flagL;
			bigT = maxBigT * flagT;
			
			
			bigImg.style.left = -bigL +"px";
			bigImg.style.top = -bigT +"px";
		}
		
		smallPic.onmouseleave=function(){
			moveNode.style.display = "none";
			bigPic.style.display = "none";
		}
	}

//SIZE 商品详细选择尺寸
const sizeLists = document.querySelectorAll(".content .details_content .goods_select .size li");
size();
function size(){
    for(let i=0;i<sizeLists.length;i++){
        sizeLists[i].onclick = function(){
            for(let i=0;i<sizeLists.length;i++){
                sizeLists[i].className="";
            }
            this.className="active";
        }
    }
}

//商品详情选项卡切换
tabControls();
function tabControls(){
    const tabControls = document.querySelectorAll(".content .details_content .goods_details .goods_details_nav li");
    const tabContents = document.querySelectorAll(".content .details_content .goods_details_content li");

    for(let i = 0;i<tabControls.length;i++){
        let item = tabControls[i];
        item.index=i;
        item.onclick=function(){
            for(let i=0;i<tabControls.length;i++){
                tabControls[i].className="";
                tabContents[i].className="";
            }
            this.className="active";
            tabContents[item.index].className="active";
        }
    }
}