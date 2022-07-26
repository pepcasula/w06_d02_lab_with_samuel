const assert = require("assert");
const Decorator = require("../decorator");
const Can = require("../can");
const Room = require("../room");

describe("Room", function(){
    let room1;
    beforeEach(function() {
        room1 = new Room('10');
    });

    it("should be not painted", function(){
        const actual = room1.painted;
        assert.strictEqual(actual, false);
    });

    it("should be painted", function(){
        room1.yesPainted();
        const actual = room1.painted;
        assert.strictEqual(actual, true);
    });
    
});

describe("Can", function() {
    let can;
    beforeEach(function() {
        can = new Can("red", 0);
    });

    it("is it empty", function () {
        const actual = can.content;
        assert.strictEqual(actual, 0);
    });

    describe("Can", function() {
        can = new Can("red", 2)
    });
        it("should empty itself", function () {
            can.removePaint();
            const actual = can.litres;
            assert.strictEqual(actual, 0)
    })
});

