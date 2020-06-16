"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
class Display {
    static time() {
        console.log(this.dateDAO.toLocaleTimeString());
    }
    static date() {
        console.log(this.dateDAO.toLocaleDateString());
    }
}
exports.Display = Display;
Display.dateDAO = new Date();
