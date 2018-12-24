// 让数字千分号显示
 function fn(x){
	var a = x.toString();//将数字类型转换为字符串型
	var arr = [];        //定义一个空数组
	for(var i=0;i<a.length;i++){
		arr.push(a[i]);
	} 					//遍历字符串a加入数组arr中
	for(var m=0;m<arr.length;m++){
		if (m%4===0 && m>=3) {
			arr.splice(m-1,0,',')
		}
	}					//遍历数组arr每隔四位在前一位加一个千分号
	var qian=arr.join('');//将数组转换为字符串
	alert(qian)
}

//数组去重
function unique(arr){
　　var res = [arr[0]];	//定义一个新数组中有原数组第一个元素
　　for(var i=1;i<arr.length;i++){//遍历数组arr
　　　　var repeat = false;//定义条件便量
　　　　for(var j=0;j<res.length;j++){//遍历数组res
　　　　　　if(arr[i] === res[j]){//如果数组arr中有何数组res中相同的元素改变条件变量并跳出当前循环
　　　　　　　repeat = true;
　　　　　　　　break;
　　　　　　}
　　　　}
　　　　if(!repeat){//如果数组arr中没有和res相同的元素，则加入
　　　　　　res.push(arr[i]);
　　　　}
	}
		alert(res)
}
//输出HelloJavaScript
function fun(n){
	var a =[] 		//定义一个空数组a
	var c= []		//定义一个空数组c
	for(var i=0;i<n.length;i++){	//遍历数组n
		a=n[i]						//取得每个元素第一个字母
		var b=a[0].toUpperCase();	//将字符变为大写字符
		var arr=[]					//定义一个空数组arr
		for(var j=0;j<a.length;j++){//将a中的元素遍历到arr中
			arr.push(a[j])
		}
			arr.shift();   			//将arr第一个元素删除
			arr.unshift(b);			//在头部加上b大写字母
			var p=arr.join('')		//将arr转换为字符串
			c.push(p)				//添加到c中
	}
	var h = c.join('') 				//将c转换为字符串
	alert(h)
}