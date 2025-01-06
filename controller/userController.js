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

    authUser: async (email, password, done) => {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        console.log(user)
        if (!user) {
            return done(null, false, { message: "User not found" });
        }
        if (user.password !== password) {
            return done(null, false, { message: "Password incorrect" });
        }
        return done(null, user);
        
    },

     loginSubmit: passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
    })
}

export { userController }