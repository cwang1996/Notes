const notes = document.querySelector('.notes');
const container = document.querySelector('.container');
const add_btn = document.querySelector('.add');
const delete_btn = document.querySelector('.delete');
const date_span = document.querySelector('.date');
const textArea = document.querySelector('.note');
const save_btn = document.querySelector('.save');

function addNote() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    add_btn.addEventListener('click', function(){
        let notesClone = notes.cloneNode(true);
        container.appendChild(notesClone);
        date_span.innerHTML = date;
        textArea.value='';
    })
}

function removeNote(event) {
    event.target.parentNode.parentNode.parentNode.remove();
    console.log(event.currentTarget);
}

function saveNoteDate(){
    save_btn.addEventListener('click', () => {
        if(typeof(Storage) !== 'undefined') {
            let date_input = date_span.value;
            localStorage.setItem('date', date_input);
            console.log('Title Saved');
        } else {
            alert('Your browser does not support web storage');
        }
    })
}

function saveNoteMessage(){
    save_btn.addEventListener('click', () => {
        if(typeof(Storage) !== 'undefined'){
            let messageInput = textArea.value;
            console.log(messageInput);
            localStorage.setItem('note', messageInput);
            console.log('Message Saved');
        } else {
            alert('Your browser does not support web storage');
        }
    })
}

date_span.value = localStorage.getItem('date');
textArea.value = localStorage.getItem('note');

addNote();
saveNoteDate();
saveNoteMessage();
