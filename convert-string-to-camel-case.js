function toCamelCase(str){
  // UpperCase the next character '.' after '_' and '-'
  str = str.replace(/[_-]./g, x => x.toUpperCase());
  // Delete '_' and '-'
  str = str.replace(/[_-]/g, '');
  return str;
}
