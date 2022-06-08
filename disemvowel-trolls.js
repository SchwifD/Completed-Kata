function disemvowel(str) {
  str = str.replace(/i/gi, '');
  str = str.replace(/I/gi, '');
  str = str.replace(/e/gi, '');
  str = str.replace(/o/gi, '');
  str = str.replace(/O/gi, '');
  str = str.replace(/u/gi, '');
  str = str.replace(/a/gi, '');
  return str;
}
