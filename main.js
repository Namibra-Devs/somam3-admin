const navLinks = document.querySelectorAll('#nav a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    // Remove the "active-link" class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the "active-link" class to the link with id "active"
      this.classList.add('active');
  });
});
