var async = require('async')
var test = require('tape')

var setup = require('./setup.js')
var mongoDbQueue = require('../')

setup(function (db) {

    test('clientCollection can be specified', function(t) {
        var queue = mongoDbQueue(db, 'default', {
            clientsCollection: 'default-clients'
        });

        t.ok(queue.clientCol, 'default-clients');
        t.end();
    });

    test('client can be registered', function (t) {
        var queue = mongoDbQueue(db, 'default')

        queue.subscribeClient('someAwesomeKey', 'someAwesomeEndpoint').then(function (result) {
            t.ok(result, 'Received an client')
        });

        t.end();
    });

})
