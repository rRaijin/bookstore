import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const genreSchema = new Schema({
    title: String,
    description: String,
    picture: String,
    booksCnt: Number
});

export default mongoose.model('Genre', genreSchema);
