import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MOngoDB connected successfully");
        })

        connection.on('connected', (err) => {
            console.log('MongoDB connection error' + err);
        })
    } catch (error) {
        console.log(error);
    }
}