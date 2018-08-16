let openBtn = document.getElementById("open-btn");
// поля в левом меню
let nameValue = document.getElementsByClassName("name-value")[0];
let budgetValue = document.getElementsByClassName("budget-value")[0];
let goodsValue = document.getElementsByClassName("goods-value")[0];
let itemsValue = document.getElementsByClassName("items-value")[0];
let employersValue = document.getElementsByClassName("employers-value")[0];
let discountValue = document.getElementsByClassName("discount-value")[0];
let isopenValue = document.getElementsByClassName("isopen-value")[0];
//кнопки
let goodsItemBtn = document.getElementsByTagName("button")[1];
let countBudgetBtn = document.getElementsByTagName("button")[2];
let hireEmployersBtn = document.getElementsByTagName("button")[3];
let discountPromoBtn = document.getElementsByTagName("button")[4];
// поля в правом меню
let goodsItem = document.getElementsByClassName("goods-item");
let chooseItem = document.querySelector(".choose-item");
let timeValue = document.querySelector(".time-value");

let countBudgetValue = document.querySelector('.count-budget-value');
let hireEmployersItem = document.querySelectorAll(".hire-employers-item");








let monthBudjetDataFromUser,
		shopNameDataFromUser,
		time,
		price = 10000;



if (nameValue.textContent == "") {
	goodsItemBtn.setAttribute("disabled", "");
	countBudgetBtn.setAttribute("disabled", "");
	hireEmployersBtn.setAttribute("disabled", "");
	discountPromoBtn.setAttribute("disabled", "");
};


// Кнопка "Открыть магазин"
openBtn.addEventListener('click', () => {
	monthBudjetDataFromUser  = prompt("Ваш бюджет на месяц?", "");
	
	while (isNaN(monthBudjetDataFromUser) || monthBudjetDataFromUser == "" || monthBudjetDataFromUser == null) {
		monthBudjetDataFromUser  = prompt("Ваш бюджет на месяц?", "");
	}
	budgetValue.textContent = monthBudjetDataFromUser;
	
	shopNameDataFromUser  = prompt("Название вашего магазина?", "").toUpperCase();
	nameValue.textContent = shopNameDataFromUser;
	time = 19;

	goodsItemBtn.removeAttribute("disabled");
	countBudgetBtn.removeAttribute("disabled");
	hireEmployersBtn.removeAttribute("disabled");
	discountPromoBtn.removeAttribute("disabled");
});


// "Выберите категории товаров"
goodsItemBtn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length ; i++) {
		let a = goodsItem[i].value;
		
		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null  && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			i--;
		};
	};
});


// "Введите продукты через запятую"
chooseItem.addEventListener('change', () => {

		let items = chooseItem.value;
		if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(', ');
			mainList.shopItems.sort();

			itemsValue.textContent = mainList.shopItems;
		};
});

// "Сколько сейчас времени?"
timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time < 0) {
		console.log('Такого просто не может быть');
		mainList.open = false;
	} else if (time > 8  && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
	} else if (time < 9) {
		console.log('Еще рано, магазин не открыт');
		mainList.open = false;
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		mainList.open = false;
	} else {
		console.log('В сутках только 24 часа');
		mainList.open = false;
	};

	if (mainList.open == true) {
		isopenValue.style.backgroundColor = 'blue';
	} else {
		isopenValue.style.backgroundColor = 'red';
	};
});

// "Расчет дневного бюджета"
countBudgetBtn.addEventListener('click', () => {
	countBudgetValue.value = monthBudjetDataFromUser / 30;
});

// "Имена сотрудников"
hireEmployersBtn.addEventListener('click', () => {
	for (let i = 0; i < hireEmployersItem.length; i++) {
		let hire = hireEmployersItem[i].value;
			console.log('Все верно!');
			mainList.employers[i] = hire;

			employersValue.textContent += mainList.employers[i] + ', ';

	};
});

// "Дисконтная система"


discountPromoBtn.addEventListener('click', () => {
	let discountEnteredInfo = prompt("Введите промо-код (promo_198):");
	if (discountEnteredInfo == "promo_198") {
		mainList.discount = true;
	} else {
		mainList.discount = false;
	};

	if (mainList.discount == true) {
		discountValue.style.backgroundColor = 'blue';
	} else {
		discountValue.style.backgroundColor = 'red';
	};
});





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
	makeDiscount: function makeDiscount () {
				if (mainList.discount == true) {
					let priceDiscounted = price/100*80;
					alert("Вы получили скидку! Для Вас цена на наш новый товар " + priceDiscounted + "р. вместо " + price + "р.");
				};
	}
};






