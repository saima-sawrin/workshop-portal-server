const express = require("express");
const mongoose  = require('mongoose');
const router =  express.Router();
const eventSchema = require('../schema/eventSchema');
const Event = new mongoose.model("Event", eventSchema)



router.get('/event', async(res,req)=>{
    await Event.find({Date: "29-05-2023"}, (err , data)=>{
   if(err){
             res.status(500).json({
              error:  "There was a server side Error"
             })
         }
         else{
             res.status(200).json({
                result : data,
                 message:  "All Events"
                })
            }
    })
})
router.get('/:id', async(res,req)=>{

})
router.post('/event', async(res,req)=>{
    // const newEvent = new Event(req.body) ;
    // await newEvent.save((err)=>{
    //     if(err){
    //         res.status(500).json({
    //          error:  "There was a server side Error"
    //         })
    //     }
    //     else{
    //         res.status(200).json({
    //             message:  "Event is added successfully"
    //            })
    //     }
    // })

})
router.post('/allEvents', async(res,req)=>{
//  await Event.insertMany(req.body, (err) =>{
//     if(err){
//             res.status(500).json({
//              error:  "There was a server side Error"
//             })
//         }
//         else{
//             res.status(200).json({
//                 message:  "Events were added successfully"
//                })
//         }
//  })
})
router.put('/', async(res,req)=>{

})
router.delete('/:id', async(res,req)=>{

})

module.exports = router;