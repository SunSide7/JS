let monthBudjetDataFromUser,
		shopNameDataFromUser,
		time,
		price = 10000;

function start() {
	monthBudjetDataFromUser  = prompt("Ваш бюджет на месяц?", "");
	while (isNaN(monthBudjetDataFromUser) || monthBudjetDataFromUser == "" || monthBudjetDataFromUser == null) {
		monthBudjetDataFromUser  = prompt("Ваш бюджет на месяц?", "");
	}
	shopNameDataFromUser  = prompt("Название вашего магазина?", "").toUpperCase();
	time = 19;
}


start();

let mainList = {
	budjet: monthBudjetDataFromUser,
	shopName: shopNameDataFromUser,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
};

let functions = {
	chooseGoods: function chooseGoods () {
				for (let i = 0; i < 5; i++) {
					let a = prompt("Какой тип товаров будем продавать?", "");
					
					if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null  &&  a != ''  && a.length < 50) {
						console.log('Все верно!');
						mainList.shopGoods[i] = a;
					} else {
						i--;
					}
				}
	},
	workTime: function workTime (time) {
				if (time < 0) {
					console.log('Такого просто не может быть');
				} else if (time > 8  && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
				} else if (time < 9) {
					console.log('Еще рано, магазин не открыт');
				} else if (time < 24) {
					console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа');
				}
	},
	dailyBudjet: function dailyBudjet () {
				console.log("Бюджет на день: " + mainList.budjet / 30);
	},
	makeDiscount: function makeDiscount () {
				if (mainList.discount == true) {
					let priceDiscounted = price/100*80;
					alert("Вы получили скидку! Для Вас цена на наш новый товар " + priceDiscounted + "р. вместо " + price + "р.");
				};
	},
	hireEmloyeers: function hireEmloyeers() {
				for (let i = 0; i < 4; i++) {
					let hire = prompt("Имя сотрудника?", "");
					if ((typeof(hire)) === 'string'  &&  (typeof(hire)) !== null  &&  hire != ''  && hire.length < 50) {
							console.log('Все верно!');
							mainList.employers[i] = hire;
					} else {
						i--;
					};
				};
				console.log(mainList.employers);
	},
	chooseShopItems: function() {
		for (i = 0; i < 1; i++) {
		let items = prompt("Перечислите через запятую ваши товары", "");
			if ((typeof(items)) === 'string'  &&  (typeof(items)) !== null  &&  items != ''  && items.length < 50) {
				// убираем ненужную запятую в конце 
				let itemsSplitArr = items.split("");
				if (itemsSplitArr[itemsSplitArr.length-1] == ',') {
					itemsSplitArr.pop();
					items = "";
					items = itemsSplitArr.join("");
				};
				//

				mainList.shopItems = items.split(",");
				// проверка строки "Подождите, еще"
				for (a = 0; a < 1; a++) {
					let itemsMore = prompt("Подождите, еще ", "");
						if ((typeof(itemsMore)) === 'string'  &&  (typeof(itemsMore)) !== null  &&  itemsMore != ''  && itemsMore.length < 50) {
						mainList.shopItems.push(itemsMore);
					} else {
						a--;
					};
				};

				mainList.shopItems.sort();
				console.log(mainList.shopItems);
			} else {
				i--;
			};
		};
	},
	shopItemsListMessage: function () {
		document.write("У нас вы можете купить:<br>");
		mainList.shopItems.forEach(function(item, i, arr) {
			alert("У нас вы можете купить:  " + (i+1) + ". " + arr[i]);
			document.write((i+1) + ". " + arr[i] + "<br>");
		});
	},
	shopList: function () {
		for (let key in mainList) {
			console.log("Наш магазин включает в себя: " + mainList[key]);
		};
	}

};

// ***********************************


functions.chooseGoods();
functions.workTime(7);
console.log("Бюджет на месяц: " + mainList.budjet);
console.log("Название магазина: " + mainList.shopName);
console.log("Типы товаров: " + mainList.shopGoods);

functions.dailyBudjet();
functions.makeDiscount();
functions.hireEmloyeers();
functions.chooseShopItems();
functions.shopItemsListMessage();
functions.shopList();







