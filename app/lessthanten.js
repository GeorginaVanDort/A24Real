System.register(['angular2/core', './keg.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, keg_model_1;
    var LessThanTenPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_model_1_1) {
                keg_model_1 = keg_model_1_1;
            }],
        execute: function() {
            LessThanTenPipe = (function () {
                function LessThanTenPipe() {
                }
                LessThanTenPipe.prototype.transform = function (input) {
                    var almostEmptyKeg = [];
                    var pintsLeft = keg_model_1.Keg[4];
                    for (var i = 0; i < input.length; i++) {
                        if (pintsLeft < 10) {
                            almostEmptyKeg.push(input[i]);
                        }
                    }
                    return almostEmptyKeg;
                };
                LessThanTenPipe = __decorate([
                    core_1.Pipe({
                        name: "lessThanTenPipe",
                        pure: true
                    }), 
                    __metadata('design:paramtypes', [])
                ], LessThanTenPipe);
                return LessThanTenPipe;
            }());
            exports_1("LessThanTenPipe", LessThanTenPipe);
        }
    }
});
//# sourceMappingURL=lessthanten.js.map