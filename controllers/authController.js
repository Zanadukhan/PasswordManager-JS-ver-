import passport from 'passport';
import { PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();


let authController = {
    authUser: async (email, password, done) => {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return done(err);
            }
            if (!result) {
                return done(null, false, { message: "Password incorrect" });
            }
            return done(null, user);
        });
        
    },

    loginSubmit: passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
    }),
    checkAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) { return next() }
        res.redirect("/login")
    },

    logout: (req, res) => {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
        });
        res.redirect('/login');
    }
}

export {authController}