$(document).ready(function() {
  window.onload = function() {
    const block1 = document.querySelectorAll('.hover-color1')
    block1.forEach(img => {
      img.addEventListener('mouseover', e => {
        document.body.classList.add('hover-color1')
      })
      img.addEventListener('mouseout', e => {
        document.body.classList.remove('hover-color1')
      })
    })
  }

  window.onload = function() {
    const block2 = document.querySelectorAll('.hover-color2')
    block2.forEach(img => {
      img.addEventListener('mouseover', e => {
        document.body.classList.add('hover-color2')
      })
      img.addEventListener('mouseout', e => {
        document.body.classList.remove('hover-color2')
      })
    })
  }

  window.onload = function() {
    const block3 = document.querySelectorAll('.hover-color3')
    block3.forEach(img => {
      img.addEventListener('mouseover', e => {
        document.body.classList.add('hover-color3')
      })
      img.addEventListener('mouseout', e => {
        document.body.classList.remove('hover-color3')
      })
    })
  }
})
