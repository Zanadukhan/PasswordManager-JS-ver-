
import { PrismaClient, Prisma } from '@prisma/client'
import PasswordGenerator from "../utils/password-generator.js"
import { encryptData, decryptData } from '../utils/encryption.js'


const prisma = new PrismaClient()
let newPass = new PasswordGenerator(10)



let passController = {
    createEntry: async (req, res) => {
        // let password = encryptData(req.body.password)
        if (req.body.entry_name === '') {
            req.body.entry_name = null
        }
        await prisma.loginItem.create({
            data: {
                name: req.body.entry_name,
                service: req.body.service_name,
                Username: req.body.user_name,
                password: req.body.password,
                userID: req.user.id
            },
        });
        res.redirect('/dashboard')
    },

    deleteEntry: async (req, res) => {
        await prisma.loginItem.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.redirect('/dashboard')

    },

    viewEntry: async (req, res) => {
        const entry = await prisma.loginItem.findFirst({
            where: {
                id: Number(req.params.id)
            }
        })
        const password = decryptData(entry.password)
        console.log(req.path)
        res.render('entry', {entry: entry, entry_pass:password, layout: 'layouts/entry-layout'})
    },

    edit: async (req, res) => {
        const entry = await prisma.loginItem.findFirst({
            where: {
                id: Number(req.params.id)
            }
        })
        const password = decryptData(entry.password)
        res.render('edit', {entry: entry, entry_pass:password, layout: 'layouts/entry-layout'})
    },

    editEntry: async (req, res) => {
        const id = req.params.id
        await prisma.loginItem.update({
            where: {
                id: Number(id)
            },
            data: {
                name: req.body.entry_name,
                service: req.body.service_name,
                Username: req.body.user_name,
                password: req.body.password
            }
    })
    res.redirect(`/entry/${id}`)
    },

    generate: (req, res) => {
        res.render('generate')
    }
};

export {passController}