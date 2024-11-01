import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const newspaperSchema = new Schema({
    newspaperName: String,
    description: String,
    year: Number,
    picture: String,
    publisher: String,
}, {
    timestamps: true
});

export default mongoose.model('Newspaper', newspaperSchema);
