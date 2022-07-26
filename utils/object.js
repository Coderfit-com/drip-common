"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeProps = void 0;
function excludeProps(object, ...keys) {
    for (const key of keys) {
        delete object[key];
    }
    return object;
}
exports.excludeProps = excludeProps;
