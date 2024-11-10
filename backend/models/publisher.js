import mongoose from "mongoose";

const Schema = mongoose.Schema;
const publisherSchema = new Schema({
    publisherName: String,
    description: String,
    year: Number,
    picture: String,
    editorInChief: String,
}, {
    timestamps: true
});

export default mongoose.model('Publisher', publisherSchema);
