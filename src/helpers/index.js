const calculateHealth = (percent, fractions) => {
  const arr = [];
  for(let i = 0; i < Math.round(percent / (100/fractions)); i++) {
    arr.push(true);
  }
  
  return arr;
}

export {
  calculateHealth
}