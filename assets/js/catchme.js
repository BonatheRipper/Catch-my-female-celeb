


var set = document.querySelectorAll('.setBack');
var points = $(".points");
var score = $(".score");
var scoresheet = $(".innerspan");
var box = document.querySelectorAll('.box');
var ranD = $('.ranD');
var outer = $('#outer');
var select = $('select');
var setTime = $('#setTime')
var delay;

//Random image
var arr = []
var copy = []
for(var i = 0; arr.length<6; i++){
	var randomNum = Math.floor(Math.random() * 6)
	if(!copy[randomNum]){
		arr.push(randomNum)
		outer.append(ranD[randomNum])
		copy[randomNum]=true


	}
}
//Random Time
var randtime = Math.floor(Math.random() * 2000 || 5000);

//random Box
  function randImg(){
 	    var interval = setInterval(function(){
 		var rand = Math.floor(Math.random() * box.length)
 		var holes = box[rand]
 		holes.classList.add("box1");
 		setTimeout(function(){
 			holes.classList.remove("box1")
 		}, randtime)

 	}, randtime)
 	    //Time for game to last
 	setTimeout(function(){
 		clearInterval(interval)
 	}, delay)
 	console.log(setTimeout)
 }

 

 
 
// Scores and points
 $('.box').on('click', function(){
 	var a = 0
 
 	$('.name').text(this.name)
 	if(this.name == "Kirachanna"){
 		points.text('15');
 		a+=15;
 	}
 	else if(this.name == "Kendall"){
 		points.text('25')
 		a+=25;
 	}
 	else if(this.name == "Regina"){
 		points.text('5');
 		a+=5;
 	}
 	else if(this.name == "Kylie"){
 		points.text('10');
 		a+=10;
 	}
 	else if(this.name == "Rihana"){
 		points.text('20');
 		a+=20
 	}
 	else if(this.name == "Amanda"){
 		points.text('10');
 		a+=10;
 	}
 	//Score sheet
 	score.text(Number(score.text())+Number(a))
 	eval(score.text())
 	scoresheet.addClass('innerSpan')
 })

 // Start, stop and set time buttons
 //Start

setTime.on('click', function(){
	if(select.val() === "10sec"){
		delay = 100*100;
	}
	else if(select.val() === "20sec"){
		delay = 200*100;
	}
	else if(select.val() === "30sec"){
		delay = 300*100;
	}
	else if(select.val() === "40sec"){
		delay = 400*100;
	}
	else if(select.val() === "50sec"){
		delay = 500*100;
	}
})
 
 $('#start').on('click', function(){
 	if(delay===undefined){
 		alert('Please set a time first')
 	}
 	else{
 		randImg()

 	}  
 	

 })
 