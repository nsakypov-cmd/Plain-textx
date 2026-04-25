function openChat(event) {
  event.preventDefault();
  const question = document.getElementById('question').value.trim();
  const base = 'https://chat.openai.com/';
  if (question) {
    window.open(base, '_blank');
  } else {
    window.open(base, '_blank');
  }
}

function sendContact(event) {
  event.preventDefault();
  alert('Сұрағыңыз қабылданды! Бұл демо форма. Нақты сайтта Google Forms немесе email қызметін қосуға болады.');
}
