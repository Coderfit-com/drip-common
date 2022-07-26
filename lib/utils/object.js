function excludeProps(object) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        delete object[key];
    }
    return object;
}
export { excludeProps };
//# sourceMappingURL=object.js.map