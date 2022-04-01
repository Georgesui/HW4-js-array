console.log('------------- # 5');
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}
ask(
	"Вы согласны?",
	() => console.log("Вы согласились."),
	() => console.log("Вы отменили выполнение.")
);
console.log('------------- # 6');

let newString = 'my-short-string';
let newArray = newString.split('-');
console.log(newArray);

console.log('------------- # 7');
let firstArray = ['JavaScript', 2015];
let firstString = firstArray.join(' ');
console.log(firstString);

console.log('------------- # 8');
let users = [
	{ id: 1, name: "Vic", age: 21 },
	{ id: 2, name: "Petya", age: 30 },
	{ id: 3, name: "Jon", age: 5 }];
let newFilter = users.filter(function (item) {
	return item.age < 20
})
console.log(newFilter);

console.log('------------- # 9');
let newUsers = [
	{ id: 1, name: "Vic", age: 21 },
	{ id: 2, name: "Petya", age: 30 },
	{ id: 3, name: "Jon", age: 5 }];
let names = newUsers.map((item) => item.name);
console.log(names);

console.log('------------- # 10');
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		let newCount = arr[i];
		if (newCount < a || newCount > b) {
			arr.splice(i, 1);
			i--
		}
	}
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);

console.log('------------- # 11');

function splitterFunc(secondString, splitter) {
	let seconArray = secondString.split(splitter)
	return seconArray
}
console.log(splitterFunc('Art, For, Cont', (', ')));

console.log('------------- # 12');

function slArray(arrTwelve, startIndex, endIndex) {
	let range = arrTwelve.slice(startIndex, endIndex)
	return range
}
let arrTwelve = [5, 3, 8, 1];
console.log(slArray(arrTwelve, 1, 4));
console.log(arrTwelve);

console.log('------------- # 13');

function sum(...arg) {
	let firstSum = 0;
	for (let arr of arg) {
		firstSum += arr;
	}
	return firstSum;
}
console.log(sum(1, 2, 3, 4, 5));