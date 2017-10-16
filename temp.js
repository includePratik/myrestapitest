var MongoClient = require('mongodb').MongoClient;
var http = require('http')
// var objectid = require('mongodb').objectId
var str = "";
//
//

//
//
// var user=[];
// function display() {
//     MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function (err, db) {
//         if (err) throw err;
//         db.collection("users").find().toArray(function (err, doc) {
//             if (err) throw err;
//            console.log(doc)
//             if (doc.length > 0) {
//                 for (var i = 0; i < doc.length;) {
//                     str = doc[i].username;
//                      user.push(doc[i].username);
//                     //console.log(str);
//                     i += 1;
//                 }
//             }
//         });
//        return user;
//         db.close();
//     });
// }
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
// function findRecord(variable , callback) {
//     MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function (err, db) {
//         if (err) throw err;
// console.log("in function")
//             var temp = db.collection("users").find({"username":variable}).toArray(function(err,doc){
//                if(err) throw err;
//                 console.log(doc[0].username);
//                 callback(true);
//             });
//
//         db.close();
//     });
// }

// function deleteEntry(){
//     MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function (err, db) {
//         if (err) throw err;
//         console.log("in deleteEntry function")
//         var temp = db.collection("users").remove({"username":"pratik"},function (err , result) {
//            if (err) throw err;
//            process.stdout.write("user was deleted");
//
//         });
//
//
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

// deleteEntry();
// var http = require('http')
// http.createServer(function (req,res) {
//    res.writeHead(200,{'Content-type':'text/json'})
//    //res.write("Echo server ");
//     if(req.url == '/users=pratik') {
//       // display();
//       //   for (var i = 0; i < user.length;) {
//
//             //res.write(users[i]);
//
//             if (findRecord('pratik')){
//                 res.write("record was found");
//             }else{
//                 res.write('record not found');
//             }
//         //
//         //     i += 1;
//         // }
//     }else {
//         res.write(req.url);
//     }
//    res.end()
// }).listen(process.env.PORT || 3000);



http.createServer(function (req,res) {

if (req.method === "POST"){
var body = "";
    req.on('data',function (chunk) {
        body +=chunk;
        
    });
    req.on('end',function () {
        console.log(body);
        req.writeHead(200,{"Content-Type":"text/json"});

        res.write("server says  hello");
        res.end();
    });
}else{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("server got request")
}

}).listen(process.env.PORT ||3000);