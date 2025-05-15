// Array of trending books
const fictionBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "1099", image: "image/the great gatsby.png" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: "1250", image: "image/to kill a mocking bird.png" },
    { title: "1984", author: "George Orwell", price: "999", image: "image/1984.jpg" },
    { title: "Moby Dick", author: "Herman Melville", price: "1425", image: "image/moby dick.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", price: "115", image: "image/pride and prejudice.jpg" },
    { title: "The Night Circus", author: "Erin Morgenstern", price: "199", image: "image/night circus.jpg" },
    { title: "The Kite Runner", author: "Khaled Hosseini", price: "1250", image: "image/kite runner.jpg" },
    { title: "Brave New World", author: "Aldous Huxley", price: "99", image: "image/brave new world.jpg" },
    { title: "The Road", author: "Cormac McCarthy", price: "425", image: "image/the road.jpg" },
    { title: "Little Women", author: "Louisa May Alcott", price: "175", image: "image/little women.jpg" },
];    

const scienceFictionBooks = [
    { title: "Dune", author: "Frank Herbert", price: "999", image: "image/dune.jpg" },
    { title: "Neuromancer", author: "William Gibson", price: "250", image: "image/neuromancer.jpg" },
    { title: "1984", author: "George Orwell", price: "430", image: "image/1984.jpg" },
    { title: "Foundation", author: "Isaac Asimov", price: "425", image: "image/foundation.jpg" },
    { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", price: "125", image: "image/the  left hand of darkness.jpg" },
    { title: "Snow Crash", author: "Neal Stephenson", price: "149", image: "image/snow crash.jpg" },
    { title: "Ender's Game", author: "Orson Scott Card", price: "220", image: "image/enders game.jpg" },
    { title: "Brave New World", author: "Aldous Huxley", price: "530", image: "image/brave new world-1.jpg" },
    { title: "Hyperion", author: "Dan Simmons", price: "344", image: "image/hyperion.jpg" },
    { title: "The Time Machine", author: "H.G. Wells", price: "618", image: "image/the time machine.jpg" },
];    

const adventureBooks = [
    { title: "The Call of the Wild", author: "Jack London", price: "799", image: "image/OIP.jpg" },
    { title: "Treasure Island", author: "Robert Louis Stevenson", price: "128", image: "image/OIP.jpg" },
    { title: "Journey to the Center of the Earth", author: "Jules Verne", price: "910", image: "image/OIP.jpg" },
    { title: "Moby Dick", author: "Herman Melville", price: "369", image: "image/OIP.jpg" },
    { title: "King Solomon's Mines", author: "H. Rider Haggard", price: "458", image: "image/OIP.jpg" },
    { title: "Robinson Crusoe", author: "Daniel Defoe", price: "299", image: "image/OIP.jpg" },
    { title: "The Lost World", author: "Arthur Conan Doyle", price: "550", image: "image/OIP.jpg" },
    { title: "Around the World in 80 Days", author: "Jules Verne", price: "870", image: "image/OIP.jpg" },
    { title: "The Sea-Wolf", author: "Jack London", price: "375", image: "image/OIP.jpg" },
    { title: "The Man Who Would Be King", author: "Rudyard Kipling", price: "367", image: "image/OIP.jpg" },
];    

const biographyBooks = [
    { title: "The Diary of a Young Girl", author: "Anne Frank", price: "567", image: "image/OIP.jpg" },
    { title: "Long Walk to Freedom", author: "Nelson Mandela", price: "213", image: "image/OIP.jpg" },
    { title: "Steve Jobs", author: "Walter Isaacson", price: "256", image: "image/OIP.jpg" },
    { title: "Alexander Hamilton", author: "Ron Chernow", price: "445", image: "image/OIP.jpg" },
    { title: "Becoming", author: "Michelle Obama", price: "235", image: "image/OIP.jpg" },
    { title: "Educated", author: "Tara Westover", price: "436", image: "image/OIP.jpg" },
    { title: "Elon Musk", author: "Ashlee Vance", price: "655", image: "image/OIP.jpg" },
    { title: "Einstein: His Life and Universe", author: "Walter Isaacson", price: "2369", image: "image/OIP.jpg" },
    { title: "The Wright Brothers", author: "David McCullough", price: "562", image: "image/OIP.jpg" },
    { title: "Open", author: "Andre Agassi", price: "432", image: "image/OIP.jpg" },
];    

const ThrillerBooks = [
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", price: "425", image: "image/OIP.jpg" },
    { title: "Gone Girl", author: "Gillian Flynn", price: "457", image: "image/OIP.jpg" },
    { title: "The Da Vinci Code", author: "Dan Brown", price: "568", image: "image/OIP.jpg" },
    { title: "The Silence of the Lambs", author: "Thomas Harris", price: "124", image: "image/OIP.jpg" },
    { title: "Before I Go to Sleep", author: "S.J. Watson", price: "541", image: "image/OIP.jpg" },
    { title: "Shutter Island", author: "Dennis Lehane", price: "342", image: "image/OIP.jpg" },
    { title: "Behind Closed Doors", author: "B.A. Paris", price: "346", image: "image/OIP.jpg" },
    { title: "The Reversal", author: "Michael Connelly", price: "462", image: "image/OIP.jpg" },
    { title: "The Couple Next Door", author: "Shari Lapena", price: "547", image: "image/OIP.jpg" },
    { title: "I Am Watching You", author: "Teresa Driscoll", price: "657", image: "image/OIP.jpg" },
];    

const loveBooks = [
    { title: "Pride and Prejudice", author: "Jane Austen", price: "262", image: "image/OIP.jpg" },
    { title: "The Fault in Our Stars", author: "John Green", price: "562", image: "image/OIP.jpg" },
    { title: "Romeo and Juliet", author: "William Shakespeare", price: "354", image: "image/OIP.jpg" },
    { title: "Me Before You", author: "Jojo Moyes", price: "132", image: "image/OIP.jpg" },
    { title: "Outlander", author: "Diana Gabaldon", price: "135", image: "image/OIP.jpg" },
    { title: "The Notebook", author: "Nicholas Sparks", price: "145", image: "image/OIP.jpg" },
    { title: "Fifty Shades of Grey", author: "E.L. James", price: "345", image: "image/OIP.jpg" },
    { title: "The Rosie Project", author: "Graeme Simsion", price: "342", image: "image/OIP.jpg" },
    { title: "A Walk to Remember", author: "Nicholas Sparks", price: "457", image: "image/OIP.jpg" },
    { title: "It Ends with Us", author: "Colleen Hoover", price: "326", image: "image/OIP.jpg" },
];

const historyBooks = [
    { title: "The Diary of a Young Girl", author: "Anne Frank", price: "123", image: "image/OIP.jpg" },
    { title: "A Brief History of Humankind", author: "Yuval Noah Harari", price: "155", image: "image/OIP.jpg" },
    { title: "The Guns of August", author: "Barbara Tuchman", price: "913", image: "image/OIP.jpg" },
    { title: "The Wright Brothers", author: "David McCullough", price: "145", image: "image/OIP.jpg" },
    { title: "Team of Rivals", author: "Doris Kearns Goodwin", price: "623", image: "image/OIP.jpg" },
    { title: "Alexander Hamilton", author: "Ron Chernow", price: "134", image: "image/OIP.jpg" },
    { title: "The Immortal Life of Henrietta", author: "Rebecca Skloot", price: "642", image: "image/OIP.jpg" },
    { title: "A World War II Story of Survival", author: "Laura Hillenbrand", price: "924", image: "image/OIP.jpg" },
    { title: "The Liberation Trilogy", author: "Rick Atkinson", price: "643", image: "image/OIP.jpg" },
    { title: "The Warmth of Other Suns", author: "Isabel Wilkerson", price: "733", image: "image/OIP.jpg" },
];    

const adultBooks = [
    { title: "The Goldfinch", author: "Donna Tartt", price: "356", image: "image/OIP.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: "500", image: "image/OIP.jpg" },
    { title: "The Road", author: "Cormac McCarthy", price: "327", image: "image/OIP.jpg" },
    { title: "Beloved", author: "Toni Morrison", price: "683", image: "image/OIP.jpg" },
    { title: "The Secret History", author: "Donna Tartt", price: "245", image: "image/OIP.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "626", image: "image/OIP.jpg" },
    { title: "The Girl on the Train", author: "Paula Hawkins", price: "335", image: "image/OIP.jpg" },
    { title: "Big Little Lies", author: "Liane Moriarty", price: "738", image: "image/OIP.jpg" },
    { title: "The Kite Runner", author: "Khaled Hosseini", price: "902", image: "image/OIP.jpg" },
    { title: "The Night Circus", author: "Erin Morgenstern", price: "462", image: "image/OIP.jpg" },
];


document.addEventListener("DOMContentLoaded", () => {
        
    const fictionBooksContainer = document.getElementById("fiction-books");
    const scienceFictionBooksContainer = document.getElementById("science-fiction-books");
    const advantureBooksContainer = document.getElementById("advanture-books");
    const biographyBooksContainer = document.getElementById("biography-books");
    const ThillerBooksContainer = document.getElementById("thriller-books");
    const loveBooksContainer = document.getElementById("love-books");
    const historyBooksContainer = document.getElementById("history-books");
    const adultBooksContainer = document.getElementById("adult-books");

    let searchtext = document.getElementById('search');
    

    // Function to generate book cards
    function renderBooks(Books,Container) { // takes two parameter (book array, book container)
        Books.forEach((book) => { // loop through each book
            const bookElement = document.createElement("div");
            bookElement.classList.add("trending-books");
            bookElement.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            Container.appendChild(bookElement);
        });
    }
    
    renderBooks(fictionBooks,fictionBooksContainer);
    renderBooks(scienceFictionBooks,scienceFictionBooksContainer);
    renderBooks(adventureBooks,advantureBooksContainer);
    renderBooks(biographyBooks, biographyBooksContainer);
    renderBooks(ThrillerBooks,ThillerBooksContainer);
    renderBooks(loveBooks,loveBooksContainer);
    renderBooks(historyBooks, historyBooksContainer);
    renderBooks(adultBooks,adultBooksContainer);
    display_cart();
    
});
function openPopup(){
    let popup = document.getElementById("popup");
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.display = "none";
    }, 1500);

}
function toggleMenu() {
    document.querySelector(".nav-bar-container").classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", () => {
   
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const bookElement = event.target.closest(".trending-books");

            // Extract book details
            const book = {
                image: bookElement.querySelector('img').src,
                title: bookElement.querySelector("h5").textContent,
                author: bookElement.querySelector("p").textContent,
                price: bookElement.querySelector(".price").textContent,
            };
            
            // Get existing cart items from localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Add new book to the cart
            cart.push(book);

            // Save updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            openPopup();
            display_cart();  
        });
    }); 
   
});

