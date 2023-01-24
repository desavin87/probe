$('.block').html('<span>Hello</span>');

document.getElementById('my-button').addEventListener('click', function () {
	console.log('Hello 1');
});
document.getElementById('my-button').addEventListener('blur', function () {
	console.log('Hello 2');
});

function Person(name, lastName) {
	this.name = name;
	this.lastName = lastName;
}
Person.prototype.getName = function () {
	return this.name + ' ' + this.lastName;
};

var person1 = new Person('Ivan', 'Ivanovich');
console.log(person1.getName());