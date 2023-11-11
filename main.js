// <!-- Including the TagCloud.js script CDN in the document    -->

window.addEventListener('scroll', function() {
  // Calculate the current scroll position relative to the page height
  const scrollPosition = window.scrollY / (document.body.clientHeight - window.innerHeight);

  // Update the content's opacity based on the scroll position
  const content = document.querySelector('.two-column');
  content.style.opacity = 1 - scrollPosition; // As you scroll down, the opacity decreases

  // You can adjust the multiplier (e.g., 1.5) to control the fading speed
  // content.style.opacity = 1 - (scrollPosition * 1.5);
});

const Texts = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'SWIFT', 'MONGOOSE', 'REACT',
  'PYTHON', 'SASS',
  'DJANGO', 'NODEJS', 'MONGODB',
  'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA',
  'GITHUB', 'WORDPRESS', 'FLASK', 'API', 'REACT',
  'ILLUSTRATOR', 'PHOTOSHOP CC', 'AFTER EFFECTS',
  'SASS', 'CHATGPT', 'AI', 'WORDPRESS', 'ILLUSTRATOR', 'pHOTOSHOP CC', 'FLASK',
  'VSCODE', 'PYCHARME'
];

var tagCloud = TagCloud('.Sphere', Texts, {

  // Sphere radius in px
  radius: 230,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true

});

// Giving color to each text in sphere
var color = '#26f010';
document.querySelector('.Sphere').style.color = color;

// script.js
document.getElementById("btn").addEventListener("click", function () {
  // Replace 'your_resume.pdf' with the actual path to your resume PDF
  var pdfPath = 'assets/resume.pdf';

  // Create a link element
  var link = document.createElement('a');
  link.href = pdfPath;

  // Set the download attribute with the desired file name
  link.download = 'assets/resume.pdf';

  // Trigger a click event on the link to initiate the download
  link.click();
});


    // Function to scroll smoothly to a section when a link is clicked
    function smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
          window.scrollTo({
              behavior: 'smooth',
              top: element.offsetTop,
          });
      }
  }

  // Add a click event listener to each navigation link
  const navLinks = document.querySelectorAll('.menu a');
  navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent the default link behavior
          const targetId = link.getAttribute('href');
          smoothScroll(targetId);
      });
  });

  const hamburger = document.querySelector(".hamburger-button");
  const bar1 = document.querySelector(".bar1");
  const bar2 = document.querySelector(".bar2");
  const bar3 = document.querySelector(".bar3");
  const mobileNav = document.querySelector(".mobileNav");

  hamburger.addEventListener("click", () =>{
    bar1.classList.toggle("animateBar1");
    bar2.classList.toggle("animateBar2");
    bar3.classList.toggle("animateBar3");
    mobileNav.classList.toggle("openDrawer");
  });


// reveale section
// Function to reveal sections when they come into view
function revealSection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
}

// Set up the Intersection Observer
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.30, // Adjust this value as needed
});

// Get all the sections you want to reveal
const sectionsToReveal = document.querySelectorAll('.section--hidden');

// Observe each section
sectionsToReveal.forEach((section) => {
  sectionObserver.observe(section);
});




  
