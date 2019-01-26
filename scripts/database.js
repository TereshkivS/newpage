'use strict';

;let Citation = (function(){
	function shuffle(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}
	return new class{
		constructor(){
			/* list of all lecturer information */
			this.lecturers = [
{id: 0, name: {first: 'Володимир', second: 'Ільків', third: 'Степанович'}, name_full: 'Ільків Володимир Степанович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%86%D0%BB%D1%8C%D0%BA%D1%96%D0%B2_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/thumb/e/e6/Ilkiv1.jpg/200px-Ilkiv1.jpg'},
{id: 1, name: {first: 'Ярослав', second: 'Баранецький', third: 'Омелянович'}, name_full: 'Баранецький Ярослав Омелянович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%91%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2_%D0%9E%D0%BC%D0%B5%D0%BB%D1%8F%D0%BD%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/thumb/1/16/Baranetsky2.jpg/200px-Baranetsky2.jpg'},
{id: 2, name: {first: 'Зореслава', second: 'Шпак', third: 'Ярославівна'}, name_full: 'Шпак Зореслава Ярославівна', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A8%D0%BF%D0%B0%D0%BA_%D0%97%D0%BE%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%B0_%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%96%D0%B2%D0%BD%D0%B0', photo: 'http://wiki.lp.edu.ua/wiki/images/6/68/Shpak.jpg'},
{id: 3, name: {first: 'Анатолій', second: 'Обшта', third: 'Феліксович'}, name_full: 'Обшта Анатолій Феліксович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%9E%D0%B1%D1%88%D1%82%D0%B0_%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%96%D0%B9_%D0%A4%D0%B5%D0%BB%D1%96%D0%BA%D1%81%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/9/93/Obshta.jpg'},
{id: 4, name: {first: 'Юрій', second: 'Цимбал', third: 'Вікторович'}, name_full: 'Цимбал Юрій Вікторович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A6%D0%B8%D0%BC%D0%B1%D0%B0%D0%BB_%D0%AE%D1%80%D1%96%D0%B9_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/f/f5/Tsymbal_01.jpg'},
{id: 5, name: {first: 'Радислав', second: 'Бегота', third: 'Васильович'}, name_full: 'Бегота Радислав Васильович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%91%D0%B5%D0%B3%D0%BE%D1%82%D0%B0_%D0%A0%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/d/d0/4.jpg'},
{id: 6, name: {first: 'Ігор', second: 'Карівець', third: 'Володимирович'}, name_full: 'Карівець Ігор Володимирович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%9A%D0%B0%D1%80%D1%96%D0%B2%D0%B5%D1%86%D1%8C_%D0%86%D0%B3%D0%BE%D1%80_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/thumb/a/a7/DSC01693.JPG/200px-DSC01693.JPG'},
{id: 7, name: {first: 'Михайло', second: 'Скульський', third: 'Юліанович'}, name_full: 'Скульський Михайло Юліанович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A1%D0%BA%D1%83%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%AE%D0%BB%D1%96%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/2/29/RTEmagicC_skulskyy_01.jpg.jpg'},
{id: 8, name: {first: 'Олег', second: 'Різник', third: 'Яремович'}, name_full: 'Різник Олег Яремович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A0%D1%96%D0%B7%D0%BD%D0%B8%D0%BA_%D0%9E%D0%BB%D0%B5%D0%B3_%D0%AF%D1%80%D0%B5%D0%BC%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/6/62/11.jpg'},
{id: 9, name: {first: 'Дмитро', second: 'Зербіно', third: 'Дмитрович'}, name_full: 'Зербіно Дмитро Дмитрович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%97%D0%B5%D1%80%D0%B1%D1%96%D0%BD%D0%BE_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/3/3f/Zerbino_01.jpg'},
{id:10, name: {first: 'Богдан', second: 'Демида', third: 'Адамович'}, name_full: 'Демида Богдан Адамович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%94%D0%B5%D0%BC%D0%B8%D0%B4%D0%B0_%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD_%D0%90%D0%B4%D0%B0%D0%BC%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/e/eb/Demyda_1.jpg'},
{id:11, name: {first: 'Людвіг', second: 'Фабрі', third: 'Павлович'}, name_full: 'Фабрі Людвіг Павлович', wiki: '', photo: 'http://studvoice.com/uploads/posts/2017-11/thumbs/1510920401_fabry.png'},
{id:12, name: {first: 'Анатолій', second: 'Батюк', third: 'Євгенович'}, name_full: 'Батюк Анатолій Євгенович', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%91%D0%B0%D1%82%D1%8E%D0%BA_%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%96%D0%B9_%D0%84%D0%B2%D0%B3%D0%B5%D0%BD%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://studvoice.com/uploads/posts/2017-11/thumbs/1510919794_batyuk.png'},
{id:13, name: {first: 'Квітослава', second: 'Обельовська', third: 'Михайлівна'}, name_full: 'Обельовська Квітослава Михайлівна', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%9E%D0%B1%D0%B5%D0%BB%D1%8C%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D0%9A%D0%B2%D1%96%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D1%96%D0%B2%D0%BD%D0%B0', photo: 'http://studvoice.com/uploads/posts/2017-11/thumbs/1510920025_obelovska.png'},
{id:14, name: {first: 'Іванна', second: 'Дронюк', third: 'Мирославівна'}, name_full: 'Дронюк Іванна Мирославівна', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%94%D1%80%D0%BE%D0%BD%D1%8E%D0%BA_%D0%86%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0_%D0%9C%D0%B8%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%96%D0%B2%D0%BD%D0%B0', photo: 'http://wiki.lp.edu.ua/wiki/images/0/0a/Dronjuk_01.jpg'},
			];
			/* list of all lecturer citations */
			this.citations = [
{lecturer_id: 0, text: 'Мертві тримають живих завтра комісія.', explanation: ''},
{lecturer_id: 0, text: 'Хто мене не чує відкрийте трошки штори.', explanation: ''},
{lecturer_id: 0, text: 'Заточка в смислі точки.', explanation: ''},
{lecturer_id: 0, text: 'Я бачу, що тут хто хоче згадати свою молодість.', explanation: ''},
{lecturer_id: 0, text: 'Ви можете мене навчити, але скоріше рознервувати.', explanation: ''},
{lecturer_id: 0, text: 'Бачу ви лягли в певне позу і зібрались спати, бо язик у вас сверлом.', explanation: ''},
{lecturer_id: 0, text: 'Закрийте свої панелі.', explanation: ''},
{lecturer_id: 0, text: 'Закрийте свій бампер.', explanation: ''},
{lecturer_id: 0, text: 'Голубим видно?', explanation: ''},
{lecturer_id: 0, text: 'Я хочу чути як муха ходить', explanation: ''},
{lecturer_id: 0, text: 'Ще півразу і відносини будете вирішувати у коридорі. Там є великі горизонтальні площадки.', explanation: ''},
{lecturer_id: 0, text: 'Для професіоналів це все одно.', explanation: 'Дослiдити квадратичну форму на знаковизначенiсть: L(x1, x2, x3) = 4x 2 1 + 2x1x2 + 6x1x3 + 2x 2 2 + 3x 2 3 .'},
{lecturer_id: 0, text: 'Крутяк, що ви там відокремлюєте?', explanation: ''},
{lecturer_id: 0, text: 'І хтось там ще з червоним пакетом.', explanation: ''},
{lecturer_id: 0, text: 'Ви повинні це знати бо ... це ваш насушний.', explanation: ''},
{lecturer_id: 0, text: 'Пригальмуйте там свої процесори уже.', explanation: ''},
{lecturer_id: 0, text: '- Сьогодні холодно чи не дуже?\n- Васюка нагрійте.', explanation: ''},
{lecturer_id: 0, text: 'І вас тоже слово за слово. Щось видно з’їли такого.', explanation: ''},
{lecturer_id: 0, text: 'Для чого ви його там упаковуєте?', explanation: ''},
{lecturer_id: 0, text: 'Крутяк, то Мартиничом не обійдеться.', explanation: ''},
{lecturer_id: 0, text: 'Деркачук, я тут.', explanation: ''},
{lecturer_id: 0, text: 'Кілька людей займаються телефонами. Руки сверблять не тільки у старости.', explanation: ''},
{lecturer_id: 0, text: 'Сядьте на першу парту зі своїми плоскими...', explanation: ''},
{lecturer_id: 0, text: 'Деякі вдарилися в телефони.', explanation: ''},
{lecturer_id: 0, text: '- Можна зробити оголошення?\n- Ні!', explanation: ''},
{lecturer_id: 0, text: 'Приходьте на інженерний ярмарок кар’єри.', explanation: ''},
{lecturer_id: 0, text: 'Не говоріть ... бо тоді ... будуть говорити гармати.', explanation: ''},
{lecturer_id: 0, text: 'Так далеко посідали як би не було дальтоніків.', explanation: ''},
{lecturer_id: 0, text: 'Огорілко, біля вас сидить шпигун з чужої групи. Він там дані збирає?', explanation: ''},
{lecturer_id: 0, text: 'Якщо хтось перебирає ногами, можете вийти.', explanation: ''},
{lecturer_id: 0, text: 'Так, вже там хтось паску забув доїсти чи то шнурок від ковбаси?', explanation: ''},
{lecturer_id: 0, text: 'Чого то ви тут його грієте?', explanation: 'Це про студента не з нашого потоку.'},
{lecturer_id: 0, text: '- Можна сказати?\n- Нє!', explanation: ''},
{lecturer_id: 0, text: 'А що він сам з собою говорив.', explanation: 'Це про студента, якого вигнали з пари за розмови під час лекції'},
{lecturer_id: 0, text: 'Він може бути дурний або дурнуватий.', explanation: ''},
{lecturer_id: 1, text: 'Доба має 24 години. Перед сесією тоже.', explanation: ''},
{lecturer_id: 1, text: 'Що вим там, мої комісари?', explanation: ''},
{lecturer_id: 1, text: 'Чим ближче до весни, тим цікавіше вам спілкуватися один з одним.', explanation: ''},
{lecturer_id: 8, text: 'Господар слова і раб слова.', explanation: ''},
{lecturer_id: 1, text: 'Поки цей самокат гріється...', explanation: 'Про комп’ютер, який включається.'},
{lecturer_id: 1, text: 'В околі Знак важке дихання сусідки.', explanation: ''},
{lecturer_id: 1, text: 'Загорода і Мохній, ви дуже близькі до дверей.', explanation: 'Нечемно поводилися на парі'},
{lecturer_id: 1, text: 'Ви розв’язуйте, а я подивлюся чи часом тролейбуси не їздять.', explanation: ''},
{lecturer_id: 1, text: 'Аліса в країні чудес живе у такому світі.', explanation: 'Про неправильно нарисовану циліндричну систему координат.'},
{lecturer_id: 1, text: 'Не шкодуйте тієї одинички, вона за рахунок фірми.', explanation: ''},
{lecturer_id: 1, text: 'Овчаренко сидить дуже небезпечно сумний.', explanation: ''},
{lecturer_id: 1, text: 'Вони там блінчиками накладаються.', explanation: 'Це про поверхні.'},
{lecturer_id: 1, text: 'Якщо ви ще не всю паску з’їли, то поїдьте і зробіть.', explanation: ''},
{lecturer_id: 1, text: 'Закритими очима і через перехід.', explanation: ''},
{lecturer_id: 2, text: 'Щоб не зрубати гілляку на якій сидиш.', explanation: 'Посилання на наступний елемент в списку'},
{lecturer_id: 2, text: 'Чим довші дні, тим менше часу.', explanation: ''},
{lecturer_id: 2, text: 'Завжди легше, коли ти не останній.', explanation: 'Кінцевий елемент списку.'},
{lecturer_id: 2, text: 'Скоро сніг.', explanation: 'Сесія.'},
{lecturer_id: 0, text: 'Подивіться навколо чи нема чужих.', explanation: 'Про студентів не з потоку'},
{lecturer_id: 0, text: 'Ультра - означає супер.', explanation: ''},
{lecturer_id: 0, text: 'Якщо є свідомі комуністи, що святкуватимуть по декілька днів, то не приходьте на пару.', explanation: ''},
{lecturer_id: 0, text: '- Кому ми будемо розрахункові здавати, якщо у нас веде Сохан?\n- Я можу сказати де він живе.', explanation: ''},
{lecturer_id: 0, text: '- Деркачук, що ви там обговорюєте?\n- Диф.рівняння.\n- Я думав, прямокутний екран.', explanation: ''},
{lecturer_id: 0, text: 'Романюк, ви не отримаєте напруження?', explanation: ''},
{lecturer_id: 0, text: 'На слідующу пару приходять групи з найнижчим IQ.', explanation: ''},
{lecturer_id: 0, text: 'Ваш язик настільки довгий, що достає до мене. Зараз ногою стану.', explanation: ''},
{lecturer_id: 0, text: 'Довганич і Михайлов, ви в одній групі? Групі ризику.', explanation: ''},
{lecturer_id: 0, text: 'Довганич сидить на самому кінці.', explanation: ''},
{lecturer_id: 3, text: 'Хто має бути повішаний - не втопиться!', explanation: ''},
{lecturer_id: 4, text: 'Якщо ми не можемо щось змінити, то краще залишити все як є.', explanation: ''},
{lecturer_id: 4, text: 'Ми всі - вершини суперграфа.', explanation: ''},
{lecturer_id: 4, text: 'Щоб зобразити чорну шашку, я замалюю її білою.', explanation: ''},
{lecturer_id: 4, text: 'Після гри пішак і король опиняються в одній коробці.', explanation: ''},
{lecturer_id: 7, text: 'Треба вчитися. Бо максимум ким ти станеш - це лаборантом.', explanation: ''},
{lecturer_id: 6, text: 'Ви худоба, а я - hunter.', explanation: ''},
{lecturer_id: 6, text: 'Щоб не спіймала рутина, в житті має бути місце для дива.', explanation: ''},
{lecturer_id:10, text: 'Перебудуй свої мозги і досягнеш своєї мети.', explanation: ''},
{lecturer_id:10, text: 'Від JS до Java один крок.', explanation: ''},
{lecturer_id:11, text: 'Щасливий період ощасливлення.', explanation: ''},
{lecturer_id: 5, text: 'Життя швидко плине, а ще гірше, що найкращі моменти пролітають мимо.', explanation: ''},
{lecturer_id: 5, text: 'Святі ходять проти годинникової стрілки.', explanation: ''},
{lecturer_id: 5, text: '- Анна-Марія, ви знаєте з якою швидкістю стріляє пістолет?\n- Ні, не знаю.\n- 900 пострілів за хвилину. Але навіть це не зрівняється з тим як швидко ви говорите.', explanation: ''},
{lecturer_id: 1, text: 'Сьогодні не понеділок, але я когось вижену наче важкий день.', explanation: ''},
{lecturer_id: 9, text: 'Бути успішним без успішності.', explanation: ''},
{lecturer_id: 9, text: 'Давайте, я покажу вам як включати комп’ютер.', explanation: ''},
{lecturer_id: 9, text: 'Нууу з професором Терешківом тягатися марно. Така жизнь.', explanation: ''},
{lecturer_id: 9, text: 'Знаєте є така маленька планета... Місяць.', explanation: ''},
{lecturer_id: 9, text: 'Мережа Петрі, чашки Петрика.', explanation: ''},
{lecturer_id: 9, text: 'Тут є флешка. Але її вкрали.', explanation: ''},
{lecturer_id: 9, text: '- Якою мовою ми б спілкувалися?\n- Айфоном?', explanation: ''},
{lecturer_id: 9, text: '- Чи можна зробити людину вічною?\n- Можна, якщо побудувати їй пам’ятник.', explanation: ''},
{lecturer_id: 9, text: 'Жінка - краще ніж рослина.', explanation: ''},
{lecturer_id: 9, text: '- Дмитро Дмитрович, я хочу в Америку.\n- Ми в Америці, дивіться - вон там Мангеттен.', explanation: 'Вказує пальцем на Костел Ольги та Єлизавети.'},
{lecturer_id: 9, text: 'То багато витрат. Та ви можете просто милом митися.', explanation: 'Про салон краси.'},
{lecturer_id: 9, text: 'Це Ярослав Ковівчак - найкращий системний аналітик.', explanation: ''},
{lecturer_id: 9, text: 'Сердечко. Ще яка буває форма дирки?', explanation: ''},
{lecturer_id: 9, text: 'Ну яка кальянна без стриптизу?..', explanation: ''},
{lecturer_id: 9, text: 'В трамваї деколи такий запах, що хочеться взяти і когось подмити.', explanation: ''},
{lecturer_id: 9, text: '- Христос воскрес.\n- Дякую. Вам тоже.', explanation: ''},
{lecturer_id: 9, text: '- А що ви з Даніелем по-російськи розмовляєте?\n- Це ми для СБУ.', explanation: ''},
{lecturer_id: 9, text: 'Та шо там готуватися, це ж тести для дибілів.', explanation: ''},
{lecturer_id: 9, text: 'Якщо ви не отримали "+" на цій парі, то ви овощ.', explanation: ''},
{lecturer_id: 9, text: 'А де ви бачили кальян зі стриптизом? - Чорновола 45', explanation: ''},
{lecturer_id: 9, text: 'А де ви бачили кальян зі стриптизом? - Чорновола 45', explanation: ''},
{lecturer_id: 9, text: 'Уявіть що ви в маршрутці їдете. - Вже 5 хв уявляю. - Супер, яку вулицю проїхали? - Церкву Ольги та Єлизавети. - Супер, помоліться тоді.', explanation: ''},
{lecturer_id:10, text: 'Вас зіпсув WEB 2.0', explanation: ''},
{lecturer_id:12, text: 'Вертаємся в сім\'ю.', explanation: ''},
{lecturer_id:12, text: '- Чого не встаєш? \n- ...\n - Що? Не встає?', explanation: ''},
{lecturer_id:13, text: 'Краще щоб я когось не запам\'ятала, ніж запам\'ятала', explanation: ''},
{lecturer_id:14, text: 'Якби ми були в США, то мене б вже посадили за сексизм.', explanation: ''},

			];

			/* template to be insertet into the page */
			this.template = 
`
<abbr title="{explanation}">
	<table class="citation">
		<tr>
			<td class="citation_txt">
				{citation}
			</td>
			<td class="citation_img" rowspan="2">
				<img src="{photo}">
			</td>
		</tr>
		<tr>
			<td class="citation_rights">&copy; {name}</td>
		</tr>
	</table>
</abbr>
`
		}

		/* returns a random citation */
		random(){
			let index = Math.random() * this.citations.length ^ 0;
			let citation = this.citations[index];
			citation.text = citation.text.replaceAll('\n', '<br>');
			return citation;
		}

		/* returns a citation by its id */
		get_citation(id){
			if (id >= this.citations.length){
				id = this.citations.length - 1;
			} 
			else if (id < 0){
				id = 0;
			}
			let citation = this.citations[id];
			citation.text = citation.text.replaceAll('\n', '<br>');
			return citation;
		}

		/* shuffles all of the citations and returns the new array */
		get_all_citations(){
			let citations = this.citations.slice();
			shuffle(citations);

			return citations;
		}

		/* returns a lecturer by his id */
		get_lecturer(id){
			for (let i = 0; i < this.lecturers.length; i++){
				if (this.lecturers[i].id == id){
					return this.lecturers[i];
				}
			}
		}

		/* receives a citation, parses it and returns */
		/* it as a string that can be inserted in html */
		to_string(citation){

			let lecturer = this.get_lecturer(citation.lecturer_id);
			/* fill the template */
			let block = this.template.format({
				name: lecturer.name.second, 
				citation: citation.text.replaceAll('\n', '<br>'), 
				photo: lecturer.photo,
				explanation: citation.explanation || '*без коментарів*'
			});
			return block;
		}
	};
})();

/* 
	changes the string:

	input:
	  "Hello {name}!".format({name: "John"})

	output:
	  "Hello John!"
 */
String.prototype.format = function(args) {
  let a = this;
  for (let k in args) {
    a = a.replace("{" + k + "}", args[k])
  }
  return a
};

/*
	finds all instances in string and replaces them

	input:
	  "My name is John".replaceAll('n', 'p')

	output:
	  "My pame is Johp"
*/
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};