const addToList = (Item) => {
  Item.preventDefault();
  const form = Item.target;
  const listaObiettivi = {};

  //Potevo evitare il ciclo for dato che ho solo un tag input nel mio html
  //Dovevo sempliemente selezionarlo con il suo id.

  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].tagName !== "BUTTON") {
      let input = form.elements[i].value;
      let idInput = form.elements[i].id;
      listaObiettivi[idInput] = input;
      input.innerText = "";
    }
  }
  const btn = document.createElement("button");
  btn.innerText = "Cancella questa task";
  btn.style = "margin-bottom: 15px";
  btn.onclick = () => {
    li.style.display = "none";
    btn.style.display = "none";
  };

  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const li = document.createElement("li");
  li.style = "display: inline-block";
  li.style = `color: rgb(${red}, ${green}, ${blue})`;
  li.innerText = `${listaObiettivi.obiettivo}`;
  li.onclick = () => {
    li.style = "text-decoration-line: line-through";
  };

  const list = document.getElementById("To-do-list");
  list.appendChild(li);
  list.appendChild(btn);
};
