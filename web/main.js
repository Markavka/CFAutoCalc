// Выполнение функции, полученой из Python
// async function call() {
// 	await eel.call_in_js('hello world')
// }
// call();

//========================================================================

// Функция, которая передаётся в Python
// eel.expose(call_in_python);
// function call_in_python(x) {
// 	console.log(x);
// }

//========================================================================

// Кнопочка "Очистить"
let btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', function () {
	tableMaim.innerHTML = '';
});

const tableMaim = document.querySelector('.table-main');



let btn = document.querySelector('#btn');
btn.addEventListener('click', sendData)


async function sendData() {
	let level = document.querySelector('#level').value;
	let generalBots = document.querySelector('#generalBots');
	let bots = document.querySelector('#bots').value;
	let bullets = document.querySelector('#bullets').value;
	let top = document.querySelector('#top').value;
	let primalBeast = document.querySelector('#primalBeast').value;
	let violet = document.querySelector('#violet').value;
	// ★★★
	//S
	let damageS = document.querySelector('#damageS').value;
	let rateS = document.querySelector('#rateS').value;
	let critS = document.querySelector('#critS').value;
	let damageRateS = document.querySelector('#damageRateS').value;
	let damageCritS = document.querySelector('#damageCritS').value;
	let rateCritS = document.querySelector('#rateCritS').value;
	//A
	let damageA = document.querySelector('#damageA').value;
	let rateA = document.querySelector('#rateA').value;
	let critA = document.querySelector('#critA').value;
	let damageRateA = document.querySelector('#damageRateA').value;
	let damageCritA = document.querySelector('#damageCritA').value;
	let rateCritA = document.querySelector('#rateCritA').value;
	//B
	let damageB = document.querySelector('#damageB').value;
	let rateB = document.querySelector('#rateB').value;
	let critB = document.querySelector('#critB').value;
	let damageRateB = document.querySelector('#damageRateB').value;
	let damageCritB = document.querySelector('#damageCritB').value;
	let rateCritB = document.querySelector('#rateCritB').value;
	//C
	let damageC = document.querySelector('#damageC').value;
	let rateC = document.querySelector('#rateC').value;
	let critC = document.querySelector('#critC').value;
	let damageRateC = document.querySelector('#damageRateC').value;
	let damageCritC = document.querySelector('#damageCritC').value;
	let rateCritC = document.querySelector('#rateCritC').value;
	//D
	let damageD = document.querySelector('#damageD').value;
	let rateD = document.querySelector('#rateD').value;
	let critD = document.querySelector('#critD').value;
	let damageRateD = document.querySelector('#damageRateD').value;
	let damageCritD = document.querySelector('#damageCritD').value;
	let rateCritD = document.querySelector('#rateCritD').value;
	// ★★
	//S
	let damageS2 = document.querySelector('#damageS2').value;
	let rateS2 = document.querySelector('#rateS2').value;
	let critS2 = document.querySelector('#critS2').value;
	//A
	let damageA2 = document.querySelector('#damageA2').value;
	let rateA2 = document.querySelector('#rateA2').value;
	let critA2 = document.querySelector('#critA2').value;
	//B
	let damageB2 = document.querySelector('#damageB2').value;
	let rateB2 = document.querySelector('#rateB2').value;
	let critB2 = document.querySelector('#critB2').value;
	//C
	let damageC2 = document.querySelector('#damageC2').value;
	let rateC2 = document.querySelector('#rateC2').value;
	let critC2 = document.querySelector('#critC2').value;
	//D
	let damageD2 = document.querySelector('#damageD2').value;
	let rateD2 = document.querySelector('#rateD2').value;
	let critD2 = document.querySelector('#critD2').value;
	// ★
	//S
	let damageS1 = document.querySelector('#damageS1').value;
	let rateS1 = document.querySelector('#rateS1').value;
	let critS1 = document.querySelector('#critS1').value;
	//A
	let damageA1 = document.querySelector('#damageA1').value;
	let rateA1 = document.querySelector('#rateA1').value;
	let critA1 = document.querySelector('#critA1').value;
	//B
	let damageB1 = document.querySelector('#damageB1').value;
	let rateB1 = document.querySelector('#rateB1').value;
	let critB1 = document.querySelector('#critB1').value;
	//C
	let damageC1 = document.querySelector('#damageC1').value;
	let rateC1 = document.querySelector('#rateC1').value;
	let critC1 = document.querySelector('#critC1').value;
	//D
	let damageD1 = document.querySelector('#damageD1').value;
	let rateD1 = document.querySelector('#rateD1').value;
	let critD1 = document.querySelector('#critD1').value;

	if (generalBots.checked) {
		generalBots = 1
	} else {
		generalBots = 0
	}

	let total = await eel.recv_data(level, generalBots, bots, bullets, primalBeast, violet,
		damageS, rateS, critS, damageRateS, damageCritS, rateCritS,
		damageA, rateA, critA, damageRateA, damageCritA, rateCritA,
		damageB, rateB, critB, damageRateB, damageCritB, rateCritB,
		damageC, rateC, critC, damageRateC, damageCritC, rateCritC,
		damageD, rateD, critD, damageRateD, damageCritD, rateCritD,
		damageS2, rateS2, critS2,
		damageA2, rateA2, critA2,
		damageB2, rateB2, critB2,
		damageC2, rateC2, critC2,
		damageD2, rateD2, critD2,
		damageS1, rateS1, critS1,
		damageA1, rateA1, critA1,
		damageB1, rateB1, critB1,
		damageC1, rateC1, critC1,
		damageD1, rateD1, critD1,
	)();



	// Сортирует массив по убыванию (От большего суммарного урона к меньшему)
	if (total.length > 0) {
		total = total.sort(sortTotalArray);

		// Суммарный урон
		function sortTotalArray(a, b) {
			a = a[total[0].length - 2];
			b = b[total[0].length - 2];
			if (a < b)
				return 1;
			else if (a > b)
				return -1;
			else
				return 0;
		}

		console.log(total);

		// Вывод информации на экран---------------------------------------------

		// Если есть ВЗ 
		if (total[0].length > 10) {
			tableMaim.innerHTML = `<tr class="table-main__headings">
												<th>№</th>
												<th>Комбинация</th>
												<th>Суммарный урон за 100 выстрелов</th>
												<th>Комбинация ботов</th>
												<th>Максимальный Урон ЛКМ</th>
												<th>Максимальный Крит ЛКМ</th>
												<th>Максимальный Урон ЛКМ от ВЗ</th>
												<th>Максимальный Крит ЛКМ от ВЗ</th>
												<th>Средний Урон за 100 выстрелов ЛКМ минус урон от ВЗ</th>
												<th>Средний Крит за 100 выстрелов ЛКМ минус урон от ВЗ</th>
												<th>Суммарный урон за 100 выстрелов ЛКМ минус урон от ВЗ</th>
												<th>Средний Урон от ВЗ за 100 выстрелов ЛКМ</th>
												<th>Средний Крит от ВЗ за 100 выстрелов ЛКМ</th>
												<th>Суммарный урон от ВЗ за 100 выстрелов ЛКМ</th>
												<th>Полный суммарный урон за 100 выстрелов ЛКМ при наличии ВЗ</th>
											</tr>`
			for (let index = 0; index < top; index++) {
				const totalItem = total[index];

				// Превью комбинаций
				let combPrev = totalItem[11]
				let combPrevFilter = []
				combPrev.forEach(combPrevItem => {
					if (typeof combPrevItem === "object") {
						combPrevFilter.push(combPrevItem.join(''))
					} else {
						combPrevFilter.push(combPrevItem)
					}
				});
				// toFixed(2) - 2 числа после точки
				// floor - округление в меньшую сторону

				let combination = totalItem[totalItem.length - 1]
				let fullDamage100 = totalItem[totalItem.length - 2].toFixed(2)

				let maxDamage = Math.floor(totalItem[0])
				let maxCrit = Math.floor(totalItem[1])

				let maxDamagePB = Math.floor(totalItem[2])
				let maxCritPB = Math.floor(totalItem[3])

				let avDamageMinusPB100 = totalItem[4].toFixed(2)
				let avCritMinusPB100 = totalItem[5].toFixed(2)
				let sumDamageMinusPB100 = totalItem[6].toFixed(2)

				let avDamageFromPB100 = totalItem[7].toFixed(2)
				let avCritFromPB100 = totalItem[8].toFixed(2)
				let sumDamageFromPB100 = totalItem[9].toFixed(2)
				tableMaim.innerHTML += `<tr>
												<td>${index + 1}</td>
												<td>${totalItem[totalItem.length - 1]}
												<ul class="combPrev">
													<li><img src="img/${combPrevFilter[0]}.png"></li>
													<li><img src="img/${combPrevFilter[1]}.png"></li>
													<li><img src="img/${combPrevFilter[2]}.png"></li>
													<li><img src="img/${combPrevFilter[3]}.png"></li>
													<li><img src="img/${combPrevFilter[4]}.png"></li>
													<li><img src="img/${combPrevFilter[5]}.png"></li>
												</ul></td>
												<td>${fullDamage100}</td>
												<td>${totalItem[10]}</td>

												<td>${maxDamage}</td>
												<td>${maxCrit}</td>

												<td>${maxDamagePB}</td>
												<td>${maxCritPB}</td>

												<td>${avDamageMinusPB100}</td>
												<td>${avCritMinusPB100}</td>
												<td>${sumDamageMinusPB100}</td>

												<td>${avDamageFromPB100}</td>
												<td>${avCritFromPB100}</td>
												<td>${sumDamageFromPB100}</td>

												<td>${fullDamage100}</td>
											</tr>`
			}

		} else { // Если ВЗ нет
			tableMaim.innerHTML = `<tr class="table-main__headings">
												<th>№</th>
												<th>Комбинация</th>
												<th>Суммарный урон за 100 выстрелов</th>
												<th>Комбинация ботов</th>
												<th>Максимальный Урон ЛКМ</th>
												<th>Максимальный Крит ЛКМ</th>
												<th>Средний Урон за 100 выстрелов ЛКМ</th>
												<th>Средний Крит за 100 выстрелов ЛКМ</th>
											</tr>`
			for (let index = 0; index < top; index++) {
				const totalItem = total[index];

				// Превью комбинаций
				let combPrev = totalItem[5]
				let combPrevFilter = []
				combPrev.forEach(combPrevItem => {
					if (typeof combPrevItem === "object") {
						combPrevFilter.push(combPrevItem.join(''))
					} else {
						combPrevFilter.push(combPrevItem)
					}
				});

				// toFixed(2) - 2 числа после точки
				// floor - округление в меньшую сторону
				tableMaim.innerHTML += `<tr>
												<td>${index + 1}</td>
												<td>${totalItem[totalItem.length - 1]}
												<ul class="combPrev">
													<li><img src="img/${combPrevFilter[0]}.png"></li>
													<li><img src="img/${combPrevFilter[1]}.png"></li>
													<li><img src="img/${combPrevFilter[2]}.png"></li>
													<li><img src="img/${combPrevFilter[3]}.png"></li>
													<li><img src="img/${combPrevFilter[4]}.png"></li>
													<li><img src="img/${combPrevFilter[5]}.png"></li>
												</ul></td>
												<td>${totalItem[totalItem.length - 2].toFixed(2)}</td>
												<td>${totalItem[4]}</td>
												<td>${Math.floor(totalItem[0])}</td>
												<td>${Math.floor(totalItem[1])}</td>
												<td>${totalItem[2].toFixed(2)}</td>
												<td>${totalItem[3].toFixed(2)}</td>
											</tr>`
			}
		}
	}



}


//<SlideToggle>===================================================
// Анимированно скрывает объект
function _slideUp(target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
// Анимированно показывает объект
function _slideDown(target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
// Анимированно показывает/скрывает объект
function _slideToggle(target, duration = 500) {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
//</SlideToggle>==================================================

// Settings ========================================================================

const mainSettingIcon = document.querySelector('.settings-additional__setting-icon');
const mainSettings = document.querySelector('.settings-additional__body');

mainSettingIcon.addEventListener('click', function (e) {
	mainSettingIcon.classList.toggle('_active');
	_slideToggle(mainSettings);
	e.preventDefault();
});

// info ========================================================================

const settingsAdditionalInfo = document.querySelector('.settings-additional__info');
const infoMain = document.querySelector('.info-main');

settingsAdditionalInfo.addEventListener('click', function (e) {
	settingsAdditionalInfo.classList.toggle('_active');
	infoMain.classList.toggle('_active');
	e.preventDefault();
});

// Скрытие рун ========================================================================

const settingsStars = document.querySelectorAll('.settings__stars span');
console.log(settingsStars);

settingsStars.forEach(settingsStar => {
	settingsStar.addEventListener('click', function (e) {
		_slideToggle(settingsStar.parentElement.nextElementSibling);
	});
});




