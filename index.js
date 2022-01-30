import Mongoose from "mongoose";

import { Author } from './models/author.js';
import { Book } from './models/book.js';

Mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;

    console.log('Successfully connected');

    // Finding and Updating
    Book.find({
        title: /mvc/i
    })
        .sort('-created')
        .limit(5)
        .exec(function (err, books) {
            if (err) throw err;

            console.log(books);
        });

    Author.findById('61f6c1ccdcdddb7727992659', function (err, author) {
        if (err) throw err;

        author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';

        author.save(function (err) {
            if (err) throw err;

            console.log('Author updated succesfully');
        });
    });

    Author.findByIdAndUpdate('61f6c1ccdcdddb7727992659', function (err, author) {
        if (err) throw err;

        console.log(author);
    })
    // const jamieAuthor = new Author({
    //     _id: new Mongoose.Types.ObjectId(),
    //     name: {
    //         firstName: 'Jamie',
    //         lastName: 'Munro'
    //     },
    //     biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js',
    //     twitter: 'https://twitter.com/endyourif',
    //     facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
    // });

    // jamieAuthor.save(function (err) {
    //     if (err) throw err;

    //     console.log('Author successfully saved.');

    //     const mvcBook = new Book({
    //         _id: new Mongoose.Types.ObjectId(),
    //         title: 'ASP.Net MVC 5 with Bootstrap and Knockout.js',
    //         author: jamieAuthor._id,
    //         ratings: [{
    //             summary: 'Great read'
    //         }]
    //     });

    //     mvcBook.save(function (err) {
    //         if (err) throw err;

    //         console.log('Book successfully Saved')
    //     })

    //     const knockoutBook = new Book({
    //         _id: new Mongoose.Types.ObjectId(),
    //         title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
    //         author: jamieAuthor._id
    //     });

    //     knockoutBook.save(function (err) {
    //         if (err) throw err;

    //         console.log('Book succesfully saved');
    //     });
    // });
});

