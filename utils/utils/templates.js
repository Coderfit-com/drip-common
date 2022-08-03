"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeWithVariables = void 0;
const luxon_1 = require("luxon");
const constants_1 = require("../constants");
function composeWithVariables({ template, data, addLinebreaks = false, }) {
    let tmp = template;
    const dayOfWeek = luxon_1.DateTime.local({ locale: 'en' }).weekdayLong;
    Object.keys(constants_1.templateVariables).forEach((key) => {
        switch (key) {
            case '{{day_of_week}}':
                tmp = tmp.replaceAll(key, dayOfWeek);
                return;
            default:
                let value = data[constants_1.templateVariables[key]];
                if (!value)
                    value = '';
                tmp = tmp.replaceAll(key, value);
                return;
        }
    });
    if (addLinebreaks) {
        tmp = tmp.replaceAll('\n', '<br>');
    }
    return tmp;
}
exports.composeWithVariables = composeWithVariables;
