import mongoose from "mongoose";

const Schema = mongoose.Schema;
const publisherSchema = new Schema({
    userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    bio: String,
    year: Number,
    picture: String,
}, {
    timestamps: true
});

export default mongoose.model('Publisher', publisherSchema);
