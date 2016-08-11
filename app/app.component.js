System.register(['angular2/core', './keg-list.component', './keg.keg'], function(exports_1, context_1) {
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
    var core_1, keg_list_component_1, keg_keg_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_list_component_1_1) {
                keg_list_component_1 = keg_list_component_1_1;
            },
            function (keg_keg_1_1) {
                keg_keg_1 = keg_keg_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.kegs = [
                        new keg_keg_1.Keg('Victoria Bitter', 'Victoria Bitter', 5, 4.9),
                        new keg_keg_1.Keg('', '', , ),
                        new keg_keg_1.Keg('', '', , ),
                        new keg_keg_1.Keg('', '', , )
                    ];
                }
                AppComponent.prototype.kegWasSelected = function (clickedKeg) {
                    console.log("this works", clickedKeg);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [keg_list_component_1.KegListComponent],
                        template: "\n  <div class=\"container\">\n    <h1>Skeleton Angular2 App!</h1>\n    <keg-list [kegList]=\"kegs\" (onKegSelect)=\"kegWasSelected($event)\"></keg-list>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map