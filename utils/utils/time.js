"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToMilliseconds = exports.daysToMilliseconds = void 0;
function daysToMilliseconds(days = 1) {
    return days * 24 * 60 * 60 * 1000;
}
exports.daysToMilliseconds = daysToMilliseconds;
function stringToMilliseconds(string) {
    if (typeof string !== 'string')
        throw new Error('Input should be string');
    if (string === 'now')
        return 0;
    const [days] = string.split(' ');
    const daysNumber = parseInt(days, 10);
    if (daysNumber === 0)
        return 0;
    return daysToMilliseconds(daysNumber);
}
exports.stringToMilliseconds = stringToMilliseconds;
