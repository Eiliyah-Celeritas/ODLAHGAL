document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.title');

  const revealTitle = () => {
    title.classList.add('show');
    window.removeEventListener('scroll', revealTitle);
  };

  window.addEventListener('scroll', revealTitle);
});
