function Hero(){
	this.h_name = "name"
	this.location = 0
}

Hero.prototype.skill_1 = function(){
	this.name = "skill_1"
	return "skill_1";
}




function Samuro(){
	Hero.call(this)
	this.h_name = "Samuro"
}
	
Samuro.prototype = new Hero()
Samuro.prototype.skill_1 = function(){
	this.name = "mirror image"
	return "mirror image";
}