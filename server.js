import express from 'express';
import db from './config/db.js';
import UserRouter from "./Routes/UserRouter.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});

app.get('/', (req, res) => {
    res.send('Successful response.');
});``

app.use(UserRouter)

db.sequelize.sync().then(() => {
    console.log('Database tables synced');
    db.User.create({
        "id": "3e8d2a8f-821a-4ba5-b882-664a347cd322",
        "username": "juanita",
        "email": "juan@gmail.com",
        "password": "$2b$10$Nh2j8BsN.9GzTIgrHUp/XuaJYVJPgdgt9hLVjBp3pTzz4yRLuMsP2",
        "age": 62,
    })
    app.listen(3000, () => console.log('App is listening on port 3000.'));
})
