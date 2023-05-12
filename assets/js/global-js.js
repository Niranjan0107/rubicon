window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var targetPosition = 50; // Adjust this value as needed
  
  // Get all the navigation links
  var navLinks = document.querySelectorAll('header');
  
  // Remove the active class from all navigation links
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  
  // Add the active class to the appropriate link
  if (scrollPosition >= targetPosition) {
    navLinks[0].classList.add('active');
  } else {
    navLinks[0].classList.remove('active');
  }
});