import  mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.5JbXzPVIhu6I6qsHF8JyUAHaHa%26pid%3DApi&sp=1719120208Tae0ab1b100ff5e75dff3001622fc3160da21b9317af5f5f52eb6b029c5334ea7",
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

