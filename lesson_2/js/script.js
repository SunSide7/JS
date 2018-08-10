let monthBudjetDataFromUser  = prompt("Ваш бюджет на месяц?");
let shopNameDataFromUser  = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
	budjet: monthBudjetDataFromUser,
	shopName: shopNameDataFromUser,
	shopGoods: [],
	employers: {},
	open: false
};


// ***********************************

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null  &&  a != ''  && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
}

if (time < 0) {
	console.log('Такого просто не может быть');
} else if (time > 8  && time < 20) {
	console.log('Время работать!');
} else if (time < 24) {
	console.log('Уже слишком поздно!');
} else {
	console.log('В сутках только 24 часа');
}

console.log("Бюджет на месяц: " + monthBudjetDataFromUser);
console.log("Название магазина: " + shopNameDataFromUser);
console.log("Типы товаров: " + mainList.shopGoods);

console.log("Бюджет на день: " + mainList.budjet / 30);


