import dotenv from 'dotenv'

dotenv.config()

const { SECRET_KEY, SECRET_IV, ENCRYPTION_METHOD } = process.env

export default {
    secret_key: SECRET_KEY,
    secret_iv: SECRET_IV,
    encryption_method: ENCRYPTION_METHOD
}