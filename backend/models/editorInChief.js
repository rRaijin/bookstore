import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const editorInChiefSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    picture: String,
    bio: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model('EditorInChief', editorInChiefSchema);
