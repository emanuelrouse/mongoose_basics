import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define a Mongoose Schema
const userSchema = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    created: Date
})

// Create a model using the userSchema
const User = mongoose.model('User', userSchema);