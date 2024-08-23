import db from '../config/db.js';
import bcrypt from 'bcrypt';

export default {
    authenticate: async (req, res, next) => {
        const { username, password } = req.query;

        try {
            const user = await db.User.findOne(
                { where: { username: username } }
            );

            bcrypt.compare(password, user.password, function (err, same) {
                if (err) {
                    res.sendStatus(500);
                }
                if (!same) {
                    res.sendStatus(401);
                }

                next();
            });
        } catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
}