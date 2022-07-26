var $b3Wkq$buffer = require("buffer");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fc6e4adc3e3ac054$exports = {};
var $e39562c7a912860d$exports = {};

$parcel$defineInteropFlag($e39562c7a912860d$exports);

$parcel$export($e39562c7a912860d$exports, "default", function () { return $e39562c7a912860d$export$2e2bcd8739ae039; });
const $e39562c7a912860d$var$ERROR_CODES = {
    // General
    TIMEOUT: 504,
    SERVICE_UNAVAILABLE: 503,
    FAILED_FETCH: 50301,
    // Authentication
    INVALID_GRANT: 40101,
    INVALID_SCOPES: 40102
};
var $e39562c7a912860d$export$2e2bcd8739ae039 = $e39562c7a912860d$var$ERROR_CODES;


var $36a3bf1160e4e3be$exports = {};

$parcel$export($36a3bf1160e4e3be$exports, "templateVariables", function () { return $36a3bf1160e4e3be$export$49ee04512f2c051; });
const $36a3bf1160e4e3be$export$49ee04512f2c051 = {
    "{{first_name}}": "firstName",
    "{{last_name}}": "lastName",
    "{{company}}": "company",
    "{{location}}": "location",
    "{{title}}": "title",
    "{{day_of_week}}": "day_of_week"
};


$parcel$exportWildcard($fc6e4adc3e3ac054$exports, $e39562c7a912860d$exports);
$parcel$exportWildcard($fc6e4adc3e3ac054$exports, $36a3bf1160e4e3be$exports);


var $8acfe0c4c204220d$exports = {};
var $fd191738e21bd13e$exports = {};

$parcel$export($fd191738e21bd13e$exports, "searchInArrayByProp", function () { return $fd191738e21bd13e$export$96ed4ea6719675a9; });
function $fd191738e21bd13e$export$96ed4ea6719675a9(value = "", array = [], elementProperty = "") {
    let result = [
        null,
        null
    ];
    array.forEach((element, index)=>{
        if (element[elementProperty] === value) result = [
            element,
            index
        ];
    });
    return result;
}


var $1dc6147e318a2189$exports = {};

$parcel$export($1dc6147e318a2189$exports, "excludeProps", function () { return $1dc6147e318a2189$export$4974089e59c6941a; });
function $1dc6147e318a2189$export$4974089e59c6941a(object, ...keys) {
    for (const key of keys)delete object[key];
    return object;
}


var $f804a8a96fe70ad8$exports = {};

$parcel$export($f804a8a96fe70ad8$exports, "wait", function () { return $f804a8a96fe70ad8$export$5c069c93d2b7493f; });
async function $f804a8a96fe70ad8$export$5c069c93d2b7493f(ms) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(false), ms);
    });
}


var $9158036817b96354$exports = {};

$parcel$export($9158036817b96354$exports, "base64DecodeUnicode", function () { return $9158036817b96354$export$137784f9980fd3ae; });

var $9158036817b96354$require$Buffer = $b3Wkq$buffer.Buffer;
function $9158036817b96354$export$137784f9980fd3ae(str) {
    const percentEncodedStr = $9158036817b96354$require$Buffer.from(str, "base64").toString("utf8");
    return percentEncodedStr;
}


var $cde4143a2f5ea098$exports = {};

$parcel$export($cde4143a2f5ea098$exports, "daysToMilliseconds", function () { return $cde4143a2f5ea098$export$f8bfa3b81ef96dc4; });
$parcel$export($cde4143a2f5ea098$exports, "dateToDayMonthString", function () { return $cde4143a2f5ea098$export$36f6830148569b9a; });
$parcel$export($cde4143a2f5ea098$exports, "stringToMilliseconds", function () { return $cde4143a2f5ea098$export$2cb0929b9b88f2a3; });
function $cde4143a2f5ea098$export$f8bfa3b81ef96dc4(days = 1) {
    return days * 86400000;
}
function $cde4143a2f5ea098$export$36f6830148569b9a(date) {
    const dateString = date.toLocaleString("en-US", {
        timeZone: "Europe/Kiev"
    });
    return dateString.split(",")[0].slice(0, -5);
}
function $cde4143a2f5ea098$export$2cb0929b9b88f2a3(string) {
    // examples: now | 7 d | 8 bd
    if (typeof string !== "string") throw new Error("Input should be string");
    if (string === "now") return 0;
    const [days] = string.split(" ");
    const daysNumber = parseInt(days, 10);
    if (daysNumber === 0) return 0;
    return $cde4143a2f5ea098$export$f8bfa3b81ef96dc4(daysNumber);
}


$parcel$exportWildcard($8acfe0c4c204220d$exports, $fd191738e21bd13e$exports);
$parcel$exportWildcard($8acfe0c4c204220d$exports, $1dc6147e318a2189$exports);
$parcel$exportWildcard($8acfe0c4c204220d$exports, $f804a8a96fe70ad8$exports);
$parcel$exportWildcard($8acfe0c4c204220d$exports, $9158036817b96354$exports);
$parcel$exportWildcard($8acfe0c4c204220d$exports, $cde4143a2f5ea098$exports);


$parcel$exportWildcard(module.exports, $fc6e4adc3e3ac054$exports);
$parcel$exportWildcard(module.exports, $8acfe0c4c204220d$exports);


//# sourceMappingURL=index.js.map
