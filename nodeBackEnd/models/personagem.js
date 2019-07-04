const Sequelize = require('sequelize');
const db = require('../config/database');
const Personagem = db.define('personagem',{
   codigo:{
       type:Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement: true
   },
   nome:{
       type:Sequelize.STRING,
       allowNull: false
   },
   classe:{
    type:Sequelize.STRING,
    allowNull: true
},origem:{
    type:Sequelize.STRING,
    allowNull: true
},forca:{
       type:Sequelize.STRING,
       allowNull: true
   },inteligencia:{
    type:Sequelize.STRING,
    allowNull: true
},carisma:{
    type:Sequelize.STRING,
    allowNull: true
},
})
module.exports=Personagem;