function total(){
    let sum=0;
    const grand = document.getElementById("grand-total");
    let numbers = document.getElementById("num-of-books");
    
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 
    cart.forEach(item => {
        sum += parseInt(item.price);
    });
    numbers.innerHTML=cart.length;
    grand.innerHTML = sum; 
}
// console.log(item);
function display_cart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];  // Parse cart from localStorage (or default to empty array if null)
    if(cart.length !==0){
        let cartEmpty = document.getElementById("if-empty-cart");
        cartEmpty.style.display="none";
        let cartElement = document.getElementById("added-to-cart");
        cartElement.innerHTML = "";

        cart.forEach(item => {
            const ele = document.createElement('div');
            ele.classList.add('trending-books');
            ele.innerHTML = `
                <img src=${item.image} width="200px" height="150px" alt="${item.title}" />
                <h5>${item.title}</h5>
                <p>${item.author}</p>
                <p class="price">${item.price}</p>
                <div class="remove">
                    <button data-index="${cart.indexOf(item)} ">Delete</button>
                </div>
                `;
            cartElement.appendChild(ele);
            total();
        });

        const deleteButtons = cartElement.querySelectorAll('.remove button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');  // Get the index of the item to remove
                cart.splice(index, 1);  // Remove the item from the array
                localStorage.setItem('cart', JSON.stringify(cart));  // Update localStorage
                display_cart(); 
                total(); 
            });
        });   
    }
    else{
        let cart = document.getElementById("if-empty-cart");
        cart.style.display="block";
    }
}

