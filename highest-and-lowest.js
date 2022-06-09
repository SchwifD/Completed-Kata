function highAndLow(numbers){
  // Split string into an array, then spread array "..." into Math.max and min
  return numbers = `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;
}
