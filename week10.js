let id = 0;

document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('idea').value;
    row.insertCell(1).innerHTML = document.getElementById('goal-date').value;
    let actions = row.insertCell(2);
    actions.appendChild(deleteRow(id++)); //created below
    document.getElementById('idea').value='';
    
    
});

function deleteRow(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}