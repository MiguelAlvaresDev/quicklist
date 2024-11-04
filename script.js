function adicionarItem() {
  const itemInput = document.getElementById("itemInput");
  const itemTexto = itemInput.value.trim();

  if (itemTexto !== "") {
    const novoItem = document.createElement("li");
    novoItem.className = "item";
    novoItem.innerHTML = `
          <div>
              <input type="checkbox" name="check" />
              <span>${itemTexto}</span>
          </div>
          <a href="#" class="deleteLink" onclick="removerItem(this)">
              <img src="assets/Frame.svg" alt="Deletar" />
          </a>
      `;

    const lista = document.getElementById("lista").querySelector("ul");
    lista.appendChild(novoItem);

    itemInput.value = "";
  }
}

function removerItem(link) {
  const item = link.parentElement;
  item.remove();

  const itemRemovedDiv = document.querySelector(".item-removed");
  itemRemovedDiv.classList.add("show");
}

function fecharMensagem() {
  const itemRemovedDiv = document.querySelector(".item-removed");
  itemRemovedDiv.classList.remove("show");
}
