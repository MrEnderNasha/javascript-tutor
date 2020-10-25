// Данный файл будет запускаться на nodejs, поэтому здесь используется 
// module.exports для того, чтобы просто экспортировать javascript объект
// к-й посути является конфигурацией для нашего приложения
const path = require('path'); // Пользуемся стандартным модулем nodejs, к-й
															// называется path, и который умеет работать
															// с путями в вашей текущей ОС

const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
															// Очищать папку public от кешов

module.exports = {
	entry: './src/app.js', 	// entry - файл с к-го всё начинается
													// хорошей практикой считается держать все исходные
													// коды вашего приложения в папке src 
													// entry - является входным файлом для нашего
													// приложения
	
	output: {								// Здесь мы должны указать во что в итоге должен
													// webpack превратить то, что мы с вами напишем
		filename: 'bundle.[chunkhash].js',
													// Чтобы не кешировалось данное название 
													// ('bundle.js') в браузере или на хостинге, я хочу
													// добавить определённый хеш, к-й будет показывать
													// разность сборок
													// И для этого в webpack'е нам достаточно добавить
													// вот такую конструкцию [chunkhash] -->
													// --> filename: 'bundle.[chunkhash].js'

		path: path.resolve(__dirname, 'public')
													// path - куда нам нужно будет складывать в итоге
													// соединённые все javascript'ы, к-ые у нас будут
													// Вызываем метод resolve(), указываем, что мы
													// работаем в текущей директории resolve(__dirname)
													// - это системная переменная nodeJS и дальше уже
													// говорим какую папку нам нужно использовать
													// resolve(__dirname, 'public') -->
													// --> В конечном итоге эта конструкция вернёт нам
													// строчку, но уже более правильную для глобального
													// пути
													// ------
													// В принципе на этом этапе весь webpack у нас готов
													// То есть теперь мы можем спокойно использовать
													// ES6 импорты и наслаждаться этим
	},

	devServer: {						// Однако, я хочу ещё добавить настройку devServer
													// у к-го будет св-во:
		port: 3000,
													// то есть в режиме разработки мы будем использовать
													// devServer для того, чтобы он нам всё перезагружал
													// и т.д.
	},

	plugins: [							// Плагины в webpack подключаются просто; мы
													// мы определяем массив plugins и дальше создаём
													// инстансы тех плагинов, к-е мы подключили

		new HTMLPlugin({			// В конструктор можно передать поле template

			template: './src/index.html'
													// То есть на основе этого index.html мы будем
													// генерировать итоговый шаблон
		}),

		new CleanWebpackPlugin()
	],

	module: {
    rules: [							// Чтобы webpack мог работать с суффиксом .css
      
      {										// Как только webpack встречается с суффиком														// .css он должен прогнать тот файл через два loader
      										// а - это css-loader, потом через style-loader
      										// Нужно установить эти loader'ы
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}