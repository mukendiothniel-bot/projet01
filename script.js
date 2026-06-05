document.addEventListener('DOMContentLoaded', () => {
  // Exemple simple pour relier le HTML avec du JavaScript
  const form = document.querySelector('form.contact-form');
  const input = document.querySelector('input[type="text"]');
  const output = document.querySelector('#output');

  if (form && input && output) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const value = input.value.trim();
      output.textContent = value
        ? `Vous avez saisi : ${value}`
        : 'Veuillez entrer une valeur.';
      input.value = '';
    });
  }

  document.querySelectorAll('[data-action="toggle"]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.target);
      if (target) {
        target.classList.toggle('hidden');
      }
    });
  });
});