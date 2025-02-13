function adjustDisplay() {
    var windowWidth = window.innerWidth
    var myDiv = document.getElementById('images');;
    if (windowWidth < 700) {
      // Switch to the small-screen class
      myDiv.body.classList.add('image-container-small');
      myDiv.body.classList.remove('image-container-small1');
    } else {
      // Switch to the large-screen class
      myDiv.body.classList.add('image-container1');
      myDiv.body.classList.remove('image-container-small');
    }
  }
  
  // Call the function on window resize
  window.addEventListener('resize', adjustDisplay);
  
  // Call the function initially
  adjustDisplay();