const addToList = (Item) => {
  Item.preventDefault();
  const form = Item.target;
  const listaObiettivi = {};
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].tagName !== "BUTTON") {
      let input = form.elements[i].value;
      let idInput = form.elements[i].id;
      listaObiettivi[idInput] = input;
    }
  }
  const btn = document.createElement("button");
  btn.innerText = "Cancella questa task";
  btn.style = "display: inline-block";
  const li = document.createElement("li");
  li.innerText = `${listaObiettivi.obiettivo}`;
  li.onclick = () => {
    li.style = "text-decoration-line: line-through";
  };
  const list = document.getElementById("To-do-list");
  btn.onclick = () => {
    li.style.display = "none";
    btn.style.display = "none";
  };
  list.appendChild(li);
  list.appendChild(btn);
};
