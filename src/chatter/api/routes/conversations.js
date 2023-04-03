const router = require("express").Router();
const Conversation = require("../models/Conversation");

//nova conversa
router.post("/", async(req, res)=>{
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {
       const savedConversation = await newConversation.save();
       res.status(200).json(savedConversation)
    } catch (error) {
        res.status(500).json(err)
    }
})
//pega conversa do usuario
router.get("/:userId", async (req, res)=>{
    try {
        const conversation = await Conversation.find({
        members: {$in:[req.params.userId]},
        });
        res.status(200).json(conversation)
       
     } catch (error) {
         res.status(500).json(err)
     }
})
module.exports = router;