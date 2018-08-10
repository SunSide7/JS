// введенные пользователем данные 
let monthBudjetDataFromUser;
let shopNameDataFromUser;

// основные данные
let mainList = {
	budjet: 1000,
	shopName: "enter name of shop",
	shopGoods: [],
	employers: {},
	open: false
};


// ***********************************

monthBudjetDataFromUser = prompt("Ваш бюджет на месяц?");
shopNameDataFromUser = prompt("Название вашего магазина?");
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

console.log("Бюджет на месяц: " + monthBudjetDataFromUser);
console.log("Название магазина: " + shopNameDataFromUser);
console.log("Типы товаров: " + mainList.shopGoods);


