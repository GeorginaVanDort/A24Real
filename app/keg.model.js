System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Keg;
    return {
        setters:[],
        execute: function() {
            Keg = (function () {
                function Keg(name, brand, price, ABV, pints) {
                    if (pints === void 0) { pints = 124; }
                    this.name = name;
                    this.brand = brand;
                    this.price = price;
                    this.ABV = ABV;
                    this.pints = pints;
                }
                return Keg;
            }());
            exports_1("Keg", Keg);
        }
    }
});
//# sourceMappingURL=keg.model.js.map