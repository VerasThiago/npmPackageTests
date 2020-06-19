"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
class Display {
    static time() {
        return this.dateDAO.toLocaleTimeString();
    }
    static date() {
        return this.dateDAO.toLocaleDateString();
    }
}
exports.Display = Display;
Display.dateDAO = new Date();
