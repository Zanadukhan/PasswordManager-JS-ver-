import { PrismaClient, Prisma } from '@prisma/client'
import passport from 'passport'

const prisma = new PrismaClient()


let userController = {
    register: async (req, res) => {
        await prisma.user.create({
            data: {
                email: req.body.user_email,
                password: req.body.user_password
            }
        });
        res.redirect('/login');
    },

    
}

export { userController }