const router = require("express").Router();
const Message = require("../models/Message");

//adiciona
router.post("/", async(req, res)=>{
    const newMessage = new Message(req.body)
    try {
       const savedMessage = await newMessage.save();
       res.status(200).json(savedMessage)
    } catch (error) {
    
        res.status(500).json(err)
    }
})

//pegar mensagens 
router.get("/:conversationId", async(req, res)=>{

    try {
       
       const messages = await Message.find({
        conversatrionId:req.params.conversationId,
       });
       
       res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(err)
    }
})


module.exports = router;