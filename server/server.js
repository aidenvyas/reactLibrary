const express=require('express')()

const booksRouter=require('./Routes/booksRouter')
express.use('/',booksRouter)
express.listen(3434,console.log('listening on 3434'))


module.exports=express;