import LocalStrategy from 'passport-local';
import passport from 'passport';
import {userController} from '../controllers/userController';


// const login = new LocalStrategy(
//     async (email, password, done) => {
//         const user = await prisma.user.findUnique({
//             where: {
//                 email: email
//             }
//         });
//         console.log(user)
//         if (!user) {
//             return done(null, false, { message: "User not found" });
//         }
//         if (user.password !== password) {
//             return done(null, false, { message: "Password incorrect" });
//         }
//         return done(null, user);
        
//     },
// )


