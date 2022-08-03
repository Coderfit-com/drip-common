"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInArrayByProp = void 0;
function searchInArrayByProp(value = '', array = [], elementProperty = '') {
    let result = [null, null];
    array.forEach((element, index) => {
        if (element[elementProperty] === value) {
            result = [element, index];
        }
    });
    return result;
}
exports.searchInArrayByProp = searchInArrayByProp;
