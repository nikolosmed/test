// 'use strict';

let money,
	name,
	time,
	price

function start() {
	money = prompt("Ваш бюджет?", '');
	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?", '');
	}

	name = prompt("Название вашего магазина?", '').toUpperCase();
	time = 21;
}
// start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shoopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товара будет продоваться?", '');

			if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.length < 50) {
				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого Просто не может быть!');
		} else if (time > 8 && time < 20) {
			console.log('Время роботать!');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!')
		} else {
			console.log('В сутках тoлько 24 часа!');
		}
	},
	dayBudget: function dayBudget() {
		alert("Ежедневный бюджет " + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price / 100) * 80;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i < 4; i++) {
			let name = prompt("Имя сотрудника");
			mainList.employers[i] = name;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");

		mainList.shoopItems = items.split(",");
		mainList.shoopItems.push(prompt("Подождите, ещё ", ""));
		mainList.shoopItems.sort();
	}
}


console.log(mainList);

//alert("Ежедневный бюджет " + mainList.budget / 30);



/*let soldier = {
	health: 400,
	armor: 100
}

let john = {
	health: 100
}

john.__proto__ = soldier

console.log(john);
console.log(john.armor);*/

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[2]);