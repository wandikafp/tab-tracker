module.exports = (sequelize, DataTypes) => 
sequelize.define({
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
})
