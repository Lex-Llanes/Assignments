const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express();
const port = 3000;


let books = [

{ isbn: '9781593275846',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' },

{ isbn: '9781593275846',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' },

{ isbn: '9781593275846',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' },

{ isbn: '9781593275846',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' },

{ isbn: '9781593275846',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' }
];


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



    app.post('/book', (req, res) => {
        //Encode book here
        const book = req.body;

        //Console the books for debugging
        console.log(book);
        books.push(book);

        res.send(`Book ${book.title} is added to the database`);

        console.log(`Book List is ${books}`);
    });


    app.get('/books', (req, res) => {
        res.json(books);
    })


    app.get('/book/:isbn', (req, res) => {
        // Reading isbn from the URL
        const isbn = req.params.isbn;

        // Searching books for the isbn
        for (let book of books) {
            if (book.isbn === isbn) {
                res.json(book);
                return;
            }
        }

    
        // Sending 404 when not found something is a good practice
        res.status(404).send('Book not found');
    });


    app.delete('/book/:isbn', (req, res) => {
        // Reading isbn from the URL
        const isbn = req.params.isbn;
    
        // Remove item from the books array
        books = books.filter(i => {
            if (i.isbn !== isbn) {
                return true;
            }
            return false;
        });
    
        res.send('Book is deleted');
    });


    app.post('/book/:isbn', (req, res) => {
        // Reading isbn from the URL
        const isbn = req.params.isbn;
        const newBook = req.body;
    
        // Remove item from the books array
        for (let i = 0; i < books.length; i++) {
            let book = books[i]
            if (book.isbn === isbn) {
                books[i] = newBook;
            }
        }
    
        res.send('Book is edited');
    });

app.listen(port, () => console.log(`Hello world app listening on port ${port}`));