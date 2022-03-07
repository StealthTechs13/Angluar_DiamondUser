"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UiService = void 0;
var core_1 = require("@angular/core");
var UiService = /** @class */ (function () {
    function UiService() {
        this.retunData = [];
        this.loader = false;
        this.errorMsg = false;
        this.sucMsg = false;
        this.sportsId = 4;
        this.Message = "";
        this.userId = 0;
        this.creditLimit = 100000;
        this.skipRec = 0;
        this.sportsData = [];
        this.compData = [];
        this.matchData = [];
        this.showBetSlip = false;
        this.balance = 0;
        this.exposure = 0;
        this.profitLossData = [];
        this.Stack = 0;
    }
    UiService = __decorate([
        core_1.Injectable()
    ], UiService);
    return UiService;
}());
exports.UiService = UiService;
