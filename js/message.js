function intro() {
  const message = "Hi, Nice to meet you :) ";
  const container = [];
  const div = document.querySelector("introduction");
  for (let i = 0; i < message.length; i++) {
    container.push(message[i]);
    div.appendChild(container);
  }
}

window.addEventListener("DOMContentLoaded", intro);


