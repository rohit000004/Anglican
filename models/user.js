import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        },
        phoneNumber: {
            type: String,
            trim: true,
            required: true,
        },
        houseNumber: {
            type: String,
            trim: true,
            required: true,
        },
        postalCode: {
            type: String,
            trim: true,
            required: true,
        }
    },
    {
        timestamps: true
    }
);


export default mongoose.models.User || mongoose.model('User', userSchema);