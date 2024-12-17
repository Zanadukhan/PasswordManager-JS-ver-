import PasswordGenerator from "../utils/password-generator.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const pass = new PasswordGenerator(10);

pass.generate();


let passController = {
    createEntry: async (req, res) => {
        await prisma.loginItem.create({
            data: {
                name: req.body.entry_name,
                service: req.body.service_name,
                password: req.body.password
            },
        });
        res.redirect('/');
    }
};

export {passController}