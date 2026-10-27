const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-messages");

const answers = [
  {
    keywords: ["dom"],
    text: "Il DOM è la rappresentazione della pagina HTML che il browser costruisce. JavaScript può cercare un elemento nel DOM e aggiornarne contenuto, attributi o stile.",
  },
  {
    keywords: ["testo", "contenuto", "textcontent"],
    text: "Per cambiare un testo, JavaScript seleziona un elemento e aggiorna la sua proprietà textContent. Per esempio: document.querySelector('h1').textContent = 'Ciao!';",
  },
  {
    keywords: ["bottone", "pulsante", "click", "evento"],
    text: "Puoi ascoltare un evento come il click con addEventListener. Quando l'utente preme il bottone, la funzione collegata può aggiornare il testo o aggiungere una classe CSS.",
  },
  {
    keywords: ["esempio", "codice", "come"],
    text: "Ecco un esempio: const titolo = document.querySelector('h1'); titolo.textContent = 'Titolo aggiornato';. JavaScript trova l'elemento HTML e ne cambia il testo.",
  },
  {
    keywords: ["css", "stile", "classe"],
    text: "JavaScript può cambiare l'aspetto aggiungendo o rimuovendo classi CSS: elemento.classList.add('evidenziato'). Le regole grafiche restano nel CSS.",
  },
  {
    keywords: ["html", "javascript", "js"],
    text: "HTML organizza gli elementi della pagina. JavaScript li seleziona tramite il DOM e può modificarne testo, attributi, classi o aggiungere nuovi elementi in risposta alle azioni dell'utente.",
  },
];

function getAnswer(message) {
  const normalizedMessage = message.toLocaleLowerCase("it");
  const answer = answers.find(({ keywords }) =>
    keywords.some((keyword) => normalizedMessage.includes(keyword)),
  );

  return answer?.text ??
    "Posso aiutarti con DOM, testo, click, classi CSS o un esempio di codice. Quale argomento ti interessa?";
}

function addMessage(text, sender) {
  const message = document.createElement("p");
  message.classList.add("chat-message", `${sender}-message`);
  message.textContent = text;
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();

  if (!message) return;

  addMessage(message, "user");
  addMessage(getAnswer(message), "bot");
  chatInput.value = "";
  chatInput.focus();
});
