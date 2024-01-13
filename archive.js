import { renderNotes } from "./app.js";

let archContainer = document.querySelector(".arch-container");

let arrayofnotes = JSON.parse(localStorage.getItem("notes"));

archContainer.innerHTML = renderNotes(arrayofnotes.filter(element => element.isarchive == true));

//
archContainer.addEventListener(("click"), (e) =>{
    // console.log(e.target.dataset.id, e.target.dataset.type);
    let type = e.target.dataset.type;
    let noteId = e.target.dataset.id;
    if(type == "del"){
  arrayofnotes = 
  arrayofnotes.filter(element => element.id.toString() !== noteId)
  archContainer.innerHTML = renderNotes(arrayofnotes.filter(element => element.isarchive == true)); 
  localStorage.setItem("notes", JSON.stringify(arrayofnotes));
}
if(type == "arch"){
    arrayofnotes = arrayofnotes.map((element) => 
    { return element.id.toString()===noteId ? {...element, isarchive:
         !element.isarchive} : element })
        console.log(arrayofnotes);
    archContainer.innerHTML = 
    renderNotes(arrayofnotes.filter(element => element.isarchive == true))    
    localStorage.setItem("notes", JSON.stringify(arrayofnotes));

}
})