const input = document.getElementById("search");
const disp = document.querySelector(".searched-books");
input.addEventListener('input',function (){
    const query = input.value.toLowerCase();
    disp.innerHTML='';
    if (query.trim()===''){
        return;
    }
    const filterFictionBooks = fictionBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    const filterScienceFictionBooks = scienceFictionBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    const filterAdvantureBooks = adventureBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    const filterBiographyBooks = biographyBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    const filterThrillerBooks = ThrillerBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    const filterLoveBooks = loveBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    const filterHistoryBooks = historyBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    const filterAdultBooks = adultBooks.filter(book =>(book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)));
    if (filterFictionBooks === ''){
        disp.innerHTML='<p>No books found</p>';
        return;
    }
    filterFictionBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });

      filterScienceFictionBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });

      filterAdvantureBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });

      filterBiographyBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });

      filterThrillerBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });

      filterLoveBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });

      filterHistoryBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });

      filterAdultBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "trending-books";
        bookDiv.innerHTML = `
                <img src="${book.image}" width="200px" height="150px" alt="${book.title}" />
                <h5>${book.title}</h5>
                <p>${book.author}</p>
                <p class="price">${book.price}</p>
                <div class="buts">
                    <button class="add-to-cart" onclick="openPopup()">Add to Cart</button>
                </div>
            `;
            disp.appendChild(bookDiv);
      });
})










