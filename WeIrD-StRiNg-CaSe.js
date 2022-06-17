function toWeirdCase(string){
  // Split string into array
  let str = string.split(" ");
  let result = str;
  // Log array
  console.log(str);
  // Log length of each element in array
  str.forEach( (element, index) => {
    for(i = 0; i < str[index].length; i++) {
      //console.log(element[i], i);
      if(i % 2 == 0 || i == 0) result[index] = result[index].substring(0, i) + element[i].toUpperCase() + result[index].substring(i + 1);
      else if(i % 2 !== 0) result[index] = result[index].substring(0, i) + element[i].toLowerCase() + result[index].substring(i + 1);
      console.log(result[i], i);
    }
  });
  console.log(result);
  // if 1 word, join with no spaces
  if(result.length == 1) result = result.join('');
  else if(result.length !== 1) result = result.join(' ');
  return result;
}
