const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <img src="./image/pin.png" alt="pin">
   <div class="tools">
        <button class="edit"><i class="fa-solid fa-pencil"></i></button>
        <button class="delete"><i class="fa-solid fa-eraser"></i></button>
      </div>

      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea class=" ${text ? 'hidden' : ''}"></textarea>
  `

  const deleteBtn = note.querySelector('.delete')

  deleteBtn.addEventListener('click', () => {
    note.remove()

    updateLS()
  })

  const editBtn = note.querySelector('.edit')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)

    updateLS()
  })

  document.body.appendChild(note)
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')

  const notes = []
  notesText.forEach((note) => notes.push(note.value))
  localStorage.setItem('notes', JSON.stringify(notes))
}

const notes = JSON.parse(localStorage.getItem('notes'))
// console.log(notes)

if (notes) {
  notes.forEach((note) => addNewNote(note))
}
