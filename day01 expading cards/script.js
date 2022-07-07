const panels = document.querySelectorAll('.panel')

// remove the class 'active' of every panel by looping
function removeActiveClassed () {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

//call the function to clear all the class 'active'
//add event listener on each panel
//the clicked element add the classList 'active'
panels.forEach(panel => {
  panel.addEventListener('click',
    () => {
      removeActiveClassed()
      panel.classList.add('active')
    })
}
)
