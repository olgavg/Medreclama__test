# ReadMe

Для работы сборки вам понадобится скачать и установить node.js.

Также установите систему контроля версии Git. Для работы сборки Git не обязателен, но для удобства установки и дальнейшей разработки лучше все же установить.

Для установки (клонирования репозитория) в текущую папку из консоли введите команду: git clone https://github.com/olgavg/Medreclama__test.git .

Все команды пишутся от корня проекта!

После того как все исходники будут скачаны из удаленного репозитория, введите в консоли команду npm install для установки проекта. Все зависимости установятся автоматически.

Для сборки проекта наберите в консоли команду npm run dev.  
Если нет ошибок, то для запуска проекта нужно набрать в консоли npm run start, в браузере по умолчанию откроется домен http://localhost:3030 с тестовым заданием.


# Мои комментарии по вестке шаблона:

Проанализировав сайт с существующими двумя стилями для косметологии и стоматологии завела все цвета в переменные, поэтому достаточно просто будет поменять цветовую схему сразу по всему сайту. Шрифты также подгружены двух видов, имеющихся на сайте.

Иконки по ссылке скачать бесплатно получилось только в png формате, а программы для конвертации лицензионной у меня нет, к сожалению, бесплатные сконвертировали криво, поэтому не сделала svg спрайт для них, но это было бы оптимальнее. 
Для иконок карусели спрайт сделала.
Для фотографий использовала тэг html5 'picture' с возможностью выбора браузеру формата png или wepb.

Имидж для акции по чистке зубов хотелось бы иметь еще одного размера(в другом формате, более вытянутом горизонтально) для мобильных версий сайта, из данного этого не получить, нужны еще варианты от дизайнера. Используемый имдиж подходит только для десктопа по тому расположению блоков, как мне видится при ресайзе, а для девайсов пришлось оставить одну голливудскую улыбку от фото ))).

В форме всплывающие плейсхолдеры сделаны только на css, а маска в поле телефона с помощью Js.

Блоки в нижнем контейнере на десктопе можно перетаскивать способом drag-and-drop, они меняются местами.

Карусель свайпится и также работает по клику на навигационные кнопки.  Кнопки я скрываю на мобильных девайсах по аналогии с тем, как это есть сейчас на сайте, соблюдая этот стиль. 

Сознаюсь, что есть баг в Js в результате конфликта скриптов для drag-and-drop и для swiper - после перетаскивания блоков в нижнем блоке, перестает работать свайп на карусели, проблема с событиями, видимо, пока не смогла решить, к сожалению ((.  На это нужно еще время.

Общее затраченное время на верстку, соблюдение стилей, анализ образа сайта, решения по JS и пр. заняли у меня 14ч.  Наверное, следует добавить установку и настройку сборки проекта через Webpack с нуля, это еще примерно 2 часа.

# Дополнительное задание из файла

Его я тоже сделала, можно увидеть разметку и стили внутри файла extra.html (уже не стала выносить, тут, как я поняла, важен внешний вид разделения по тексту в html больше), его можно запустить в браузере дважды кликнув на него, лежит он в каталоге /Medreclama/dist/assets/
