"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64DecodeUnicode = void 0;
function base64DecodeUnicode(str) {
    const percentEncodedStr = Buffer.from(str, 'base64').toString('utf8');
    return percentEncodedStr;
}
exports.base64DecodeUnicode = base64DecodeUnicode;
