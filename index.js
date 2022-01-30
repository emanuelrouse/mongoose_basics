import Mongoose from "mongoose";

import { Author } from './models/author.js';
import { Book } from './models/book.js';

Mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;

    console.log('Successfully connected');

    const jamieAuthor = new Author({
        _id: new Mongoose.Types.ObjectId(),
        name: {
            firstName: 'Jamie',
            lastName: 'Munro'
        },
        biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js',
        twitter: 'https://twitter.com/endyourif',
        facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
    });

    jamieAuthor.save(function (err) {
        if (err) throw err;

        console.log('Author successfully saved.');

        const mvcBook = new Book({
            _id: new Mongoose.Types.ObjectId(),
            title: 'ASP.Net MVC 5 with Bootstrap and Knockout.js',
            author: jamieAuthor._id,
            ratings: [{
                summary: 'Great read'
            }]
        });

        mvcBook.save(function (err) {
            if (err) throw err;

            console.log('Book successfully Saved')
        })

        const knockoutBook = new Book({
            _id: new Mongoose.Types.ObjectId(),
            title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
            author: jamieAuthor._id
        });

        knockoutBook.save(function (err) {
            if (err) throw err;

            console.log('Book succesfully saved');
        });
    });
});

