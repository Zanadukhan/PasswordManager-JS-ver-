
import { PrismaClient, Prisma } from '@prisma/client'
import PasswordGenerator from "../utils/password-generator.js";

const prisma = new PrismaClient()
let newPass = new PasswordGenerator(10)





let passController = {
    createEntry: async (req, res) => {
        if (req.body.entry_name === '') {
            req.body.entry_name = null
        }
        await prisma.loginItem.create({
            data: {
                name: req.body.entry_name,
                service: req.body.service_name,
                password: req.body.password
            },
        });
        res.redirect('/');
    },

};

export {passController}