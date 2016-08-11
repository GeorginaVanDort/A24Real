System.register(['angular2/core', './keg.component', './edit-keg-details.component', './new-keg.component', './keg.keg', './less-than-ten.pipe'], function(exports_1, context_1) {
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
    var core_1, keg_component_1, edit_keg_details_component_1, new_keg_component_1, keg_keg_1, less_than_ten_pipe_1;
    var KegListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_component_1_1) {
                keg_component_1 = keg_component_1_1;
            },
            function (edit_keg_details_component_1_1) {
                edit_keg_details_component_1 = edit_keg_details_component_1_1;
            },
            function (new_keg_component_1_1) {
                new_keg_component_1 = new_keg_component_1_1;
            },
            function (keg_keg_1_1) {
                keg_keg_1 = keg_keg_1_1;
            },
            function (less_than_ten_pipe_1_1) {
                less_than_ten_pipe_1 = less_than_ten_pipe_1_1;
            }],
        execute: function() {
            // directives populate the template with their own selector/template
            KegListComponent = (function () {
                function KegListComponent() {
                    this.selectedPipe = "";
                    this.onKegSelect = new core_1.EventEmitter();
                }
                KegListComponent.prototype.kegClicked = function (clickedKeg) {
                    console.log('child', clickedKeg);
                    this.selectedKeg = clickedKeg;
                    this.onKegSelect.emit(clickedKeg);
                };
                KegListComponent.prototype.createKeg = function (description) {
                    this.kegList.push(new keg_keg_1.Keg(description, this.kegList.length));
                };
                KegListComponent.prototype.onChange = function (optionFromUnknown) {
                    this.selectedPipe = optionFromUnknown;
                    console.log(this.selectedPipe);
                };
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        outputs: ['onKegSelect'],
                        directives: [keg_component_1.KegComponent, edit_keg_details_component_1.EditKegDetailsComponent, new_keg_component_1.NewKegComponent],
                        pipes: [less_than_ten_pipe_1.LessThanTenPipe],
                        template: "\n  <keg-display *ngFor=\"#currentKeg of kegList | lessThanTenPipe:selectedPipe\"\n  (click)=\"kegClicked(currentKeg)\"\n  [class.selected]=\"currentKeg === selectedKeg\"\n  [keg]=\"currentKeg\">\n  </keg-display>\n  <edit-keg-details *ngIf=\"selectedKeg\" [keg]=\"selectedKeg\"></edit-keg-details>\n  <new-keg (onSubmitNewKeg)=\"createKeg($event)\"></new-keg>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegListComponent);
                return KegListComponent;
            }());
            exports_1("KegListComponent", KegListComponent);
        }
    }
});
//# sourceMappingURL=model-list.component.js.map