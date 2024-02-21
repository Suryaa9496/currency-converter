function inrToUsd(inrAmount) {
    const conversionRate = 0.014; 
    return inrAmount * conversionRate;
  }
  
  function inrToEur(inrAmount) {
    const conversionRate = 0.012; 
    return inrAmount * conversionRate;
  }
  
  
  function inrToAed(inrAmount) {
    const conversionRate = 0.051;
    return inrAmount * conversionRate;
  }
  
  
  const inrAmount = 10;
  const usdAmount = inrToUsd(inrAmount);
  const eurAmount = inrToEur(inrAmount);
  const aedAmount = inrToAed(inrAmount);
  
  console.log(`${inrAmount} INR is equal to ${usdAmount} USD`);
  console.log(`${inrAmount} INR is equal to ${eurAmount} EUR`);
  console.log(`${inrAmount} INR is equal to ${aedAmount} AED`);
  