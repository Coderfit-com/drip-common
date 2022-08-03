"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(false), ms);
    });
}
exports.wait = wait;
