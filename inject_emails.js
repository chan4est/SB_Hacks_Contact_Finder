function clickCompose() {
  console.log("Clicked bitch");
  var global_button = document.querySelector('.J-J5-Ji.T-I-KE.L3');
  var mousedownEvent = new MouseEvent('mousedown'); 
  global_button.dispatchEvent(mousedownEvent); 
  var mouseupEvent = new MouseEvent('mouseup'); 
  global_button.dispatchEvent(mouseupEvent);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

clickCompose();