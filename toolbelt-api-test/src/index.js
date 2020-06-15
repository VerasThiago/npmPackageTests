"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Display = /** @class */ (function () {
    function Display() {
    }
    Display.time = function () {
        console.log(this.dateDAO.toLocaleTimeString());
    };
    Display.date = function () {
        console.log(this.dateDAO.toLocaleDateString());
    };
    Display.dateDAO = new Date();
    return Display;
}());
exports.default = Display;
