const Sequelize = require('sequelize');
const db = require('../config/database');
const Filme = db.define('filme',{
   codigo:{
       type:Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement: true
   },
   nome:{
       type:Sequelize.STRING,
       allowNull: false
   },
   dataLancamento:{
    type:Sequelize.STRING,
    allowNull: true
   },
   genero:{
    type:Sequelize.STRING,
    allowNull: true
   }
})
module.exports=Filme;