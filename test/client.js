var async = require('async')
var test = require('tape')

var setup = require('./setup.js')
var mongoDbQueue = require('../')

setup(function (db) {

    test('client can be registered', function (t) {
        var queue = mongoDbQueue(db, 'default')

        queue.subscribeClient('someAwesomeKey', 'someAwesomeEndpoint').then(function (result) {
            t.ok(result, 'Received an client')
        });
    });

})
