import { encryptData, decryptData } from "../utils/encryption.js";


export const encryptPassword = (req, res, next) => {
    if (req.body.password) {
        console.log(req.body.password)
        req.body.password = encryptData(req.body.password)
        next();
    };

}
