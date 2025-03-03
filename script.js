const perfil = document.querySelector('.perfil');
const dropdown = document.getElementById('dropdown');

perfil.addEventListener('click', function(event) {
  event.stopPropagation(); // Impede que o clique se propague para o documento
  dropdown.classList.toggle('show');
});

// Fecha o dropdown se o usuário clicar fora dele
window.addEventListener('click', function(event) {
  if (!event.target.matches('.login')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});
