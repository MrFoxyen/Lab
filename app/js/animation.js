document.querySelectorAll('.section-header').forEach(header => {
  header.addEventListener('click', () => {
      const content = header.nextElementSibling.nextElementSibling;
      console.log(header)
      if (content.classList.contains('active')) {
          // Закриваємо секцію
          content.style.maxHeight = null; // Встановлюємо висоту в нуль
          content.classList.remove('active');
      } else {
         

          // Розкриваємо поточну секцію
          content.style.maxHeight = content.scrollHeight + "px"; // Динамічно визначаємо потрібну висоту
          content.classList.add('active');
      }
  });
});