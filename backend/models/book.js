import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const bookSchema = new Schema({
    bookName: String,
    description: String,
    year: Number,
    price: Number,
    picture: String,
    pages: Number
});

export default mongoose.model('Book', bookSchema);
