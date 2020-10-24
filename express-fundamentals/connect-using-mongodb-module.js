
var express = require('express');
var app = express();
var mongoClient = require('mongodb').MongoClient;

/*
mongoClient.connect("mongodb://localhost:27017/demodb", function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log('You are connected to the server successfully.');
        db.collection('users', function (err, collection) {
            collection.find().toArray(function (err, items) {
                if (err) { throw err; }
                console.log(items);
            })
        })
    }
})
*/

/*
mongoClient.connect("mongodb://localhost:27017/demodb", function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log('You are connected to the server successfully.');
        db.collection('users', function (err, collection) {
            collection.insert({ "name": "Hitesh", "city": "Delhi" });
            collection.insert({ "name": "Nishant", "city": "Delhi" });
            collection.insert({ "name": "Kavya", "city": "Delhi" });
        })
    }
})
*/

/*
mongoClient.connect("mongodb://localhost:27017/demodb", function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log('You are connected to the server successfully.');
        db.collection('users', function (err, collection) {
            collection.update({ "_id": 1 }, { $set: { "name": "Sanjay", "city": "New York" } })
        })
    }
})
*/

mongoClient.connect("mongodb://localhost:27017/demodb", function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log('You are connected to the server successfully.');
        db.collection('users', function (err, collection) {
            collection.remove({ _id: 2 }, function (err) {
                if (err) { throw err; }
                else {
                    console.log('Document deleted successfully.')
                }
            })
        })
    }
})



app.use(express.static(__dirname + 'public'));

app.get('/', function (req, res) {
    res.send('Hello World....!!');
})

app.get('/user', function (req, res) {
    res.send('Getting All Users..');
})

app.post('/user', function (req, res) {
    res.send('Adding New User..!!');
})

app.put('/user', function (req, res) {
    res.send('Updating user...')
})
app.delete('/user', function (req, res) {
    res.send('Deleting user...')
})

app.listen(3001, function () {
    console.log('Server is running at port 3001..!!');
})
