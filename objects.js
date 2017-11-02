var Food = function Food(name){
	//defines the Food Object
	this.name = name;
};
//adds a juice method to the food object
Food.prototype.juice = function(){
	console.log("juicing")+' '+this.type+' '+this.name;
};
// Fruit inherits from Food
var Fruit = function Fruit(name){
	
};
Fruit.prototype = Object.create(Food.prototype);
Fruit.prototype.sayName = function(){
	console.log('i am an' + " "+ this.name)
};
//Apple inherits from Fruit
var Apple = function Apple(name,hasSkin,type){
	//defines the Apple object
	this.name = name;
	this.type = type;
	this.hasSkin = hasSkin;
	};
Apple.prototype = Object.create(Fruit.prototype)
Apple.prototype.removeSkin = function(){
		if(this.hasSkin){
			console.log('skinning'+' '+this.type+' '+this.name)
		}else{
			console.log('skin needs to be removed'+' '+this.name)
		}
};
// vegetable inherits from food
function Vegetable(){
	// defines the object
}
Vegetable.prototype = Object.create(Food.prototype)
Vegetable.prototype.wash = function(){
	console.log('washing a vegetable')
};
// carrot inherits from vegetable
var Carrot = function (){
	//defines the carrot object
}
Carrot.prototype = Object.create(Vegetable.prototype);
var a = new Apple('apple',true,'gala')
var b = new Apple("apple",true,'fuji')
var c = new Carrot('carrot');
a.sayName();
b.sayName();
a.removeSkin();
b.removeSkin();
a.juice();
b.juice();
c.wash();
c.juice();

