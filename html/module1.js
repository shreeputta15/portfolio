var myRevealingModule1 = /** @class */ (function () {
    function myRevealingModule1(PrivateVar) {
        this.PrivateVar = PrivateVar;
    }
    Object.defineProperty(myRevealingModule1.prototype, "privateVar", {
        get: function () {
            console.log("Get private : ", this.privateVar);
            return this.privateVar;
        },
        set: function (value) {
            console.log("Set private : ", value);
            this.privateVar = value;
        },
        enumerable: true,
        configurable: true
    });
    return myRevealingModule1;
}());
