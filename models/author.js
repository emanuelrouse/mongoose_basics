import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define Schema
const authorSchema = new Schema({
    // _id is common syntax for creating a primay key in mongoose and MongoDb
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    biography: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    profilePicture: Buffer,
    created: {
        type: Date,
        default: Date.now
    }
});

// Create a Model
export const Author = mongoose.model('Author', authorSchema);