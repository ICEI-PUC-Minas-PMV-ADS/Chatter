const { addMessage, 
    getMessages, 
    getAllMessages 
} = require("../controllers/messageController");

const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getmsg", getMessages);
router.get("/getAllMessages/:userId/:contactId", getAllMessages);

module.exports = router;
