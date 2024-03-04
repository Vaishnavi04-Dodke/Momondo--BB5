
  // Get all the nav links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all nav links
      navLinks.forEach(item => {
        item.classList.remove('active');
       
      });

      // Add active class to the clicked nav link
      this.classList.add('active');
  
    });
  });

