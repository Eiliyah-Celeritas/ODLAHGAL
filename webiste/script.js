// Intersection Observer to trigger animations
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );
  
  // Observe all animated elements
  document.querySelectorAll('.animate-left, .animate-right, .animate-top').forEach(el => {
    observer.observe(el);
  });