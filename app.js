const notes = document.querySelector('.notes');
const container = document.querySelector('.container');
const add_btn = document.querySelector('.add');
const delete_btn = document.querySelector('.delete');
const date_span = document.querySelector('.date');
const textArea = document.querySelector('.note');

// window.onload() = function(){
//     createElement();
// }

// function createElement(){
//     let createNote = document.createElement('div');
//     createNote.appendChild();
// }

function addNote() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    add_btn.addEventListener('click', function(){
        // let div = document.createElement('div');
        // div.classList.add('notes', 'notes-header');
        // container.appendChild(div);
        let notesClone = notes.cloneNode(true);
        container.appendChild(notesClone);
        date_span.innerHTML = date;
        textArea.value='';
    })
}

function removeNote(event) {
    // event.target.parentNode.parentNode.parentNode.style.display = 'none';
    event.target.parentNode.parentNode.parentNode.remove();
    console.log(event.currentTarget);
}

addNote();
