let monthBudjetDataFromUser,
		shopNameDataFromUser,
		time,
		price = 10000;

function start() {
	monthBudjetDataFromUser  = prompt("Ваш бюджет на месяц?");
	while (isNaN(monthBudjetDataFromUser) || monthBudjetDataFromUser == "" || monthBudjetDataFromUser == null) {
		monthBudjetDataFromUser  = prompt("Ваш бюджет на месяц?");
	}
	shopNameDataFromUser  = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}

function chooseGoods () {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		
		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null  &&  a != ''  && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}
	}
}

function workTime (time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if (time > 8  && time < 20) {
		console.log('Время работать!');
	} else if (time < 9) {
		console.log('Еще рано, магазин не открыт');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках только 24 часа');
	}
};

start();

let mainList = {
	budjet: monthBudjetDataFromUser,
	shopName: shopNameDataFromUser,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};

function dailyBudjet () {
	console.log("Бюджет на день: " + mainList.budjet / 30);
};

function discount () {
	if (mainList.discount == true) {
		let priceDiscounted = price/100*80;
		alert("Вы получили скидку! Для Вас цена на наш новый товар " + priceDiscounted + "р. вместо " + price + "р.");
	};
};

function hireEmloyeers() {
	for (let i = 0; i < 4; i++) {
		let hire = prompt('Имя сотрудника?');
		if ((typeof(hire)) === 'string'  &&  (typeof(hire)) !== null  &&  hire != ''  && hire.length < 50) {
				console.log('Все верно!');
				mainList.employers[i] = hire;
		} else {
			i--;
		}
	}
	console.log(mainList.employers);
}


// ***********************************


chooseGoods();
workTime(7);
console.log("Бюджет на месяц: " + mainList.budjet);
console.log("Название магазина: " + mainList.shopName);
console.log("Типы товаров: " + mainList.shopGoods);

dailyBudjet();
discount();
hireEmloyeers();







