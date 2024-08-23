import db from "../config/db.js";
const saltRounds = 10;
import bcrypt from "bcrypt";

const userController = {
    create: async (req, res) => {
            const { username, password, email, age } = req.body;

            if (!username || !password || !email || !age) {
                res.sendStatus(400);
                return;
            }
            try {
                bcrypt.hash(password,saltRounds, async function(err, hash) {
                    try {
                        const user = await db.User.create({
                            username: username,
                            password: hash,
                            email: email,
                            age: age,
                        });

                        res.status(201).send({ username: user.username });
                    } catch (e) {
                        console.log(e)
                        if (e.name === "SequelizeUniqueConstraintError" || e.name ==="SequelizeValidationError" ) {
                            res.sendStatus(400);
                        } else {
                            res.sendStatus(500);
                        }
                    }
                });
            } catch (e) {
                console.log(e)
                res.sendStatus(500);
            }
    },
    getAll: async (req, res) => {
        try {
            res.send(await db.User.findAll({}));
        } catch {
            res.sendStatus(500);
        }
    },
    getById: async (req, res) => {
        try {
            const user = await db.User.findOne(
                { where: { id: req.params.id} }
            );

            if (user) {
                res.send({ id: user.id, username: user.username, email: user.email, age: user.age });
            } else {
                res.sendStatus(404);
            }
        } catch {
            res.sendStatus(500);
        }
    },
    updateAge: async (req, res) => {
        try {
            const update = await db.User.update({
                age: req.body.age,
            },
                {
                where: {id: req.params.id}
            });
            if (update) {
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        } catch {
            res.sendStatus(500);
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await db.User.destroy(
                {
                    where: {id: req.params.id}
                });
            if (deleted) {
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        } catch {
            res.sendStatus(500);
        }
    },
};

export default userController;