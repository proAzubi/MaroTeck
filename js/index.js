const navLinks = document.querySelectorAll('.nav-link');
    
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));  // Remove active class from all links
    this.classList.add('active'); // Add active class to the clicked link
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const {scrollY} = window;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      const sectionId = section.id;
      navLinks.forEach(link => {
        if (link.href.includes(sectionId)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      return; // Exit the loop after finding the active section
    }
  });
});

  const eyeIcon = document.querySelector('.eye-icon');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.close-modal');

  eyeIcon.addEventListener('click', function() {
    modalOverlay.style.display = 'block'; // Show the modal overlay
  });

  closeModalBtn.addEventListener('click', function() {
    modalOverlay.style.display = 'none'; // Hide the modal overlay
  });

  // Optional: Close the modal by clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });

  const filterButtons = document.querySelectorAll('.filter-portfolio');

  function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.img-container'); // Assuming your portfolio items have this class

    portfolioItems.forEach(item => {
      // Check if the item has a data-category attribute (explained later)
      if (category === 'All' || item.dataset.category === category) {
        item.style.display = 'block'; // Show the item
      } else {
        item.style.display = 'none'; // Hide the item
      }
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const selectedCategory = button.textContent; // Get the text content of the clicked button (category)
      filterPortfolio(selectedCategory);
    });
  });

  // code to add:
  if (filter === '*') {
    animals.forEach(animal => animal.classList.remove('hidden'));
  }

  // full JS code:
  function filterAnimals(e) {
    const animals = document.querySelectorAll(".list div");
    let {filter} = e.target.dataset;
    if (filter === '*') {
      animals.forEach(animal => animal.classList.remove('hidden'));
    }  else {
      animals.forEach(animal => {
        animal.classList.contains(filter) ? 
        animal.classList.remove('hidden') : 
        animal.classList.add('hidden');
      });
    };
  };
  //const filterButtons = document.querySelectorAll('.filter-option');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('filter-active'));
      this.classList.add('filter-active');
    });
  });


  const portfolioTabs = document.querySelectorAll('.nav-link');

  portfolioTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      portfolioTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });