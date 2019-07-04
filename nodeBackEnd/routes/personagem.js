const express = require('express');
const router = express.Router();
const Personagem = require('../models/Personagem');
router.get("/",(req,res)=>
Personagem.findAll()
    .then(result => res.json(result))
    .catch(error =>{
        res.status(412).json({msg:error.message});
    })
)

router.get("/:id",(req, res)=>{
    Personagem.findOne({
        where:{
            codigo: req.params.id,
        }
    }).then(result =>{
        if(result){
            res.json(result);
        }else{
            res.sendDtatus(404);
        }
    }).catch(error =>{
        res.status(412).json({msg:error.message});
    })
})

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params',(req, res)=>{
    var query = `%${req.query.nome}%`;
    console.log(query)
    Personagem.findAll({where:{nome:{[Op.like]:query}}})
    .then(personagens => res.json(personagens))
    .catch(err =>console.log(err));
})

router.delete("/:id",(req,res)=>{
    Personagem.destroy({
        where:{
            codigo: req.params.id
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error =>{
        res.status(412).json({msg:error.message});
    });
});

router.post('/',(req,res)=>{
    console.log(req.body);
    Personagem.create(req.body)
    .then(result=>res.json(result))
    .catch(error=>{
        res.status(412).json({msg: error.message});
    });
});

router.put('/',(req,res)=>{
    Personagem.update(req.body,{
        where:{
            codigo: req.body.codigo
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error=>{
        res.status(412).json({msg: error.message});
    });
});
module.exports = router;