const express = require('express');
const router = express.Router();
// router.get("/",(req,res)=>{
//     res.json(
//         [
//             {'codigo':1,'nome':'unilever'},
//             {'codigo':2,'nome':'bombril'}
//         ]
//     )

// });
const Filme = require('../models/Filmes');
router.get("/",(req,res)=>
Filme.findAll()
    .then(result => res.json(result))
    .catch(error =>{
        res.status(412).json({msg:error.message});
    })
)

router.get("/:id",(req, res)=>{
    Filme.findOne({
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
    Filme.findAll({where:{nome:{[Op.like]:query}}})
    .then(filmes => res.json(filmes))
    .catch(err =>console.log(err));
})

router.delete("/:id",(req,res)=>{
    Filme.destroy({
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
    Filme.create(req.body)
    .then(result=>res.json(result))
    .catch(error=>{
        res.status(412).json({msg: error.message});
    });
});

router.put('/',(req,res)=>{
    Filme.update(req.body,{
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