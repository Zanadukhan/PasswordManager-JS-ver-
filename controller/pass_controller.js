import PasswordGenerator from "../utils/password-generator.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const pass = new PasswordGenerator(10);

pass.generate();


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

    list: async (req, res) => {
        const entries = await prisma.loginItem.findMany();
        res.render('index', { entries: entries})
    }
};

export {passController}