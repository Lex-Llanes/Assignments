const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express();
const port = 3000;


let books = [

{ isbn: '0786926759',
title: 'Odyssey: Odyssey cycle - Book 1',
author: 'Vance Moore',
publish_date: '2001-09-01',
publisher: 'Wizards of The Coast',
numOfPages: '320' },

{ isbn: '0786926961',
title: 'Tormet: Odyssey cycle - Book 2',
author: 'Scott McGough',
publish_date: '2002-01-02',
publisher: 'Wizards of The Coast',
numOfPages: '320' },

{ isbn: ' 0786927437',
title: 'Judgement: Odyssey cycle - Book 2',
author: 'Will McDermott',
publish_date: '2002-05-01',
publisher: 'Wizards of The Coast',
numOfPages: '320' },

{ isbn: '4',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' },

{ isbn: '5',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' }
];


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));



// app.post('/book', (req, res) => { 
//     res.sendFile( __dirname + "/" + "new-book.html" );
// });

    app.post('/book', (req, res) => {
        //res.sendFile( __dirname + "/" + "new-book.html" );
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