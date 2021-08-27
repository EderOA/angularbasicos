"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroesModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var heroe_component_1 = require("./heroe/heroe.component");
var listado_component_1 = require("./listado/listado.component");
var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        core_1.NgModule({
            declarations: [
                heroe_component_1.HeroeComponent,
                listado_component_1.ListadoComponent
            ],
            exports: [
                listado_component_1.ListadoComponent
            ],
            imports: [
                common_1.CommonModule
            ]
        })
    ], HeroesModule);
    return HeroesModule;
}());
exports.HeroesModule = HeroesModule;
