(() => {
'use strict';
const categoryNames={all:'Обо всём',path:'Путь',changes:'Перемены',love:'Любовь',money:'Деньги',self:'Про себя',bonds:'Люди',rest:'Ресурс',courage:'Смелость'};
const categoryOrder=['all','path','changes','love','money','self','bonds','rest','courage'];
// Каждая запись: [тема, название, послание, улыбка, вопрос]
const data=[
['path','Зелёный коридор','Одна из дорог наконец-то становится простой. Заметь, где жизнь перестала требовать борьбы.','Не ищи очередь там, где уже открыли проход.','Что сейчас складывается без лишних усилий?'],
['path','Точка отправления','Не обязательно видеть финал, чтобы купить билет в новую главу. Начало тоже достоинство.','Навигатор обновит маршрут. Тревога — не навигатор.','С чего я могу начать без идеального плана?'],
['path','Красивая пересадка','Промежуточный этап не делает твою цель менее настоящей. Иногда именно в паузе находится лучший поворот.','Да, это стыковка. Нет, это не крах цивилизации.','Чему меня учит промежуточный этап?'],
['path','Билет в неизвестное','Не всё хорошее можно заранее просчитать. Иногда настоящее приключение начинается там, где заканчивается контроль.','Планирование — прекрасно. Но вселенная не обязана присылать ваучер.','Какую неопределённость я могу выдержать?'],
['path','Другая широта','Окружение влияет на то, кем тебе легко быть. Может, дело не в тебе, а в давно тесных координатах.','Не всякому цветку подходит офисный кондиционер.','В какой среде я раскрываюсь?'],
['path','Свой терминал','Сравнение чужих вылетов ничего не говорит о твоём расписании. Твой путь имеет собственный ритм.','Чужой бизнес-класс не отменяет твоего посадочного.','Что я перестану сравнивать сегодня?'],
['path','Горизонт открыт','Не ограничивай мечту тем, что уже умеешь объяснить. Есть пространства, до которых ты ещё не доросла — и это чудесно.','Иногда стоит поднять глаза от табло.','Что кажется невозможным только по привычке?'],
['changes','Незапланированный разворот','Отмена прежнего сценария может стать освобождением. Не цепляйся за то, что перестало быть твоим.','У судьбы случился ребрендинг. Без согласования.','Какой поворот я могу принять?'],
['changes','Новый часовой пояс','Ты меняешься, и прежний ритм больше не обязан подходить. Разреши себе настроить время по себе.','Кто сказал, что вставать в шесть — обязательная магия успеха?','Какой ритм действительно мой?'],
['changes','Вылет без репетиции','Ты уже накопила достаточно опыта для первого шага. Дальше уверенность придёт в движении.','Генеральная репетиция отменена. Зато будет премьера.','Где я жду разрешения действовать?'],
['changes','Задержка не отказ','Пауза не равна поражению. Бывает, важное приходит чуть позже и в более подходящей форме.','Посадку перенесли, тебя — нет.','Где я принимаю ожидание за отказ?'],
['changes','Новые правила полёта','То, что работало раньше, не обязано работать вечно. Пересмотри правила, которые ты придумала для себя.','Может, этот внутренний регламент давно пора переписать?','Какое правило больше мне не служит?'],
['changes','Сброс высоты','Иногда нужно опуститься на землю, чтобы понять, куда лететь дальше. Временная тишина — часть роста.','Приземлиться — не значит сдаться.','Что поможет мне восстановить опору?'],
['changes','Воздушный мост','Между прежней жизнью и новой уже появляется связь. Ты не обязана делать прыжок через пропасть.','Всё, мост построен. Драматичный разбег можно отменить.','Какой переход я могу сделать мягче?'],
['money','Свой тариф','Твоя ценность не определяется тем, насколько ты удобна другим. Назови цену своей работе без извинений.','Бесплатный багаж щедрости закончился.','За что я давно недооцениваю себя?'],
['money','Бизнес-класс для идей','Большие идеи требуют места и внимания. Перестань складывать их в карман «когда-нибудь».','Мечту размером XXL в ручную кладь не запихнуть.','Какой идее пора выделить ресурсы?'],
['money','Оплачено собой','Важные решения стоят сил, времени и энергии. Это тоже валюта — обращайся с ней бережно.','Не всё дорогое оплачивается картой.','Куда уходит мой главный ресурс?'],
['money','Без скидки на себя','Не нужно уменьшаться, чтобы тебя выбрали. Твоя цена и твои границы могут существовать одновременно.','Акция «забери меня за полцены» завершена.','Где я отдаю больше, чем хочу?'],
['money','Финансовый компас','Стабильность строится не только из больших сумм, но и из честных решений. Выбери направление, а не гонку.','Сначала координаты, потом шампанское в бизнес-зале.','Какое денежное решение даст мне спокойствие?'],
['money','Доход без героизма','Зарабатывать можно не только через переработку. Умный маршрут иногда короче героического.','Орден «жила на кофе» в бухгалтерии не принимают.','Что я могу упростить в работе?'],
['money','Премиальный доступ','Разреши себе качество — не ради статуса, а ради ощущения, что тебе хорошо. Большое можно выбирать спокойно.','VIP — это иногда просто выспаться и не оправдываться.','Какое качество жизни я хочу повысить?'],
['love','Сердце без визы','Настоящая близость не требует доказывать право на вход. Там, где тебя любят, можно быть собой.','Собеседование на должность любимой отменяется.','Где мне легко быть настоящей?'],
['love','Мягкая посадка','Любовь бывает безопасной и спокойной. Яркость не обязана сопровождаться эмоциональными качелями.','Бабочки в животе хороши, когда без аварийной посадки.','Что для меня означает спокойная близость?'],
['love','Два билета','Близость строится двумя людьми, а не усилиями одного диспетчера. Встречное движение обязательно.','Тянуть отношения на буксире — не романтика.','Есть ли в моих отношениях взаимность?'],
['love','Без лишних проверок','Не превращай любовь в бесконечный контроль. Доверие растёт там, где есть честность и свобода.','Паспортный контроль каждые полчаса не помогает чувствам.','Что я хочу отпустить в отношениях?'],
['love','Открытое сердце','Можно быть осторожной и всё равно оставаться открытой. Уязвимость — не слабость.','Бронежилет к вечернему платью подходит не всегда.','Где я готова позволить себе нежность?'],
['love','Свидание с собой','Твоё собственное внимание тоже важно. Не откладывай заботу о себе до появления идеального попутчика.','Столик на одного — это тоже бронь для VIP.','Как я могу порадовать себя уже сейчас?'],
['love','Без обратного билета','Некоторые чувства становятся глубже, когда перестаёшь ждать подвоха. Но право вернуться к себе всегда остаётся.','Лететь сердцем можно. Выбрасывать здравый смысл — не обязательно.','Чего я боюсь в настоящей близости?'],
['self','Свой пейзаж','Тебе не нужно всё время смотреть на чужие экраны. Возвращай внимание к собственному пейзажу.','Чужие сторис — не карта твоей жизни.','На что я хочу направить свой взгляд?'],
['self','Снять маску','Быть собой иногда страшнее, чем быть удобной. Но только настоящее может быть по-настоящему любимым.','Имидж-служба сегодня не работает.','Где я играю роль вместо себя?'],
['self','Переоценка маршрута','Не все цели остаются твоими навсегда. Сменить направление — не предать прежнюю себя.','Старый навигатор не обидится.','Какую цель я переросла?'],
['self','Тихая уверенность','Сила не всегда говорит громко. Иногда она просто знает и не спорит.','Не каждому решению нужен пресс-релиз.','Где я уже знаю ответ?'],
['self','Без чужого фильтра','Твоё счастье не должно выглядеть убедительно для наблюдателей. Оно должно ощущаться твоим.','Алгоритмы лайков не отвечают за твою жизнь.','Чего я хочу без чужой оценки?'],
['self','Компас внутри','Среди советов и тревог есть твой собственный голос. Сделай ему чуть тише вокруг.','Диспетчеров много, капитан один.','Что говорит мне моя интуиция?'],
['self','Пункт назначения — я','Вернуться к себе — иногда самое важное путешествие. Не нужно заслуживать собственную заботу.','Этот рейс без транзита через чужое мнение.','Как я могу быть на своей стороне?'],
['bonds','Свои люди','Есть встречи, после которых дышится свободнее. Береги тех, рядом с кем не нужно держать оборону.','У хорошей компании нет нормы провоза искренности.','Кто даёт мне чувство дома?'],
['bonds','Письмо без адреса','Не всё важное сказано вовремя. Иногда одно простое «спасибо» меняет больше, чем длинная речь.','Да, можно написать первой. Нет, медаль не отберут.','Кому я хочу сказать важные слова?'],
['bonds','Команда на борту','Не обязательно справляться в одиночку. Просить помощи — способ доверять, а не проигрывать.','Пилоты тоже летают с экипажем.','У кого я могу попросить поддержки?'],
['bonds','Соседнее кресло','В каждом новом круге людей есть место для дружбы, разговора или неожиданного союзника. Не прячь свою настоящую историю.','Нетворкинг не всегда начинается с визитки.','Какому новому знакомству я открыта?'],
['bonds','Тёплый терминал','Отношения держатся на маленьких повторяющихся жестах. Не обесценивай заботу без фейерверков.','Иногда главная роскошь — «ты поела?».','Как я могу проявить внимание сегодня?'],
['bonds','Дистанция в норме','Не всякую связь нужно поддерживать из чувства долга. Расстояние может быть добрым выбором.','Связь потеряна. И знаешь, не беда.','С кем мне нужен более честный баланс?'],
['bonds','Общий рейс','Пусть у вас разные цели, вместе можно сделать дорогу теплее. Ценность команды — не в одинаковых маршрутах, а в поддержке друг друга.','Место рядом не бронируется навсегда — зато забота остаётся.','Кого мне хочется поблагодарить за совместный путь?'],
['rest','Режим полёта','Не все сообщения требуют ответа. Покой появляется, когда ты перестаёшь быть доступной всем сразу.','Авиарежим — иногда форма любви к себе.','От чего мне нужен отдых сегодня?'],
['rest','Сон без тревог','Восстановление — не награда после всех дел. Оно и есть часть твоего маршрута.','Мир не рухнет, если ты ляжешь спать раньше дедлайна.','Как я могу беречь свой сон?'],
['rest','Разгрузи голову','Тебе не нужно держать в голове всё. Запиши, делегируй и отпусти хотя бы одну задачу.','Мозг не должен быть чемоданом на 32 кг.','Что я могу перестать контролировать?'],
['rest','Тихий лаунж','Пауза не означает, что ты отстала. Она даёт возможность услышать себя.','Пять минут тишины — уже почти all inclusive.','Где я могу сделать паузу?'],
['rest','Завтрак с видом','Радость часто начинается не с большого события, а с простого момента присутствия.','Красивый завтрак без отчёта — тоже достижение.','Какую маленькую радость я замечу?'],
['rest','Ничего срочного','Чувство спешки бывает привычкой, а не реальностью. У тебя есть право выбрать темп.','Не каждое уведомление — последний вызов на посадку.','Что можно сделать без гонки?'],
['rest','Берегись выгорания','Усталость — сигнал, а не характеристика твоего характера. Услышь его до того, как выключится свет.','Сесть на зарядку нужно не только телефону.','Что истощает меня сильнее всего?'],
['courage','Первый класс смелости','Страх не исчезает перед важным шагом. Иногда смелость — это действие с дрожащими коленями.','Главное — сесть в самолёт, а не выглядеть уверенно у трапа.','На какой шаг мне хватит смелости?'],
['courage','Никаких запасных жизней','Откладывать мечту можно бесконечно. Сегодня уже подходит для маленькой попытки.','В отделе выдачи второй жизни пока перерыв.','Что я перестану откладывать?'],
['courage','Громче, чем сомнения','Твоё желание заслуживает быть услышанным. Не уменьшай голос заранее.','Внутренний критик опять взял микрофон без очереди.','Как я могу заявить о себе?'],
['courage','Разрешение на счастье','Не нужно дожидаться идеальных обстоятельств. Радоваться можно даже посреди незаконченных дел.','Штамп «достаточно молодец» уже стоит.','Что я разрешу себе прямо сейчас?'],
['courage','Сойти с автопилота','Привычный путь безопасен, но не всегда твой. Посмотри, какие решения давно принимаются за тебя.','Автопилот хорош в воздухе, не во всей жизни.','Где я хочу снова взять штурвал?'],
['courage','Прямой рейс к мечте','Честный разговор с собой сокращает путь. Назови настоящее желание и найди первый шаг.','Перестань делать три пересадки через «как-нибудь потом».','Что я могу сделать напрямую?'],
['courage','Смелость быть видимой','Твои идеи не обязаны нравиться всем. Но они заслуживают выйти из черновиков.','Некоторые звёзды не вмещаются в режим инкогнито.','Где я готова показать себя?']
];

const cards=data.map((d,i)=>({id:i+17,cat:d[0],title:d[1],message:d[2],wink:d[3],question:d[4]}));
const labels={one:['Знак для тебя'],day:['Энергия дня'],three:['Что отпустить','Что принять','Куда двигаться'],five:['Что оставить в прошлом','Что взять с собой','На что опереться','Что тебя удивит','Куда ведёт маршрут']};
const modeNames={one:'Одно послание',day:'Карта дня',three:'Три остановки',five:'Рейс в 2027'};
const counts={one:1,day:1,three:3,five:5};
const views=['home','mode','topic','ready','result'];
const el=id=>document.getElementById(id);
const state={stage:'home',mode:'one',cat:'all',reading:[],previous:[],index:0};
const storageKey='marshrut-postroen-saved-v3';
let saved=new Set();
try{const s=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(s))saved=new Set(s.filter(id=>cards.some(c=>c.id===id)));}catch(e){}
const escapeText=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let timer=0;
function notify(msg){const t=el('toast');t.textContent=msg;t.classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>t.classList.remove('visible'),3200);}
function scrollTopNow(){window.scrollTo({top:0,left:0,behavior:'instant'});}
function show(stage){
  if(!views.includes(stage))return;
  state.stage=stage;
  for(const name of views){
    const section=el('view-'+name);
    section.hidden=name!==stage;
    section.classList.toggle('is-active',name===stage);
  }
  scrollTopNow();
  const main=el('app'); main.dataset.stage=stage;
  if(stage!=='result'){const h=el('view-'+stage).querySelector('h1');if(h)h.setAttribute('tabindex','-1');}
}
function renderTopics(){
  const container=el('topics');
  const symbols={all:'✦',path:'✈',changes:'✧',love:'♡',money:'◈',self:'✺',bonds:'✦',rest:'☾',courage:'✳'};
  container.innerHTML=categoryOrder.map(cat=>'<button type="button" class="topic-option" data-cat="'+cat+'"><span aria-hidden="true">'+symbols[cat]+'</span><strong>'+escapeText(categoryNames[cat])+'</strong><span class="choice-arrow">↗</span></button>').join('');
}
function selectMode(mode){if(!(mode in counts))return;state.mode=mode;show('topic');}
function selectTopic(cat){
  if(!categoryOrder.includes(cat))return;
  state.cat=cat;
  el('chosenSummary').textContent=modeNames[state.mode]+' · '+categoryNames[cat];
  el('drawButton').innerHTML=(state.mode==='five'?'Открыть большой расклад':state.mode==='three'?'Открыть три карты':state.mode==='day'?'Открыть карту дня':'Открыть послание')+' <span>↗</span>';
  show('ready');
}
function randomIndex(length){if(length<=1)return 0;try{const n=new Uint32Array(1);crypto.getRandomValues(n);return n[0]%length;}catch(e){return Math.floor(Math.random()*length);}}
function dayIndex(length){
  const d=new Date(),str=[d.getFullYear(),d.getMonth()+1,d.getDate(),state.cat].join('|');
  let hash=2166136261;for(let i=0;i<str.length;i++){hash^=str.charCodeAt(i);hash=Math.imul(hash,16777619);}
  return (hash>>>0)%length;
}
function sample(){
  let deck=cards.filter(c=>state.cat==='all'||c.cat===state.cat);
  if(!deck.length)deck=cards.slice();
  if(state.mode==='day')return [deck[dayIndex(deck.length)]];
  let pool=deck.filter(c=>!state.previous.includes(c.id));
  if(pool.length<counts[state.mode])pool=deck.slice();
  const result=[];
  while(result.length<counts[state.mode] && pool.length)result.push(pool.splice(randomIndex(pool.length),1)[0]);
  state.previous=result.map(c=>c.id);
  return result;
}
function draw(){state.reading=sample();state.index=0;renderResult();show('result');}
/* Каждая карта имеет собственный визуальный маршрут: фотография, кадрирование, золотой мотив.
   Сюжеты прикреплены к id, а не к теме; новые карты не пересекаются с печатной колодой. */
