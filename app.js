export const renderNotes = (arrayofnotes) => {
    let newNote = arrayofnotes.map((element) => {
        return (
            ` <div class="card">
            <span class="Dtitle">${element.title}</span>
            <span class="material-symbols-outlined delete-icon" data-type="del"
            data-id=${element.id}>
                delete
                </span>
                <div class="note-div">
                    <span class="Dnote">${element.note}</span>
                </div>
                <div class="arch-pin">
                <span class="material-symbols-outlined arch-icon" data-type="arch"
                data-id=${element.id}>
                archive
                </span>
                </div>
                
        </div>`
        )
    
    });
    newNote = newNote.join("");
    return newNote;
}

