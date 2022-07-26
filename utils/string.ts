function base64DecodeUnicode(str) {
  const percentEncodedStr = Buffer.from(str, 'base64').toString('utf8');

  return percentEncodedStr;
}

export { base64DecodeUnicode };
