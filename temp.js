var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var async = require('async');
// var asyncpara = require('async-parallel');
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
function findRecord(variable,response) {
    MongoClient.connect("mongodb://admin:admin@cluster0-shard-00-00-tulwu.mongodb.net:27017,cluster0-shard-00-01-tulwu.mongodb.net:27017,cluster0-shard-00-02-tulwu.mongodb.net:27017/ChatUserAccount?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", function (err, db) {
        if (err) throw err;

            var temp = db.collection("users").find({"username":"pratik@includetech.co"}).toArray(function(err,doc){
               // if(err) throw err;
                //console.log(doc[0].username);

                    if (doc && doc[0] && doc[0].username != ' '){
                        console.log("returning true");
                        return response(true);
                    }else{
                        console.log("returning false");
                        return response(false);
                    }


            });



        db.close();
    });
}

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


var stack = [];
http.createServer(function (req,res) {


if (req.method === "POST"){
var body = "";
var status ="";
var username ="";

   req.on("data",function (chunk) {
        body +=chunk;
        // console.log(JSON.parse(body));
        // var dic = JSON.parse(body);
        console.log(body.data);
        // console.log(dic.password);
        // console.log(dic.username);   
        findRecord("pratik@includetech.co", function(res){
            console.log(res);
            status = res;
            console.log("Status is"+ status);
        });
    });
    req.on("body" , function (chunk) {
    console.log(chunk);
    });


    // console.log(req.body.password);
    // console.log(body +"body")

   //console.log(req);

    req.on("end",function () {


        res.setHeader('Content-Type', 'application/json');
       if(status){
        res.end(JSON.stringify({ "state": "true" }));
           console.log("returning True to client");
       }else{
            console.log("returning False to client");

           res.end(JSON.stringify({ "state": "false" }));
       }

    });


}else{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("server got request")
}

}).listen(process.env.PORT ||3001);

