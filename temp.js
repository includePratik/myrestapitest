var MongoClient = require('mongodb').MongoClient;
var http = require('http')
// var objectid = require('mongodb').objectId
var str = ""
//
//
// setInterval( function displayRecord() {
//
//
//     MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function (err, db) {
//         if (err) throw err;
//         db.collection("users").find().toArray(function (err, doc) {
//             if (err) throw err;
//             console.log(doc)
//             if (doc.length > 0) {
//                 for (var i = 0; i < doc.length;) {
//                     str = doc[i].username;
//                     console.log(str);
//                     i += 1;
//                 }
//             }
//         });
//         db.close();
//     });
// },3000);

console.log('Program Started');


//
//
// function insertRecord() {
//     MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function (err, db) {
//         if (err) throw err;
//
//         var data = {username: "Mahesh", password: "a"}
//         db.collection("users").insertOne(data,function (err,res) {
//            if(err) console.log("data was not inserted ") ;
//            console.log("data was inserted")
//             db.close();
//         });
//     });
// }
// var findUserName = "pratik"
// function findRecord() {
//     MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function (err, db) {
//         if (err) throw err;
// console.log("in function")
//             var temp = db.collection("users").find({"username":"pratik"}).toArray(function(err,doc){
//                if(err) throw err;
//                   console.log(doc[0].username)
//                 console.log(doc[0].password)
//                 return (doc[0].username)
//             });
//         db.close();
//     });
// }
//
// findRecord();
//
//
//
//
//
// http.createServer(function (req, res) {
//     res.writeHead(200,{"Content-type":"text/plain"})
//     console.log("request was received");
//     res.send(new Buffer('Server Response'));
//     res.end();
//
// }).listen(8004);

//
// var net = require('net');
//
// var server = net.createServer(function(socket) {
//     socket.write('Echo server\r\n');
//    // socket.pipe(socket);
// });
//
// server.listen(process.env.PORT || 3000, function() {
//     console.log("listening on 3000");
// });


var http = require('http')
http.createServer(function (req,res) {
   res.writeHead(200,{'Content-type':'text/plain'})
   res.write("Echo server ")
   res.end()
}).listen(process.env.PORT || 3000);