import crypto from 'crypto'
import config from '../config.js'


const { secret_key, secret_iv, encryption_method } = config

const key = crypto
  .createHash('sha512')
  .update(secret_key)
  .digest('hex')
  .substring(0, 32)
const encryptionIV = crypto
  .createHash('sha512')
  .update(secret_iv)
  .digest('hex')
  .substring(0, 16)

console.log(encryption_method)
console.log(secret_iv)
console.log(secret_key)

  export function encryptData(data) {
    console.log(encryption_method, key, encryptionIV)
    const cipher = crypto.createCipheriv(encryption_method, key, encryptionIV)
    console.log(cipher)
    return Buffer.from(
      cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
    ).toString('base64') // Encrypts data and converts to hex and base64
  }



  export function decryptData(encryptedData) {
    const buff = Buffer.from(encryptedData, 'base64')
    const decipher = crypto.createDecipheriv(encryption_method, key, encryptionIV)
    return (
      decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
      decipher.final('utf8')
    ) // Decrypts data and converts to utf8
  }