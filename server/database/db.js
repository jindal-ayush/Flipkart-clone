import mongoose from 'mongoose';

export const Connection = async (USERNAME,PASSWORD) => {
    const username = 'ayush_jindal';
    const password = encodeURIComponent('Ayush@1234'); 
    const dbName = 'ecommerce-web';
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.hifsk3a.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ecommerce-web`;
   
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected Successfully");
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;



























//mongodb+srv://ayush_jindal:<password>@ecommerce-web.hifsk3a.mongodb.net/
// const Connection = async (username, password) => {
//     // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
//     // const URL = `mongodb://${username}:${password}@ecommerce-shard-00-00.fdvft.mongodb.net:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=admin&retryWrites=true&w=majority`;
//     const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-01.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-02.wnaj9.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-sjmqa0-shard-0&authSource=admin&retryWrites=true&w=majority`
//     try {
//         await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
//         console.log('Database Connected Succesfully');
//     } catch(error) {
//         console.log('Error: ', error.message);
//     }

// };

// export default Connection;