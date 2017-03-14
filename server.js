var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var todoList = [
  {name : "rdv chez le médecin", date : "7/03/2017", hour : "8h30", address: "5 rue Sébastopol"}, 
  {name : "cour de tennis", date : "8/03/2017", hour : "14h30", address: "3 rue Parmentier"}, 
  {name : "chercher colis au point relais ", date : "10/03/2017", hour : "19h", address: "20 place de la République"},
  {name : "dej pro avec John", date : "10/03/2017", hour : " 12h20", address: "3 avenue Gutenberg"}
];
      
app.get('/', function (req, res) {
  res.render('home', {
    list: todoList,
    dataform : {}
  });
});

app.get('/delete', function (req, res) {
  console.log(req.query.indice);
  todoList.splice(req.query.indice, 1);
  
  res.render('home', {
    list: todoList,
    dataform : {}
  });
});

app.get('/add', function (req, res) {
  console.log(req.query);
  todoList.push(req.query);
  
  res.render('home', {
    list: todoList,
    dataform : {}
  });
});

app.get('/update', function (req, res) {
  console.log(req.query);
  todoList[req.query.indice].name = req.query.name;
  todoList[req.query.indice].date = req.query.date;
  todoList[req.query.indice].hour = req.query.hour;
  todoList[req.query.indice].address = req.query.address;
  
  res.render('home', {
    list: todoList,
    dataform : {}
  });
});

app.get('/loadform', function (req, res) {
  
  var listSelected = {
    name : todoList[req.query.indice].name, 
    date : todoList[req.query.indice].date, 
    hour : todoList[req.query.indice].hour, 
    address:  todoList[req.query.indice].address,
    indice: req.query.indice
  }
  
  res.render('home', {
    list: todoList,
    dataform : listSelected
  });
});


app.listen(80, function () {
  console.log('Example app listening on port 80!');
});