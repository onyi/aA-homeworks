function titleize(array, printCallback){
  res = array.map(ele => `Mx. ${ele} Jingleheimer Schmidt`)
  if (typeof printCallback === "function")
    printCallback(res)
  return res 
}