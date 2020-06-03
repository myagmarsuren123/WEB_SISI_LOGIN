 var div01 = document.getElementsByClassName("img");
 var img = ["01.jpg", "02.jpg","03.jpg","04.jpg", "05.jpg", "06.jpg","07.jpg","08.jpg", "01.jpg", "02.jpg","03.jpg","04.jpg", "05.jpg", "06.jpg","07.jpg","08.jpg"];
 var time = 0;
 var hoho = [];
 var g = 0;
 var count = 0;
 var start ;
 var correct = [];

 function swap(array){
 	var l = array.length;
 	var k, s, i;
 	while(l != 0) {
 		s = Math.floor(Math.random() * l);
 		k = array[s];
 		l--;
 		array[s] = array[l];
 		array[l] = k;
 	}
 	return array;
 } 
 img  = swap(img);

 for (var i = 0 ; i < img.length; i++) {
 	div01[i].style.backgroundImage = "url(img/"+img[i]+")";
 	div01[i].style.backgroundSize = "90px 120px";
 }

 setTimeout(function() { 
 	for (var i = 0 ; i < img.length; i++) {
 		div01[i].style.backgroundImage = "";
    }
    setTimeout(function() {
    	alert("Эхлэх бол OK 👌");
    	start = setInterval(function() {
    		time++;
    		document.getElementById("timer").innerHTML = time;
    	}, 1000);
    }, 50);    	
 }, 3000);

 function choose(x) {
 	if(!correct.includes(x)){

 		div01[x].style.backgroundImage = "url(img/"+img[x]+")";
	 	div01[x].style.backgroundSize = "90px 120px";

	 	hoho[g] = x;
	 	g++;
	 	if(g > 1){
	 		if(img[hoho[0]] == img[hoho[1]]){
	 			correct.push(hoho[0]);
	 			correct.push(hoho[1]);
	 			count++;
	 		}else {
	 		    var h = hoho[0];
	 		    var h1 = hoho[1];

	 			setTimeout(function(){
	 				div01[h].style.backgroundImage = "";
 					div01[h1].style.backgroundImage = "";
	 			}, 500);
	 		}
	 	  hoho = [];
	 	  g = 0;
	 	}

	 	if(count == 8){
	 		document.getElementById("time").innerHTML = "Баяр хүргье.Та "+ time + " секундэд дуусгалаа🎉";
	 		clearInterval(start);
	 	}
 	}	 	
 }







 







