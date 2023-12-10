
const countCoins = (money) => {
  if (isNaN(money)){
    return;
  }
  if (money === 0) {
    return money;
  }
  else if (money >= .25) {
    const quarters = Math.floor( money / .25);
    return quarters;
  }
}

export default countCoins;
