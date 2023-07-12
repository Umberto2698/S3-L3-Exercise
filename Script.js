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
  //Per fare in modo che la funzione di li non venga erditata dal bottone al suo interno
  //basta mettere la funzionalità onclick su uno span all'interno di li invece che su
  //li stesso

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

  //Dopo aver creato l'elemento potevo usare list.innerHTML per inserire la lista con
  //tutte le sue eventuali caratteristiche senza usare ogni volta li.style

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
