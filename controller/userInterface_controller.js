import { PrismaClient, Prisma } from '@prisma/client'
import PasswordGenerator from "../utils/password-generator.js";

const prisma = new PrismaClient()



let userinterface_controller = {
    list: async (req, res) => {
        const entries = await prisma.loginItem.findMany();
        res.render('index', { entries: entries})
    },
    create: (req, res) => {
        res.render('create')
    },

    registerPage: (req, res) => {
        res.render('register', { layout: 'login-layout' })
    }

}


export {userinterface_controller}