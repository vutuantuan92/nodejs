const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes/index.js');
app.use(express.static(path.join(__dirname, 'resources', 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //Middleware xử lý dữ liệu từ Form data -> server
app.use(express.json()); //Middleware xử lý dữ liệu từ JSON -> server
//XMLHttpRequest, fetch, axios
//HTTP logger
app.use(morgan('combined'));
//Template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Home, Search, Contact  => Các page ko có trang con

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