const pictures=[
'photo-1436491865332-7a61a109cc05','photo-1488646953014-85cb44e25828','photo-1500530855697-b586d89ba3ee','photo-1469854523086-cc02fe5d8800','photo-1501785888041-af3ef285b470','photo-1530789253388-582c481c54b0','photo-1476514525535-07fb3b4ae5f1',
'photo-1519681393784-d120267933ba','photo-1500534314209-a25ddb2bd429','photo-1470770841072-f978cf4d019e','photo-1439066615861-d1af74d74000','photo-1469854523086-cc02fe5d8800','photo-1488085061387-422e29b40080','photo-1469474968028-56623f02e42e',
'photo-1499856871958-5b9627545d1a','photo-1441986300917-64674bd600d8','photo-1500534623283-312aade485b7','photo-1523906834658-6e24ef2386f9','photo-1490750967868-88aa4486c946','photo-1502920917128-1aa500764cbd','photo-1566073771259-6a8506099945',
'photo-1527631746610-bca00a040d60','photo-1507525428034-b723cf961d3e','photo-1490730141103-6cac27aaab94','photo-1518837695005-2083093ee35b','photo-1496181133206-80ce9b88a853','photo-1529156069898-49953e39b3ac','photo-1519681393784-d120267933ba',
'photo-1436491865332-7a61a109cc05','photo-1534447677768-be436bb09401','photo-1501785888041-af3ef285b470','photo-1477959858617-67f85cf4f1df','photo-1516483638261-f4dbaf036963','photo-1500530855697-b586d89ba3ee','photo-1464822759023-fed622ff2c3b',
'photo-1521737711867-e3b97375f902','photo-1501785888041-af3ef285b470','photo-1533104816931-20fa691ff6ca','photo-1480796927426-f609979314bd','photo-1518837695005-2083093ee35b','photo-1529156069898-49953e39b3ac','photo-1488646953014-85cb44e25828',
'photo-1519681393784-d120267933ba','photo-1470770841072-f978cf4d019e','photo-1490730141103-6cac27aaab94','photo-1566073771259-6a8506099945','photo-1469474968028-56623f02e42e','photo-1507525428034-b723cf961d3e','photo-1500534314209-a25ddb2bd429',
'photo-1436491865332-7a61a109cc05','photo-1500534623283-312aade485b7','photo-1451187580459-43490279c0fa','photo-1490750967868-88aa4486c946','photo-1531366936337-7c912a4589a7','photo-1488085061387-422e29b40080','photo-1476514525535-07fb3b4ae5f1'];
const exclusiveScenes = Object.freeze({
  'Тёплый терминал':0,
  'Финансовый компас':1,
  'Свой пейзаж':2,
  'Незапланированный разворот':3,
  'Тихий лаунж':4,
  'Сон без тревог':5,
  'Пункт назначения — я':6,
  'Зелёный коридор':7,
  'Режим полёта':8,
  'Первый класс смелости':9
});
function motif(cat){return {path:'✈',changes:'✧',love:'♡',money:'✦',self:'✺',bonds:'✧',rest:'☾',courage:'✈'}[cat]||'✧';}
function wordLines(title){
  // Переносим только по словам. Никаких «ФИНАНСО- / ВЫЙ».
  const words=title.split(/\s+/), lines=[];
  if(words.length<2)return [title];
  if(words.length===2)return words;
  const mid=Math.ceil(words.length/2);
  return [words.slice(0,mid).join(' '),words.slice(mid).join(' ')];
}
function cardHTML(c){
 const index=c.id-17;
 const picture=pictures[index]||pictures[0];
 const photo='https://images.unsplash.com/'+picture+'?auto=format&fit=crop&w=1000&q=82';
 const positions=['center','center 38%','center 60%','48% center','60% center','center 44%'];
 const shift=positions[index%positions.length];
 const title=wordLines(c.title).map(line=>'<span class="card-title-line'+(line.length>20?' long-word':line.length>15?' medium-word':'')+'">'+escapeText(line)+'</span>').join('');
 const artIndex=exclusiveScenes[c.title];
 const isExclusive=Number.isInteger(artIndex);
 const x=(artIndex%5)*25;
 const y=artIndex>=5?100:0;
 const artStyle=isExclusive?'--art-x:'+x+'%;--art-y:'+y+'%;':'--photo-position:'+shift;
 const className='card-scene cinematic category-'+escapeText(c.cat)+(isExclusive?' exclusive-art':'');
 const image=isExclusive?'':'<img src="'+photo+'" loading="lazy" decoding="async" alt="" referrerpolicy="no-referrer" onerror="this.style.display=\'none\'">';
 return '<article class="oracle-card" aria-label="'+escapeText(c.title)+'">'+
 '<div class="card-inner"><div class="card-stars">✦ <span>✧</span> ✦</div>'+
 '<h2 class="card-title">'+title+'</h2>'+
 '<div class="'+className+'" aria-hidden="true" style="'+artStyle+'">'+
 image+'<div class="scene-vignette"></div><span class="scene-glint">✦</span><span class="scene-compass">'+motif(c.cat)+'</span><div class="scene-orbit"></div>'+
 '</div>'+
 '<div class="card-text"><p class="card-message">'+escapeText(c.message)+'</p><div class="text-divider">✦</div>'+
 '<p class="card-wink">'+escapeText(c.wink)+'</p><p class="card-question">'+escapeText(c.question)+'</p></div></div></article>';
}
function renderResult(){
 const card=state.reading[state.index];if(!card)return;
 const len=state.reading.length;
 el('positionLabel').textContent=(labels[state.mode]||[])[state.index]||'Твой знак';
 el('resultContent').innerHTML=cardHTML(card);
 el('resultPager').hidden=len<=1;
 el('pagerDots').textContent=(state.index+1)+' / '+len;
 el('prevCard').disabled=state.index===0;
 el('nextCard').disabled=state.index===len-1;
 el('saveCard').textContent=(saved.has(card.id)?'♥ Сохранено':'♡ Сохранить');
 el('saveCard').classList.toggle('saved',saved.has(card.id));
 // Keep the result screen in place while changing cards. No full-page scrolling.
}
function turnCard(delta){
 const index=state.index+delta;
 if(index<0||index>=state.reading.length)return;
 state.index=index;renderResult();
 // When cards have varying heights, keep the title and card in view.
 window.scrollTo({top:0,left:0,behavior:'instant'});
}
function saveCurrent(){
 const c=state.reading[state.index];if(!c)return;
 if(saved.has(c.id)){saved.delete(c.id);notify('Убрала карту из сохранённых');}
 else{saved.add(c.id);notify('Карта сохранена ♡');}
 try{localStorage.setItem(storageKey,JSON.stringify([...saved]));}catch(e){}
 updateSavedCount();renderResult();
}
function updateSavedCount(){el('savedCount').textContent=saved.size;}
function shareText(list){
 return '✦ МАРШРУТ ПОСТРОЕН ✦\n\n'+list.map(c=>c.title+'\n'+c.message+'\n'+c.wink+'\nВопрос: '+c.question).join('\n\n✦\n\n')+'\n\n'+location.href.split('#')[0];
}
async function share(list){
 const t=shareText(list);try{
  if(navigator.share){await navigator.share({title:'Маршрут построен',text:t});return;}
  if(navigator.clipboard){await navigator.clipboard.writeText(t);notify('Послание скопировано');return;}
  throw Error('Clipboard unavailable');
 }catch(e){if(e?.name==='AbortError')return;try{const n=document.createElement('textarea');n.value=t;document.body.appendChild(n);n.select();document.execCommand('copy');n.remove();notify('Послание скопировано');}catch(x){notify('Не удалось поделиться — попробуй ещё раз');}}
}
function openSaved(){
 const arr=[...saved].reverse();
 el('savedList').innerHTML=arr.length?arr.map(id=>{
 const c=cards.find(c=>c.id===id);
 return c?'<div class="saved-item"><div><strong>'+escapeText(c.title)+'</strong><small>'+escapeText(c.question)+'</small></div><button type="button" data-open="'+c.id+'">Открыть ↗</button></div>':'';
 }).join(''):'<p class="modal-intro">Здесь пока пусто. Красивые послания уже готовятся к посадке.</p>';
 el('savedModal').hidden=false;document.body.classList.add('modal-open');
 el('closeSaved').focus();
}
function closeSaved(){el('savedModal').hidden=true;document.body.classList.remove('modal-open');el('showSaved').focus();}
function openSavedCard(id){
 const c=cards.find(c=>c.id===id);if(!c)return;
 closeSaved();state.reading=[c];state.index=0;state.mode='one';state.cat='all';renderResult();show('result');
}
el('startJourney').addEventListener('click',()=>show('mode'));
el('homeLink').addEventListener('click',()=>show('home'));
el('modeGrid').addEventListener('click',e=>{const item=e.target.closest('[data-mode]');if(item)selectMode(item.dataset.mode);});
el('topics').addEventListener('click',e=>{const item=e.target.closest('[data-cat]');if(item)selectTopic(item.dataset.cat);});
document.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.back)));
el('drawButton').addEventListener('click',draw);
el('prevCard').addEventListener('click',()=>turnCard(-1));
el('nextCard').addEventListener('click',()=>turnCard(1));
el('saveCard').addEventListener('click',saveCurrent);
el('shareCard').addEventListener('click',()=>{const c=state.reading[state.index];if(c)share([c]);});
el('againButton').addEventListener('click',()=>show('mode'));
el('showSaved').addEventListener('click',openSaved);
el('closeSaved').addEventListener('click',closeSaved);
el('savedModal').addEventListener('click',e=>{
 if(e.target===el('savedModal'))closeSaved();
 const b=e.target.closest('[data-open]');if(b)openSavedCard(Number(b.dataset.open));
});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&!el('savedModal').hidden)closeSaved();
 if(state.stage==='result'&&el('savedModal').hidden){
  if(e.key==='ArrowRight')turnCard(1);if(e.key==='ArrowLeft')turnCard(-1);
 }
});
renderTopics();updateSavedCount();show('home');
console.info('Маршрут построен: '+cards.length+' уникальных онлайн-посланий; пошаговый выбор.');
})();