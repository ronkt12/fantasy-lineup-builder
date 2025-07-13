
const defaultSquad = [
  { name: "Onana", value: 40 },
  { name: "Dalot", value: 25 },
  { name: "Varane", value: 35 },
  { name: "Martínez", value: 45 },
  { name: "Shaw", value: 30 },
  { name: "Casemiro", value: 50 },
  { name: "Mount", value: 40 },
  { name: "Fernandes", value: 70 },
  { name: "Antony", value: 60 },
  { name: "Højlund", value: 65 },
  { name: "Rashford", value: 75 }
];

const subs = [
  { name: "Eriksen", value: 20 },
  { name: "Sancho", value: 30 },
  { name: "McTominay", value: 25 },
  { name: "Lindelöf", value: 15 },
  { name: "Maguire", value: 20 },
  { name: "Bayindir", value: 5 }
];

function renderPlayers() {
  const pitch = document.getElementById("pitch");
  const subList = document.getElementById("subList");
  pitch.innerHTML = "";
  subList.innerHTML = "";

  let totalValue = 0;

  defaultSquad.forEach((player, index) => {
    const div = document.createElement("div");
    div.className = "player-slot";

    const nameInput = document.createElement("input");
    nameInput.className = "player-name";
    nameInput.value = player.name;
    nameInput.oninput = () => { player.name = nameInput.value };

    const valueInput = document.createElement("input");
    valueInput.className = "player-value";
    valueInput.type = "number";
    valueInput.value = player.value;
    valueInput.oninput = () => {
      player.value = parseFloat(valueInput.value);
      updateTotal();
    };

    div.appendChild(nameInput);
    div.appendChild(valueInput);
    pitch.appendChild(div);

    totalValue += player.value;
  });

  subs.forEach((player) => {
    const li = document.createElement("li");

    const nameInput = document.createElement("input");
    nameInput.className = "player-name";
    nameInput.value = player.name;
    nameInput.oninput = () => { player.name = nameInput.value };

    const valueInput = document.createElement("input");
    valueInput.className = "player-value";
    valueInput.type = "number";
    valueInput.value = player.value;
    valueInput.oninput = () => {
      player.value = parseFloat(valueInput.value);
      updateTotal();
    };

    li.appendChild(nameInput);
    li.appendChild(valueInput);
    subList.appendChild(li);

    totalValue += player.value;
  });

  document.getElementById("totalValue").textContent = totalValue.toFixed(1);
}

function updateTotal() {
  let totalValue = defaultSquad.reduce((acc, p) => acc + parseFloat(p.value || 0), 0)
    + subs.reduce((acc, p) => acc + parseFloat(p.value || 0), 0);
  document.getElementById("totalValue").textContent = totalValue.toFixed(1);
}

window.onload = renderPlayers;
