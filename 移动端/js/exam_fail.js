window.onload=function(){
	// var main = document.getElementById('main');
	// var new_box = document.createElement("div");
	// var new_form = document.createElement("form");
	// var new_p = document.createElement("p");
	// var new_span =document.createElement("span");
	// new_p.innerHTML = "这是第三个box";
	// main.appendChild(new_box);
	// new_box.appendChild(new_form);
	// new_form.appendChild(new_p);
	// new_p.appendChild(new_span);
	// new_box.setAttribute("class","box");v
	// 
	



	var box = document.getElementById('box');
	var box_parentNode = box.parentNode;
	var submit = document.getElementById('a1');
	//决定有多少道题

	var n = 3;
	for(var i = 0;i<n;i++){
		var new_box = box.cloneNode(true);
		box_parentNode.insertBefore(new_box,a1);
	}	

	var radios = document.getElementsByTagName('input');
	var choosed = document.getElementsByClassName('choosed');
	var labels = document.getElementsByTagName('label');
	var title_number = document.getElementsByClassName('title_number');
	
	// 把每条选择题的id对应label匹配，不然选不了
	for(var i = 0;i<3*(n+1);i++){
		radios[i].setAttribute("id","q"+(Math.floor(i/4))+((i+1)%4));
		labels[i].setAttribute("for","q"+(Math.floor(i/4))+((i+1)%4));
	}
	//给相应的题号改内容
	for(var i = 1;i<=title_number.length;i++){
		title_number[i-1].innerHTML = i;
	}

	var questions_number = document.getElementsByTagName('form').length;
	var pop_fail = document.getElementById('submit_fail');
	var pop_sure = document.getElementById('submit_sure');
	var sure_submit = document.getElementById('sure_submit');
	var reset = document.getElementById('reset_submit');
	var back = document.getElementById('a2');
	// 提交弹框事件：包括没做完的，做完决定是否确认提交
	var Vdata = {
		"code":0,
	   	"1":{
	   		"question":"这是第一题",
	   		"1":"第一题第一个选项",
	   		"2":"第1题第2个选项",
	   		"3":"第1题第3个选项",
	   		"right":1},
	   	"2":{
	   		"question":"这是第二题",
	   		"1":"第2题第一个选项",
	   		"2":"第2题第2个选项",
	   		"3":"第2题第3个选项",
	   		"right":2},
	   	"3":{
	   		"question":"这是第3题",
	   		"1":"第3题第一个选项",
	   		"2":"第3题第2个选项",
	   		"3":"第3题第3个选项",
	   		"right":3},
	   	"4":{
	   		"question":"这是第4题",
	   		"1":"第4题第一个选项",
	   		"2":"第4题第2个选项",
	   		"3":"第4题第3个选项",
	   		"right":3},

	   	}
//123 abc
//for(var 9)
	   console.log(Vdata[1][3]);


	var question = document.getElementsByClassName('question');
	//更改题目
		for(var i=0,j=question.length;i<j;i++){
		question[i].innerHTML = Vdata[i+1].question;
	}	


	//更改选项
		for(var i = 0, j = choosed.length;i<j;i++){			
			choosed[i].innerHTML = Vdata[Math.floor(i/3)+1][i%3+1];
		}
	

	var total_number = 0;
	submit.onclick = function(){	
			var now_number = 0;
			for(var j = 0;j<radios.length;j++){
				if(radios[j].checked){
					now_number++;
					if((j%3+1)==Vdata[Math.floor(j/3)+1].right){
						total_number++;		
					}	
				}
			}
			if (now_number < questions_number) {
				pop_fail.style.display = "block";
				back.onclick = function(){
				pop_fail.style.display = "none";
				}	
			}else{
				pop_sure.style.display = "block";
				reset.onclick = function(){
					pop_sure.style.display = "none";
					total_number = 0;//防止是否提交的时候点击取消再提交分数重复加
				}
				sure_submit.onclick= function(){
					alert(total_number);
			}		
			}
			return false;
		}



// console.log(Vdata.q);
// $.ajax({
// 	type:"post",
// 	dataType:"jsonp",
// 	url:"http://111.230.129.167/examination/index.php/Home/Index/test/",
// 	callback:"",
// 	success:function(d){
// 		console.log(d)
// 	}
// })


}