const names = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name) {
        names.push(name);
        const nameList = document.getElementById('nameList');
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
        nameInput.value = '';
    }
}

function drawWinner() {
    if (names.length < 4) {
        alert('Debe haber al menos 4 participantes para realizar el sorteo.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];
    document.getElementById('winner').textContent = `El ganador es: ${winner}`;
}
