window.onload = function () {
  var btn = document.querySelector('#wrap .myWrap .contentWrap .content .basicInfo .formTab .save button');
  var inputImg = document.querySelector('#wrap .myWrap .contentWrap .content .basicInfo .formTab .photoWrap .loadPhoto input');
  var inputName = document.querySelector('#wrap .myWrap .contentWrap .content .basicInfo .formTab .nickname input');
  var inputSelects = document.querySelectorAll('#wrap .myWrap .contentWrap .content .basicInfo .formTab .selectWrap .selects');
  var inputSexs = document.querySelectorAll('#wrap .myWrap .contentWrap .content .basicInfo .formTab .sex label input');
  var inputText = document.querySelector('#wrap .myWrap .contentWrap .content .basicInfo .formTab .signature textarea');


  var flag = false;
  btn.onclick = function () {
    if (flag) {
      inputImg.setAttribute('disabled','disabled');
      inputName.setAttribute('disabled','disabled');
      getFor(inputSelects, 'add');
      getFor(inputSexs, 'add');
      inputText.setAttribute('disabled','disabled');
      btn.textContent = 'setting';


      flag = false;
    }else{
      inputImg.removeAttribute('disabled');
      inputName.removeAttribute('disabled');
      getFor(inputSelects, 'remove');
      getFor(inputSexs, 'remove');
      inputText.removeAttribute('disabled');
      btn.textContent = 'save';
      flag = true;
    }
  };

  function getFor(nodes, type) {
    for (var i = 0; i < nodes.length; i++){
      if (type === 'add'){
        nodes[i].setAttribute('disabled','disabled');
      } if (type === 'remove') {
        nodes[i].removeAttribute('disabled');
      }

    }
  }

  for(var i = 0; i < inputSelects.length; i++){
    inputSelects[i].onclick = function () {

    }
  }

  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');

  // 二级联动
  var city = [];
  city[0] = ['GuangZhou','ShenZhen'];
  city[1] = ['HangZhou'];
  city[2] = ['XiaMen'];

  function funcTwo(m) {
    two.length = 1;
    for(var i = 0; i < city[m].length; i++){
      var op = new Option(city[m][i], i);
      two.add(op);
    }
  }
  one.onchange = function(){
    funcTwo(this.value);
    three.length = 1;
  };

  // 三级联动
  var dist = [[]];
  dist[0] = [[]];
  dist[1] = [[]];
  dist[2] = [[]];
  dist[0][0] = ['TianHe','PanYu','YueXiu'];
  dist[0][1] = ['NanShan','FuTian','LuoHu'];
  dist[1][0] = ['XiHu'];
  dist[2][0]=['JiMei','SiMing'];

  function funcThree(){
    var n = document.getElementById("two").selectedIndex;
    three.length = 1;
    var m = document.getElementById("one").selectedIndex;
    if(m > 0) m -= 1;
    if(n > 0) n -= 1;
    for(var i = 0; i < dist[m][n].length; i++){
      var op = new Option(dist[m][n][i], i);
      three.add(op);
    }
  }
  two.onchange = function(){
    funcThree();
  };

};