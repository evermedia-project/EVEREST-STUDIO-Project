function initialize()
{
	langId = localStorage.getItem('langId');

	if (langId === null) langId = 0;
	else langId = parseInt(langId);

	changeTranslation(langId);
	headerTitleChange();
}

const translationsEN = [
	"Home",
	"Projects",
	"Design",
	"by immorrtalz",
	"When ",
	"design",
	"application",
	"is not just ",
	"pictures",
	"code",
	"Feel this world with us!",
	"Dive in",
	"PROJECTS",
	"Apps and games for PC and mobile",
	"Simple audio player with modern design",
	"Mobile runner in a space setting",
	"Horror-survival in a laboratory",
	"Online hide and seek",
	"DESIGN",
	"Aesthetic and affordable PREMIUM design*",
	"Banner",
	"For forum/advertising etc.",
	"Avatar",
	"For any profile",
	"Landing",
	"Small website layout",
	"Application interface layout",
	"LANGUAGE",
	"LINKS",
	"* Order a design",
	"SOCIALS",
	"NOT FOUND",
	"The content you're looking for was not found...",
	"Go back",
	"all rights reserved",
	"Privacy Policy",
	"Terms & Conditions",
	"Support",
	"senpai",
	"the\u00A0project",
	"with\u00A0money",
	"Do a good deed – help us with a coin 🙏",
	"Donate",
	"DONATE",
	"Choose a convenient payment method",
	"By a card",
	"Any bank cards",
	"Other",
	"Contact us on Telegram",
	"Click to copy address",
	"❤️Support⚡",
	"About the game",
	"by EVERMEDIA PROJECT",
	"Conquer space in a mobile runner for Android!",
	"Download",
	"LICENSES AND AGREEMENTS",
	"Copyrights and other aspects",
	"ABOUT THE GAME",
	"Creation history, gameplay, etc.",
	"Development of the game began on January 23, 2022, on a quiet winter evening. By the summer of that year, several alpha builds had been released, and the first testers appeared.\n\nBy the end of the year, the game went into beta, and the speed of development increased greatly, more and more attention was paid to the comfort of the game process.\n\nThe last beta version was released in May 2023, and on June 24 of the same year The game was released on four platforms.",
	"Dodge enemies, score points and collect coins at an increasing speed to improve bonuses and buy new ships!\n\nBe the first to conquer the depths of space!\n\nTake your place in the TOP 10 records around the world!",
	"In space you will encounter 5 types of enemies: Mine, Mine-Demolition, Electro Anomaly, Gravitator and Asteroid.\n\nEach of them has its own characteristics, be careful!\n\n5 different bonuses will help you resist them: Shield, x2 Coins, Chrono-Warp, Magnet, Disruptor and x2 Score - each with its own unique mechanics!",
	"The game has leaderboard systems, cases, daily rewards and skins, and if you get tired of the Classic game mode, there are a few more to freshen up!\n\nNo need to be constantly connected to the Internet: all saves are duplicated in encrypted offline files. All data from them is uploaded to the cloud when you enter the game online.",
	"Profiles",
	"PROFILES",
	"Hi, I am ",
	"Programmer, designer and content creator",
	"Profiles in social networks, games and other services",
	"Socials",
	"Ruslan Farkhutdinov",
	"Development and design",
	"Design portfolio",
	"Donations page",
	"For any questions (e-mail)",
	"Own projects and projects with my participation",
	"Owner",
	"Games",
	"Other",
	"Developer"
	//currently 79
];

