var http = require('http');
var async = require('async');
var MongoClient = require('mongodb').MongoClient;

// var taskone = function (callback) {
//     callback(null,"taskone");
// }
//
// var tasktwo = function (callback) {
//     callback(null,"tasktwo");
// }
// var taskthree = function (callback) {
//     callback(null,"taskthree");
// }
//
// stack.push(taskone);
// stack.push(tasktwo);
// stack.push(taskthree);
//
// async.parallel(stack, function(err,results){
//     console.log(results);
//
// } );

//var db;
// console.log("here");
var uri = "mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri,function(err, db)
    {
        console.log("in function");
        if (err) throw err;


        function findRecord(variable,response) {

            var temp = db.collection("users").find({"username":variable[0]}).toArray(function(err,doc){
                // if(err) throw err;
                //console.log(doc[0].username);

                if (doc && doc[0] && doc[0].username != ' ' && doc[0].username===variable[0] && doc[0].password===variable[1]){

                    console.log("returning true");
                    response(true);
                }else{
                    console.log("returning false");
                    return response(false);
                }


            });


        }
// console.log("program started");
        http.createServer(function (req,res) {
            if (req.method === 'POST') {
                var body = '';
                req.on('data', function (chunk) { // this should execute first
                    body += chunk;
                    var data = JSON.parse(body);
                    var authDetails =[]
                      authDetails[0] = data.username;
                    authDetails [1] = data.password;
                    findRecord(authDetails, doSendResponse);

                })
                var doSendResponse = function (response) { //
                    console.log(response);
                    res.end(response.toString());
                }

            }else{
                res.writeHead(200,{"Content-type":"text/plain"});
                res.end("Server received request");
            }

        }).listen(process.env.PORT || 3000);


    }
);






// var app = function(err, db)
//     {
//     console.log("in function");
//     if (err) throw err;
//
//
//     function findRecord(variable,response) {
//         var temp = db.collection("users").find({"username":"pratik@includetech.co"}).toArray(function(err,doc){
//             // if(err) throw err;
//             //console.log(doc[0].username);
//
//             if (doc && doc[0] && doc[0].username != ' '){
//                 console.log("returning true");
//                 response(true);
//             }else{
//                 console.log("returning false");
//                 return response(false);
//             }
//
//
//         });
//
//
//     }
// // console.log("program started");
//     http.createServer(function (req,res) {
//         if (req.method === 'POST') {
//             var body = '';
//                 req.on('data', function (chunk) { // this should execute first
//                     body += chunk;
//                     var data = JSON.parse(body);
//                     var username = data.username;
//                     findRecord(username, doSendResponse);
//
//                 })
//             var doSendResponse = function (response) { //
//                 console.log(response);
//                 res.end(response.toString());
//             }
//
//         }else{
//             res.writeHead(200,{"Content-type":"text/plain"});
//             res.end("Server received request");
//         }
//
//     }).listen(process.env.PORT || 3000);
//
//
// }

