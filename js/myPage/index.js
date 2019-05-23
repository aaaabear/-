window.onload = function () {
  var btn = document.querySelector('#wrap .myWrap .myContent .mySet .setCon .formTab .save button');
  var inputImg = document.querySelector('#wrap .myWrap .myContent .mySet .setCon .formTab .photoWrap .loadPhoto input');
  var inputName = document.querySelector('#wrap .myWrap .myContent .mySet .setCon .formTab .nickname input');
  var inputSelects = document.querySelectorAll('#wrap .myWrap .myContent .mySet .setCon .formTab .selectWrap .selects');
  var inputSexs = document.querySelectorAll('#wrap .myWrap .myContent .mySet .setCon .formTab .sex label input');
  var inputText = document.querySelector('#wrap .myWrap .myContent .mySet .setCon .formTab .signature textarea');


  // var textName;
  // var textSelect;
  // var sexNum;
  // var textText;

  var flag = false;
  btn.onclick = function () {
    if (flag) {
      inputImg.setAttribute('disabled','disabled');
      inputName.setAttribute('disabled','disabled');
      getFor(inputSelects, 'add');
      getFor(inputSexs, 'add');
      inputText.setAttribute('disabled','disabled');
      btn.textContent = '修改';



      flag = false;
    }else{
      inputImg.removeAttribute('disabled');
      inputName.removeAttribute('disabled');
      getFor(inputSelects, 'remove');
      getFor(inputSexs, 'remove');
      inputText.removeAttribute('disabled');
      btn.textContent = '保存';
      flag = true;

      // 获取所有文本值或标记
      // textName = inputName.value;
      // var arrSelects = [];
      // for (var i = 0; i < inputSelects.length; i++){
      //   var textSelect = inputSelects[i][0].value;
      //   arrSelects.push(textSelect);
      // }
      // for (var j = 0; j < inputSexs.length; j++) {
      //   if(inputSexs[j].getAttributeNode('checked')){
      //     sexNum = j;
      //     break;
      //   }
      // }
      // textText = inputText.textContent;

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
  city[0] = ['广州市','深圳市'];
  city[1] = ['杭州市'];
  city[2] = ['厦门市'];

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
  dist[0][0] = ['天河区','番禺区','越秀区'];
  dist[0][1] = ['南山区','福田区','罗湖区'];
  dist[1][0] = ['西湖区'];
  dist[2][0]=['集美区','思明区'];

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