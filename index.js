const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// 1. Select Title Element
const bookStoreTitle = document.getElementById('header');

// 2. Change element to match bookstore name
bookStoreTitle.textContent = bookStore.name;

// Step 3: Book Elements

// Loop through every book element in bookStore.books
for (const book of bookStore.books) {
  // 1. Create elements for each book
  const bookContainer = document.createElement('li'); // li element
  const bookTitle = document.createElement('h3');     // h3 element
  const bookAuthor = document.createElement('p');     // p element
  const bookImage = document.createElement('img');    // img element

  // 2. Change the textContent/src to match book object
  bookTitle.textContent = book.title;        // Set title
  bookAuthor.textContent = book.author;      // Set author
  bookImage.src = book.image;                // Set image url
  bookImage.alt = book.title;                // Good practice for images

  // 3. Append book elements to bookList
  bookContainer.append(bookTitle, bookAuthor, bookImage);
  
  // Then append bookContainer to bookList
  bookList.append(bookContainer);


};
