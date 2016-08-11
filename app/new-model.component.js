System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NewModelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewModelComponent = (function () {
                function NewModelComponent() {
                    this.onSubmitNewModel = new core_1.EventEmitter();
                }
                NewModelComponent.prototype.addModel = function (userDescription) {
                    this.onSubmitNewModel.emit(userDescription.value);
                    userDescription.value = "";
                };
                NewModelComponent = __decorate([
                    core_1.Component({
                        selector: 'new-model',
                        outputs: ['onSubmitNewModel'],
                        template: "\n  <div class=\"model-form\">\n    <h3>Create Model:</h3>\n    <input placeholder=\"Description\" class=\"col-sm-8 input-lg\" #newDescription><br>\n    <button (click)=\"addModel(newDescription)\" class=\"btn-primary btn-lg add-button\">Add</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewModelComponent);
                return NewModelComponent;
            }());
            exports_1("NewModelComponent", NewModelComponent);
        }
    }
});
//# sourceMappingURL=new-model.component.js.map