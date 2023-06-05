let phone = 0;
let accOne = 0;
    
function costTotal() {
  const textElement = document.querySelector('.js-accessories-cost, .js-iphone-cost');
  let cost = Number(textElement.value);

  cost = phone + accOne;

  if (cost < 150) {
    cost = cost + 20;
  }else {
    cost = cost;
  }

  document.querySelector('.js-cost')
    .innerHTML = `$${cost}`;
}

function bought() {
 const buttonElement = document.querySelector('.js-buy-button');
    
  if (buttonElement.innerText === 'Buy') {
    buttonElement.innerHTML = 'Bought';
    } else {
      buttonElement.innerHTML = 'Buy';
    }
}