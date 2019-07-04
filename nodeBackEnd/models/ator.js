const Sequelize = require('sequelize');
const db = require('../config/database');
const Ator = db.define('ator',{
   codigo:{
       type:Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement: true
   },
   nome:{
       type:Sequelize.STRING,
       allowNull: false
   },
   dataNasc:{
    type:Sequelize.STRING,
    allowNull: true
   }
})
module.exports=Ator;