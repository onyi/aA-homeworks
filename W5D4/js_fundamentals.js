function madLib(v,a,n){
  return `We shall ${v.toUpperCase()} the ${a.toUpperCase()} ${n.toUpperCase()}`
}

console.log( madLib("Create", "Best", "Webapp") )


function isSubstring(searchString, subString){
  return searchString.includes(subString)

}

console.log( isSubstring("time to program", "time") )

console.log( isSubstring("Jump for joy", "joys") )


function fizzBuzz(array){
  return array.filter(ele => (ele % 5 == 0 || ele % 3 == 0) && !(ele % 5 == 0 && ele % 3 == 0) )
}


console.log(fizzBuzz([1,2,3,4,5,6,7,8,15,33]));

function isPrime(n){
  for(let i = 2; i < n-1; i++){
    if (n % i == 0)
      return false 
  }
  return true
}



function sumOfNPrimes(n){
  num = 2;
  counter = 0;
  sum = 0;
  while (counter < n){
    if (isPrime(num)) {
      sum += num;
      counter ++
    }
    num ++;
  }
  return sum;
}