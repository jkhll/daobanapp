const express = require('express')
const config = require('config-lite')(__dirname)
const session = require('express-session')
const StoreMongo = require('connect-mongo')(session)
const User = require('./mong').user
var bodyParser = require('body-parser')
// var cookieParser = require('cookie-parser')
// const router = express.Router()
const app = express()
// app.use(cookieParser())
console.log(config.port)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
  secret: config.session.secret,
  key: config.session.key,
  cookie: {
    maxAge: config.session.maxAge
  },
  store: new StoreMongo({
    url: config.mongodb
  })
}))
// app.all('*', function (req, res, next) {
//   // 允许的来源
//   res.header('Access-Control-Allow-Origin', '*')

//   // res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
//   // 允许的头部信息，如果自定义请求头，需要添加以下信息，允许列表可以根据需求添加
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
//   // 允许的请求类型
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.header('X-Powered-By', ' 3.2.1')
//   next()
// })

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Credentials', 'true') // 允许服务器端发送Cookie数据
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})

app.get('/', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Credentials', 'true');  // 允许服务器端发送Cookie数据
  // console.log(2)
  // res.json(req.session)
})

app.post('/', (req, res) => {
  // console.log(req.body)
  // console.log(User.find({name: req.body.name}))

  var users = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  console.log(User.find({name: 'o'}, function (err, res) {
    if (err) {
      console.log('注册成功')
    } else {
      console.log('用户名已占用阿斯蒂芬')
    }
  }))

  users.save((err, sres) => {
    if (err && err.code === 11000) {
      console.log('用户名已占用')
      res.json({err: 0})
      res.end()
    } else {
      req.session.name = req.body.name
      req.session.password = req.body.password
      req.session.email = req.body.email
      // req.session.name = 'req.body.name'
      // req.session.password = 'req.body.password'
      // req.session.email = 'req.body.email'
      // console.log(1)
      // console.log(req.body.name)
      res.json({ok: 1})
    }
  })
})

app.listen(3000, function () {
  console.log('运行在3000')
})
