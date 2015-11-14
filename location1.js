var Alaska;
var wind=0;
var clouds;
var cloudSize;
var rain;

var sunrise;
var sunset;

var windPulse = "fadein";

var city;


function preload() {
  
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=Alaska,US&APPID=f02124924447c73bc1d1626b1bee5f45';
  Alaska = loadJSON(url);

}

function setup() {
  
  createCanvas(400,400);

  clouds = Alaska.clouds.all;

  cloudSize = 400/clouds;

  rain = Alaska.rain;

  sunrise = new Date(Alaska.sys.sunrise*1000);
  sunset = new Date(Alaska.sys.sunset*1000);




}

function draw() {

	background(random(wind-10,wind+10),0,180);

	if (windPulse == "fadein"){
		wind += Alaska.wind.speed;
	}else if (windPulse == "fadeout"){
		wind -= Alaska.wind.speed;
	}

	if (wind > 255){
		windPulse = "fadeout";
	}else if (wind < 0){
		windPulse = "fadein";
	}

	for (var c = 0; c < clouds; c++){
		fill("white");
		ellipse(random(0,400), random(0,400), cloudSize, cloudSize);
	}

	for (var r = 0; r < rain; r++){
		line(random(0,400), random(0,400), c,c);
	}





	textSize(22);
	textAlign(LEFT);

	//sunrise
	fill("yellow");
	rect(0,50,400,40);
	fill("black");
	text(Alaska.name, 22, 75);
	text(sunrise.toLocaleTimeString(), 200,75);


	//sunset
	fill("black");
	rect(0,300,400,40);
	fill("white");
	text(sunset.toLocaleTimeString(), 200,325);

	textAlign(CENTER);
	textSize(18);
	var today = new Date;
	 text(today, 200, 200);




















}