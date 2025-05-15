document.addEventListener("DOMContentLoaded", () => {
    // Array of trending books
    const trendingBooks = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "109", image: "image/the great gatsby.png" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", price: "250", image: "image/to kill a mocking bird.png" },
        { title: "1984", author: "George Orwell", price: "99", image: "image/1984.jpg" },
        { title: "Moby Dick", author: "Herman Melville", price: "145", image: "image/moby dick.jpg" },
        { title: "Pride and Prejudice", author: "Jane Austen", price: "175", image: "image/pride and prejudice.jpg" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", price: "199", image: "image/the cater in the rye.jpg" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", price: "120", image: "image/the hobbit.jpg" },
        { title: "The Alchemist", author: "Paulo Coelho", price: "399", image: "image/the alchemist.jpg" },
        { title: "The Book Thief", author: "Markus Zusak", price: "425", image: "image/the book theif.jpg" },
        { title: "Life of Pi", author: "Yann Martel", price: "195", image: "image/life of pi.jpg" },
    ];
    
    const popularAuthors = [
        { name: "J.K. Rowling", image: "image/R K Rowlin.jpg" },
        { name: "George R.R. Martin", image: "image/RR martin.webp" },
        { name: "Agatha Christie", image: "image/agatha christie.jpg" },
        { name: "Stephen King", image: "image/christen king.jpg" },
        { name: "Jane Austen", image: "image/jane austein.webp" },
        { name: "Robin Sharma", image: "image/robin sharma.jpg" },
        { name: "Shiv Kera", image: "image/shiv kera.jpg" },
        { name: "Danielle Steel", image: "image/Danielle Steel.jpg" },
        { name: "William Shakespeare", image: "image/William Shakespeare.jpg" },
        { name: "Robert Kiyosaki", image: "image/robert kiyosaki.jpg" },
    ];

    const trendingBooksContainer = document.getElementById("trending-books");
    const popularAuthorsContainer = document.getElementById("popular-authors");

    // Function to generate book cards
    function renderTrendingBooks() {
        trendingBooks.forEach((book) => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("trending-books");
            bookElement.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="visit" onclick="visit()">Visit <img src="image/right.png"></button>
                </div>
            `;
            trendingBooksContainer.appendChild(bookElement);
        });
    }

    function renderPopularAuthors() {
        popularAuthors.forEach((author) => {
            const authorElement = document.createElement("div");
            authorElement.classList.add("author-card");
            authorElement.innerHTML = `
                <img src="${author.image}" width="150px" height="150px" alt="${author.name}" />
                <h5>${author.name}</h5>
            `;
            popularAuthorsContainer.appendChild(authorElement);
        });
    }

    renderTrendingBooks();
    renderPopularAuthors();
    totalBooks();
});


function toggleMenu() {
    document.querySelector(".nav-bar-container").classList.toggle("active");
}

function openPopup(){
    let popup = document.getElementById("popup");
    popup.style.display = "flex";
}
function closePopup(){
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}
function totalBooks(){
    let numbers = document.getElementById("num-of-books");
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 
    numbers.innerHTML=cart.length;
}
function visit(){
    window.location.href = 'Online_ordering.html';
}