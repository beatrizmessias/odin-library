const myLibrary = [];

function Book(title, author, cover) {
    this.title = title;
    this.author = author;
    this.cover = cover;
}

function openModal() {
    const newBook = document.getElementById("new-book");
    const modal = document.getElementById("modal");
    const closeBook = document.querySelector(".close");

    newBook.addEventListener("click", () => {
        modal.style.display = "flex";
    })

    closeBook.addEventListener("click", () => {
        modal.style.display = "none";
    })
}

function showBooks() {
    const books = document.getElementById("books");
    books.innerHTML = '';

    myLibrary.forEach(book => {
        const div = document.createElement("div");
        div.classList.add('book');

        div.innerHTML = `
            <div class="cover"></div>
            <div class="info">
                <div class="metadata">
                    <h4>Title</h4>
                    <span>Author</span>
                </div>
                <button id="delete">&times</button>
            </div>
                `;
        books.appendChild(div);
    })
}

function addNewBook() {
    document.getElementById("bookForm").addEventListener("submit", function(e) {
        e.preventDefault();
    })

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const cover = document.getElementById("cover").value.trim();

    if (title && author) {
        myLibrary.push({title, author});
        console.log(myLibrary);

        showBooks();

        this.reset;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    openModal();
})