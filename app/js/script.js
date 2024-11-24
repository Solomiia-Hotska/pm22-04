function toggleText(icon) {
  const section = icon.closest(".about-me"); // Знаходимо найближчу секцію
  const text = section.querySelector(".about-text"); // Знаходимо текстовий блок

  // Перемикаємо видимість тексту
  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden"); // Показуємо текст
  } else {
    text.classList.add("hidden"); // Ховаємо текст
  }
}

// Анімація прогрес-барів при завантаженні сторінки
window.addEventListener("load", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress"); // Отримуємо значення з data-progress
    bar.style.width = progress + "%"; // Встановлюємо ширину для анімації
  });
});

// function toggleJobText(icon) {
//     const section = icon.closest('.job-experience'); // Знаходимо секцію
//     const jobs = section.querySelectorAll('.job-item'); // Знаходимо всі текстові блоки
//     const dots = section.querySelectorAll('.dot'); // Знаходимо всі крапки

//     // Перевіряємо, чи є текст прихованим
//     const isHidden = Array.from(jobs).some(job => job.classList.contains('hidden'));

//     // Перемикаємо видимість тексту та крапок
//     jobs.forEach((job, index) => {
//         if (isHidden) {
//             job.classList.remove('hidden'); // Показуємо текст
//             dots[index].style.opacity = "1"; // Показуємо крапку
//         } else {
//             job.classList.add('hidden'); // Ховаємо текст
//             dots[index].style.opacity = "0"; // Ховаємо крапку
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
  const toggleIcon = document.getElementById("skills-toggle");
  const textElement = document.getElementById("skills-text");
  const progressBars = document.querySelectorAll(".progress");

  // Функція для запуску анімації прогрес-барів
  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const progress = bar.getAttribute("data-progress");
      bar.style.width = `${progress}%`;
    });
  }

  //   // Запускаємо анімацію прогрес-барів при завантаженні сторінки
  //   animateProgressBars();

  // Тогл розгортання/згортання тексту
  toggleIcon.addEventListener("click", function () {
    textElement.classList.toggle("expanded");
  });
});
