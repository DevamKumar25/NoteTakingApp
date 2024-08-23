let addbtn = document.querySelector("#addbtn");
let main = document.querySelector("#main");
addbtn.addEventListener(
    "click",function(){
        addNote();
        } 
);



const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length==0){
        localStorage.removeItem("notes");
    }
    else{
        // to save the data in local storage
    localStorage.setItem("notes",JSON.stringify(data));
    }

}

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
    <b><h6>Save</h6></b>
    <i class = "save fas fa-save"></i>
    <b><h6>Delete</h6></b>
    <i class = "trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `
    note.querySelector(".trash").addEventListener(
        "click", function(){
            note.remove();
            saveNote();
        }
    )

    note.querySelector(".save").addEventListener(
        "click", function(){
            saveNote();
        }
    )



    main.appendChild(note);
    saveNote();

}

// self calling function used , when user refresh the page the one note is 
// already there to type anythings
// JSON.parse  = used bcoz convert it into string and run a loop 

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));  // local storage notes
        if(lsNotes == null){
            addNote();
        }
        else{
            lsNotes.forEach(
                (lsNotes) => {
                    addNote(lsNotes);
                }
            )
        }
    //     if(lsNotes.length == 0){
    //         localStorage.removeItem("notes");
    //     }
    //     else{
    //         addNote();
    //     }
    }
)()





