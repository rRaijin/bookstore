import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const newspaperSchema = new Schema({
    newspaperName: String,
    description: String,
    year: Number,
    picture: String,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher'
    },
    editorInChief: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EditorInChief'
    },
}, {
    timestamps: true
});

export default mongoose.model('Newspaper', newspaperSchema);
