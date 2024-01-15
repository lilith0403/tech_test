const router = require('express').Router()
const Person = require('../models/Person')

// CREATE
router.post('/', async (req, res) => {
    const {name, email, birth, } = req.body
    if(!(name&&email&&birth)) {
        res.status(422).json({error: 'Informações insuficientes!'})
        return
    }
    const person = {
        name,
        email,
        birth,
    }
    try{
        await Person.create(person)
        res.status(201).json({message: 'Cadastro finalizado com sucesso!'})
    }catch(error){
        res.status(500).json({error: error})
    }
})

// READ
router.get('/', async (req,res) => {
    try{
        const people = await Person.find()
        res.status(200).json(people)
    }catch(error){
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    try {
        const person = await Person.findOne({_id: id })
        if(!person){
            res.status(422).json({ message: 'Usuário não identificado!' })
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

// UPDATE
router.patch('/:id', async(req,res)=>{
    const id = req.params.id
    const { name, email, birth, } = req.body
    const person = {
        name,
        email,
        birth,
    }

    try{
        const updatedPerson = await Person.updateOne({_id: id}, person)
        if(updatedPerson.matchedCount === 0){
            res.status(422).json({ message: 'Usuário não foi encontrado!' })
            return
        }
        res.status(200).json(person)
    }catch(error){
        res.status(500).json({ error:error })
    }
})

// DELETE
router.delete('/:id', async (req,res) =>{
    const id = req.params.id
    const person = await Person.findOne({ _id: id })
    if(!person){
        res.status(422).json({ message: 'Usuário não identificado!' })
        return
    }
    try {
        await Person.deleteOne({_id:id})
        res.status(200).json({message: 'Usuário removido com sucesso!'})
    } catch (error) {
        res.status(500).json({ error:error })
    }
})

module.exports = router