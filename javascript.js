var loop=function(color){
	if(++color==255**3){
		color=0;
	}

}
var toHex=function(numb){
	let firstSet=numb%(255**2);
	let secSet=(numb-firstSet)%255;
	let LastSet=(numb-firstSet-secSet);
	console.log("#"+firstSet+" "+secSet+" "+lastSet);
}
var RUN=function(){
	console.log(document.body.style.backgroundColor);
}
//toHex()