var express = require("express")
var express = require("express")
var app = express()
var http = require("http").Server(app)

app.use(express.json())
app.use (express.urlencoded({extended:true}))
