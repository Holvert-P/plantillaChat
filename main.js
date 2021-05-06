  const button = document.querySelector('.button') 
  const tooltip = document.querySelector('.tooltip') 

  Popper.createPopper(button, tooltip)
  
  
  function toggle() { 
    tooltip.classList.toggle('shown')
  }
  
  button.addEventListener('click',function(){
    toggle()
  })
