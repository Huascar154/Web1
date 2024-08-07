document.getElementById('connectButton').addEventListener('click', function () {
    const text = document.getElementById('textbox').value;
    alert(`Conectando con: ${text}`);
});

const toggleListButton = document.getElementById('toggleListButton');
const lists = document.querySelector('.lists');

toggleListButton.addEventListener('click', function () {
    if (lists.style.display === 'none' || lists.style.display === '') {
        // Mostrar listas
        lists.style.display = 'flex';
        toggleListButton.textContent = 'Cerrar Listas';

        const list1 = document.getElementById('listView1');
        const list2 = document.getElementById('listView2');

        list1.innerHTML = '';
        list2.innerHTML = '';

        const items1 = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
        const items2 = ['Item A', 'Item B', 'Item C'];

        items1.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list1.appendChild(li);
        });

        items2.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list2.appendChild(li);
        });
    } else {
        // Ocultar listas
        lists.style.display = 'none';
        toggleListButton.textContent = 'Mostrar Listas';
    }
});

const modeSwitch = document.getElementById('modeSwitch');
const body = document.body;

modeSwitch.addEventListener('change', function () {
    if (modeSwitch.checked) {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
});
