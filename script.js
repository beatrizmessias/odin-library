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
    });

    closeBook.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

function showBooks() {
    const books = document.getElementById("books");
    books.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const div = document.createElement("div");
        div.id = 'book';

        div.innerHTML = `
            <div class="cover" style="background-image: url('${book.cover || ''}')"></div>
            <div class="info">
                <div class="metadata">
                    <h4>${book.title}</h4>
                    <span>${book.author}</span>
                </div>
                <button id="delete" data-index="${index}">&times;</button>
            </div>
        `;

        books.appendChild(div);
    });

    const deleteButtons = document.querySelectorAll("#delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            myLibrary.splice(index, 1);
            showBooks();
        });
    });
}

function addNewBook() {
  const bookForm = document.getElementById("bookForm");

  bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const coverInput = document.getElementById("cover");
    const file = coverInput.files[0];

    if (title && author) {
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const coverDataUrl = event.target.result;
          const newBook = new Book(title, author, coverDataUrl);
          myLibrary.push(newBook);

          showBooks();
          bookForm.reset();
          document.getElementById("modal").style.display = "none";
        };
        reader.readAsDataURL(file);
      } else {
        const newBook = new Book(title, author, "");
        myLibrary.push(newBook);

        showBooks();
        bookForm.reset();
        document.getElementById("modal").style.display = "none";
      }
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
    openModal();
    addNewBook();
});