let age = document.getElementById('age');
 
function showUser(surname, name) {
	this.age = age.value;
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.age);
}
 
showUser('Alex', 'Strong');

console.log(age.value)