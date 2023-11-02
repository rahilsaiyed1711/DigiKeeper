const addbtn = document.getElementById("add")

addbtn.addEventListener('click',()=> addNewNote('hello'))

function addNewNote(text=''){
const note = document.createElement('div')
note.classList.add('note')
note.innerHTML=`
    <div class="tools">
        <button class="edit"><i class="fa fa-edit"></i></button>
        <button class="delete"><i class="fa fa-trash"></i></button>
    </div>

    <div class=" main ${text ? "" : "hidden"}"></div>
    <textarea placeholder="Note down it's important..." class="${text ? "hidden" : ""}"></textarea>
`

const editBtn= note.querySelector('.edit')
const deleteBtn= note.querySelector('.delete')
const main= note.querySelector('.main')
const textArea= note.querySelector('.textarea')

//textArea.value=text
//main.innerHTML=marked(text)

deleteBtn.addEventListener('click',()=>{
    note.remove()
})

editBtn.addEventListener('click',()=>{
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
})

document.body.appendChild(note)
}