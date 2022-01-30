import mongoose from "mongoose";
const { Schema } = mongoose;

// Define a Schema
const bookSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    isbn: String,
    thumbnail: Buffer,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    ratings: [
        {
            summary: String,
            detail: String,
            numberOfStars: Number,
            created: {
                type: Date,
                default: Date.now
            }
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

// Create the Model 
// const Book = mongoose.model('Book', bookSchema);

// // Export the model 
// module.exports = Book;

export const Book = mongoose.model('Book', bookSchema);