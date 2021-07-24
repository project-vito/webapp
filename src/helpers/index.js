const calculateHealth = (percent, fractions) => {
  const arr = [];
  for(let i = 0; i < Math.round(percent / (100/fractions)); i++) {
    arr.push(true);
  }
  
  return arr;
}

const parseMoneyValue = (value) => {
  var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(value).replace(/\D00$/, '');
}

export {
  calculateHealth,
  parseMoneyValue
}