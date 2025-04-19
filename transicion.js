document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = link.href;
        }, 500); // Tiempo que coincide con la duración de la transición CSS
      });
    });
  });
  