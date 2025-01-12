import { PrismaClient, Prisma } from '@prisma/client'
import passport from 'passport'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()


let userController = {
    register: async (req, res) => {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(req.body.user_password, salt)

        await prisma.user.create({
            data: {
                email: req.body.user_email,
                password: hash,
                salt: salt
            }
        });
        res.redirect('/login');
    },

    
}

export { userController }