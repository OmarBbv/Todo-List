const buton = document.querySelector('.buton');
const search = document.querySelector('.search_item');
const listHeader = document.querySelector('.listheader');
const tasklistbox = document.querySelector('.tasklistbox');
const addItem = document.querySelector('.add_item');
let deleteItem = document.querySelectorAll('.fa-solid');
const listGroup = document.querySelector('.list_group');
let cleatItems = document.querySelector('.hepsinisil');
const footer = document.querySelector('.footer');

AllevenetListener();

function AllevenetListener() {
    buton.addEventListener('click', addElement);
    search.addEventListener('input', searchElement);
    cleatItems.addEventListener('click', clearAll);
}



function clearAll() {
    listGroup.remove();
}

function searchElement() {
    const search = document.querySelector('.search_item');
    const filter = search.value.toLowerCase().trim();
    const items = document.querySelectorAll('li');

    items.forEach(item => {
        let text = item.textContent;

        if (text.toLowerCase().includes(filter.trim().toLowerCase())) {
            item.style.display = '';
        } else {
            item.style.display = 'none'
        }
    })

}


function addElement() {
    if (addItem.value == '') {
        alert('Add to plan')
    }
    else {
        const li = document.createElement('li');
        const i = document.createElement('i');


        li.textContent = addItem.value;
        i.className = 'fa-solid fa-trash-can';
        li.appendChild(i);
        addItem.value = '';
        listGroup.appendChild(li);

        let deleteItem = document.querySelectorAll('.fa-solid');
        let selectElement = document.querySelectorAll('li');

        for (let i = 0; i < deleteItem.length; i++) {
            deleteItem[i].addEventListener('click', deleteItems)
        }

        for (let i = 0; i < selectElement.length; i++) {
            selectElement[i].addEventListener('click', elSelect);
        }
    }
}

function elSelect(e) {

    if (e.target.className === '') {
        e.target.className = 'active';
    } else {
        e.target.className = '';
    }
}

function deleteItems(e) {
    e.target.parentElement.remove()
}
