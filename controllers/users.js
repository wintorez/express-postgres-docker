const User = require('../models/user')

// get all users
exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users })
    })
    .catch((err) => console.log(err))
}

// get user by id
exports.getUser = (req, res, next) => {
  const { userId } = req.params

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' })
      }
      res.status(200).json({ user: user })
    })
    .catch((err) => console.log(err))
}

// create user
exports.createUser = (req, res, next) => {
  const { name, email } = req.body

  User.create({
    name: name,
    email: email,
  })
    .then((result) => {
      res.status(201).json({
        message: 'User created!',
        user: result,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

// update user
exports.updateUser = (req, res, next) => {
  const { userId } = req.params
  const { name: updatedName, email: updatedEmail } = req.body

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' })
      }
      user.name = updatedName
      user.email = updatedEmail
      return user.save()
    })
    .then((result) => {
      res.status(200).json({ message: 'User updated!', user: result })
    })
    .catch((err) => console.log(err))
}

// delete user
exports.deleteUser = (req, res, next) => {
  const { userId } = req.params

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' })
      }
      return User.destroy({
        where: {
          id: userId,
        },
      })
    })
    .then((result) => {
      res.status(200).json({ message: 'User deleted!' })
    })
    .catch((err) => console.log(err))
}
