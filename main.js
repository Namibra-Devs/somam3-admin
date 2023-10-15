const navLinks = document.querySelectorAll('#nav a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click',  (event) => {
    // Remove the "active-link" class from all links
    navLinks.forEach(link => link.classList.remove('active-link'));

    // Add the "active-link" class to the link with id "active"
    if (this.id === "active") {
      this.classList.add('active-link');
    }
  });
});
