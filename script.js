import { renderNotes } from "./app.js";
//selecting DOM
let title = document.querySelector(".title");
let note = document.querySelector(".note");
let addNoteBtn = document.querySelector(".icon-add");
let todoContainer = document.querySelector(".todo-container");

//array of notes object
let arrayofnotes = JSON.parse(localStorage.getItem("notes")) || []



//adding the note
addNoteBtn.addEventListener("click", () =>{
    if(note.value.trim().length > 0 || title.value.trim().length > 0){
        arrayofnotes =  [...arrayofnotes, {id: Date.now(), title: title.value
        ,note: note.value, isarchive: false 
    }]
    }
    console.log(arrayofnotes);
    localStorage.setItem("notes", JSON.stringify(arrayofnotes));
    todoContainer.innerHTML = 
    renderNotes(arrayofnotes.filter(element => element.isarchive == false))


    title.value = note.value = "";
    
})

todoContainer.addEventListener(("click"), (e) =>{
    // console.log(e.target.dataset.id, e.target.dataset.type);
    let type = e.target.dataset.type;
    let noteId = e.target.dataset.id;
    if(type == "del"){
  arrayofnotes = 
  arrayofnotes.filter(element => element.id.toString() !== noteId)
  todoContainer.innerHTML = renderNotes(arrayofnotes.filter(element => element.isarchive == false)); 
  localStorage.setItem("notes", JSON.stringify(arrayofnotes));
}
if(type == "arch"){
    arrayofnotes = arrayofnotes.map((element) => 
    { return element.id.toString()===noteId ? {...element, isarchive:
         !element.isarchive} : element })
        console.log(arrayofnotes);
    todoContainer.innerHTML = 
    renderNotes(arrayofnotes.filter(element => element.isarchive == false))    
    localStorage.setItem("notes", JSON.stringify(arrayofnotes));

}
})

// todoContainer.innerHTML = renderNotes(arrayofnotes);
todoContainer.innerHTML = 
renderNotes(arrayofnotes.filter(element => element.isarchive == false))










//creating card 
// function createCard(todo){
//   const card = document.createElement("div");
//   card.classList = "card";
//   todoContainer.appendChild(card);

//   const displayTitle = document.createElement("span");
//   displayTitle.classList ="Dtitle";
//   displayTitle.textContent = `${todo.title}`;
//   card.appendChild(displayTitle);

//   const deleteIcon = document.createElement("span");
//   deleteIcon.classList = "delete-icon";
//   deleteIcon.innerHTML = `<span class="material-symbols-outlined">
//   delete
//   </span>`;

//   deleteIcon.dataset.id = `${todo.id}`;
//   card.appendChild(deleteIcon);

//   const noteDiv = document.createElement("div");
//   noteDiv.classList = "note-div"
//   card.appendChild(noteDiv);

//   const displayNote = document.createElement("span");
//   displayNote.classList ="Dnote";
//   displayNote.textContent= `${todo.note}`;
//   noteDiv.appendChild(displayNote);

// }
