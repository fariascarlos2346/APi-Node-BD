import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async(req, res) => {

    await prisma.users.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
   
    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

/*
    Criar nossa API de Usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário

    U3htRRn9oavf74HK
    Banco de clientes

    pS-Qni5,!3tHT?d mongodb1975@gmail.com

    mongodb1975
    OTlt74xAGve7ywgz

    carlos
    OTlt74xAGve7ywgz
*/