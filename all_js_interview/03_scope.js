// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// По сути scope - это что-то, что говорит нам о доступности определённых
// переменных в функциях в нашем коде
// И по сути существует два понятия: это глобальный scope и локальный scope
// Глобальный scope - это когда переменные, объявленные, допустим, вне ф-ии
// но при этом доступны внутри всех функций, к-е находятся внутри этого
// scope'а
// В браузере window или document - относятся именно как к глобальному scope'у
// то есть они доступны во всех ф-ях сразу же
// При этом есть локальный scope - когда переменные доступны только в рамках
// одной ф-ии или в дочерней ф-ии
// Scope указывает на доступность определённых переменных, да это именно
// область видимости
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function funcA() {
	let a = 1;

	function funcB() {
		let b = 2;

		function funcC() {
			let c = 3;

			console.log('funcC:', a, b, c);
		}

		funcC();
		console.log('funcB:', a, b);
	}

	funcB();
	console.log('funcA:', a);
}

funcA(); /*
funcC: 1 2 3
funcB: 1 2
funcA: 1
*/