const translationsRU = [
	"Главная",
	"Проекты",
	"Дизайн",
	"immorrtalz",
	"Когда ",
	"дизайн\u00A0–",
	"приложение\u00A0–",
	"не просто ",
	"картинки",
	"код",
	"Прочувствуй этот мир с нами!",
	"Подробнее",
	"ПРОЕКТЫ",
	"Приложения и игры для ПК и смартфонов",
	"Простой аудиоплеер с современным дизайном",
	"Мобильный раннер в космическом сеттинге",
	"Хоррор-выживание в лаборатории",
	"Онлайн прятки",
	"ДИЗАЙН",
	"Эстетичный и доступный ПРЕМИУМ дизайн*",
	"Баннер",
	"Форумный/рекламный и др.",
	"Аватарка",
	"Для любого профиля",
	"Лендинг",
	"Макет небольшого сайта",
	"Макет интерфейса приложения",
	"ЯЗЫК",
	"ССЫЛКИ",
	"* Заказать дизайн",
	"СОЦСЕТИ",
	"НЕ НАЙДЕНО",
	"Контент, который вы искали, не найден...",
	"На главную",
	"все права защищены",
	"Политика конфид-ти",
	"Условия испол-я",
	"Поддержи",
	"семпая",
	"проект",
	"денюжкой",
	"Сделай доброе дело – помоги нам копеечкой 🙏",
	"Пожертвовать",
	"ПОЖЕРТВОВАТЬ",
	"Выбери удобный метод оплаты",
	"Картой",
	"Любые банковские карты",
	"Другое",
	"Напиши в Telegram",
	"Нажми, чтобы скопировать адрес",
	"❤️Поддержать⚡",
	"Об игре",
	"EVERMEDIA PROJECT",
	"Покори космос в мобильном раннере для Android!",
	"Скачать",
	"ЛИЦЕНЗИИ И СОГЛАШЕНИЯ",
	"Авторские права и иные аспекты",
	"ОБ ИГРЕ",
	"История создания, геймплей и прочее",
	"Разработка игры началась 23 января 2022 года, в тихий зимний вечер. К лету того же года было выпущено несколько альфа-сборок, появились первые тестеры.\n\nК концу года игра вышла в бету, и скорость разработки сильно увеличилась, всё больше внимания уделялось на комфортность процесса игры.\n\nВ мае 2023 вышла последняя бета-версия, а 24 июня того же года состоялся релиз игры на четырёх площадках.",
	"Уклоняйся от врагов, набирай очки и собирай монеты на нарастающей скорости, чтобы улучшать бонусы и покупать новые корабли!\n\nСтань первым, кто покорит глубины космоса!\n\nЗайми своё место в ТОП-10 рекордов по всему миру!",
	"В космосе тебе встретятся 5 типов врагов: Мина, Мина-Подрывник, Электро Аномалия, Гравитатор и Астероид.\n\nУ каждого из них есть свои особенности, будь осторожен(-на)!\n\nПротивостоять им помогут 5 разных бонусов: Щит, x2 Монеты, Хроно-варп, Магнит, Дизраптор и x2 Счёт - каждый со своей уникальной механикой!",
	"В игре есть системы лидерборда, кейсов, ежедневных наград и скинов, а если надоест Классический режим игры, есть ещё несколько, чтобы освежиться!\n\nНе нужно постоянно быть подключенным к Интернету: все сохранения дублируются в шифрованных оффлайн-файлах. Все данные из них выгружаются в облако при входе в игру онлайн.",
	"Профили",
	"ПРОФИЛИ",
	"Привет, я ",
	"Программист, дизайнер и создатель контента",
	"Профили в соцсетях, играх и других сервисах",
	"Соцсети",
	"Руслан Фархутдинов",
	"Разработка и дизайн",
	"Портфолио дизайна",
	"Страница пожертвований",
	"По любым вопросам (e-mail)",
	"Собственные проекты и проекты с моим участием",
	"Основатель",
	"Игры",
	"Другое",
	"Разработчик"
];

const translatableElms = document.querySelectorAll('[data-translationid]');

function changeTranslation(langId)
{
	localStorage.setItem('langId', langId.toString());

	for (var i = 0; i < translatableElms.length; i++)
	{
		if (langId == 0) translatableElms[i].textContent = translationsEN[translatableElms[i].dataset.translationid];
		else translatableElms[i].textContent = translationsRU[translatableElms[i].dataset.translationid];
	}
}
