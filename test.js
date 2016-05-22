var CodeMap = require('./CodeMap.js');
var assert = require('chai').assert;

var table = [ 'open a', 'open b', 'open c', 'open d', 'open e', 'open f', 'open g', 'open h', 'open i', 'open j', ]

describe('Chart',function() {

    var codeMap = new CodeMap(table);

    describe('getStatus', function() {
        it('should be pass', function() {
            assert.deepEqual(codeMap.getStatus(7), ["open a", "open b", "open c"]);
            assert.deepEqual(codeMap.getStatus(21), ["open a", "open c", "open e"]);
            assert.deepEqual(codeMap.getStatus(292), ["open c", "open f", "open i"]);
        })
        it('should be throw "code is not exist"', function() {
            assert.throws(function() {
                codeMap.getStatus(1024);
            }, Error, 'code is not exist');
        })
    })

    describe('getCode', function() {
        it('should be pass', function() {
            assert.equal(codeMap.getCode(["open a", "open b", "open c"]), 7);
            assert.equal(codeMap.getCode(["open a", "open c", "open e"]), 21);
            assert.equal(codeMap.getCode(["open c", "open f", "open i"]), 292);
        })
        it('should be throw "status is not exist"', function() {
            assert.throws(function() {
                codeMap.getCode(['open z'])
            }, Error, 'status is not exist');
        })
    })
    
    describe('have', function() {
        it('should be true', function() {
            assert.isTrue(codeMap.have(15, ["open a", "open b", "open c"]));
            assert.isTrue(codeMap.have(23, ["open a", "open c", "open e"]));
        })
        it('should be false', function() {
            assert.isFalse(codeMap.have(7, ["open a", "open b", "open x"]));
            assert.isFalse(codeMap.have(21, ["open a", "open e", "open y"]));
        })
    })
    
    describe('equal', function() {
        it('should be true', function() {
            assert.isTrue(codeMap.equal(7, ["open a", "open b", "open c"]));
        })
        it('should be false', function() {
            assert.isFalse(codeMap.have(7, ["open a", "open b", "open z"]));
        })
    })
})

