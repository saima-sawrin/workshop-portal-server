const express = require('express');
const mongoose  = require('mongoose');
const router =  express.Router()
const User = new mongoose.model("User", userSchema);

router.get('/', async(res,req)=>{
    
})
router.get('/:id', async(res,req)=>{

})
router.post('/', async(res,req)=>{

})
router.post('/allEvents', async(res,req)=>{

})
router.put('/:id', async(res,req)=>{
  await Event.updateOne({_id: req.params.id},{
    $set : {
      
    }
  
  },(err)=>{
    if(err){
      res.status(500).json({
       error:  "There was a server side Error"
      })
  }
  else{
      res.status(200).json({
          message:  "Event is added successfully"
         })
  }
  }
  )
})
router.delete('/:id', async(res,req)=>{

})

module.exports = router;