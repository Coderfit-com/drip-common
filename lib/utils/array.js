function searchInArrayByProp(value, array, elementProperty) {
    if (value === void 0) { value = ''; }
    if (array === void 0) { array = []; }
    if (elementProperty === void 0) { elementProperty = ''; }
    var result = [null, null];
    array.forEach(function (element, index) {
        if (element[elementProperty] === value) {
            result = [element, index];
        }
    });
    return result;
}
export { searchInArrayByProp };
//# sourceMappingURL=array.js.map