function daysToMilliseconds(days = 1) {
  return days * 24 * 60 * 60 * 1000;
}

function stringToMilliseconds(string: string) {
  // examples: now | 7 d | 8 bd
  if (typeof string !== 'string') throw new Error('Input should be string');
  if (string === 'now') return 0;

  const [days] = string.split(' ');
  const daysNumber = parseInt(days, 10);

  if (daysNumber === 0) return 0;

  return daysToMilliseconds(daysNumber);
}

export { daysToMilliseconds, stringToMilliseconds };
