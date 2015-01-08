var assert = require('assert'),
    fs = require('fs'),
    Parser = require('../lib/parser');

describe('Parser', function() {

    it('#parse() can parse simple API response', function (done) {
      fs.readFile(__dirname + '/fixtures/parser/simple.xml', function (err, xml) {
        fs.readFile(__dirname + '/fixtures/parser/simple.json', function (err, json) {
          Parser.parse(xml, function (err, result) {
            assert.ifError(err);
            assert.deepEqual(result, JSON.parse(json));
            done();
          });
        });
      });
    });

    it('#parse() can parse rowsets', function (done) {
      fs.readFile(__dirname + '/fixtures/parser/rowset.xml', function (err, xml) {
        fs.readFile(__dirname + '/fixtures/parser/rowset.json', function (err, json) {
          Parser.parse(xml, function (err, result) {
            assert.ifError(err);
            assert.deepEqual(result, JSON.parse(json));
            done();
          });
        });
      });
    });

    it('#parse() can parse nested rowsets', function (done) {
      fs.readFile(__dirname + '/fixtures/parser/alliance-list.xml', function (err, xml) {
        fs.readFile(__dirname + '/fixtures/parser/alliance-list.json', function (err, json) {
          Parser.parse(xml, function (err, result) {
            assert.ifError(err);
            assert.deepEqual(result, JSON.parse(json));
            done();
          });
        });
      });
    });

    it('#parse() can parse mutli-keyed rowsets', function (done) {
      fs.readFile(__dirname + '/fixtures/parser/multi-key.xml', function (err, xml) {
        fs.readFile(__dirname + '/fixtures/parser/multi-key.json', function (err, json) {
          Parser.parse(xml, function (err, result) {
            assert.ifError(err);
            assert.deepEqual(result, JSON.parse(json));
            done();
          });
        });
      });
    });

    it('#parse() can parse error response', function (done){
      fs.readFile(__dirname + '/fixtures/parser/error.xml', function (err, xml) {
        Parser.parse(xml, function (err) {
          assert.ok(err instanceof Error);
          assert.equal(err.message, 'Must provide userID or keyID parameter for authentication.');
          assert.equal(err.code, 106);
          done();
        });
      });
    });

});