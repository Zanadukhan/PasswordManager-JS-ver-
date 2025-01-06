import { PrismaClient, Prisma } from '@prisma/client'
import PasswordGenerator from "../utils/password-generator.js";

const prisma = new PrismaClient()



let userinterface_controller = {
    list: async (req, res) => {
        const entries = await prisma.loginItem.findMany({
            where: {
                userID: req.user.id
            }
        }
        );
        res.render('dashboard', { entries: entries})
    },
    create: (req, res) => {
        res.render('create')
    },

    registerPage: (req, res) => {
        res.render('register', { layout: 'layouts/login-layout' })
    },

    loginPage: (req, res) => {
        res.render('login', { layout: 'layouts/login-layout' })
    }

}


export {userinterface_controller}