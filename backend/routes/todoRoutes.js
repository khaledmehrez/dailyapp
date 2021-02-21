const express = require('express');

const { getTodo, postTodo,deleteTodo,patchTodo} = require('../controllers/contTodo')
const router = express.Router();


router.get('/getTodo', getTodo)

router.post('/postTodo', postTodo)

router.delete('/deleteTodo/:id',deleteTodo)
router.patch('/patchTodo/:id',patchTodo)




module.exports = router;