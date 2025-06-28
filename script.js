
// Simple JavaScript for the landing page
function startFormatting() {
  // Replace this URL with your actual formatting page URL
  window.location.href = '/category';
  
  // Alternative: You can also use this for debugging
  console.log('Start formatting button clicked!');
  
  // If you want to show a temporary message instead
  // alert('Redirecting to formatting tool...');
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for any internal links (if added later)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add a subtle fade-in animation on load
  const hero = document.querySelector('.hero');
  const features = document.querySelector('.features');
  
  setTimeout(() => {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 100);
  
  setTimeout(() => {
    features.style.opacity = '1';
    features.style.transform = 'translateY(0)';
  }, 300);
});

// Initialize styles for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  const features = document.querySelector('.features');
  
  // Set initial styles for animation
  hero.style.opacity = '0';
  hero.style.transform = 'translateY(20px)';
  hero.style.transition = 'all 0.6s ease';
  
  features.style.opacity = '0';
  features.style.transform = 'translateY(20px)';
  features.style.transition = 'all 0.6s ease';
});
