function extend(parentClass, childClass) {
	let _ = function() {};
	_.prototype = parentClass.prototype;
	childClass.prototype = new _();
	childClass.prototype.constructor = childClass;
	childClass.prototype.parent = parentClass.prototype;
	return childClass;
}

let Person = function(name, sex) {
	this.name = name;
	this.sex = sex;
}
Person.prototype.number = '0';
Person.prototype.getName = function() {
	return this.name;
}
Person.prototype.getSex = function() {
	return this.sex;
}
Person.prototype.say = function() {
	console.log('Hi Person');
}

let Teacher = extend(Person, function(name, sex) {
	this.parent.constructor(name, sex);
});
Teacher.prototype.number = '1';
Teacher.prototype.say = function() {
	console.log('Hi Teacher');
}

let person = new Person('p', 'male');
let teacher = new Teacher('t', 'female');
console.log(person.number, person.getName(), person.getSex());
console.log(teacher.number, teacher.getName(), teacher.getSex());
