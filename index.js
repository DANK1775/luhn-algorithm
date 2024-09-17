function luhn(n) {
  let sum = 0
  n = n.toString().split('').map(Number).reverse()
  for (let i = 0; i < n.length; i++) { 
    if(i % 2 === 1) n[i] * 2 > 10 ? sum += (n[i] * 2 - 9) : sum += n[i] * 2
    if(i % 2 !== 1) sum += n[i]
  }
  return(sum % 10 === 0)
}
console.log(luhn(929399))