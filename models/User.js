import { Schema, model } from "mongoose";
const useSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowecasetrue,
        index: { unique: true },
    },
    password: {
        type: String,
        requered: true
    }
})
export const User = model('user', useSchema);