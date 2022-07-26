function base64DecodeUnicode(str) {
    var percentEncodedStr = Buffer.from(str, 'base64').toString('utf8');
    return percentEncodedStr;
}
export { base64DecodeUnicode };
//# sourceMappingURL=string.js.map