const Messages = require("../models/messageModel");



module.exports.getAllMessages = async (req, res, next) => {
  console.log("=======================");
  console.log("User: " + req.params.userId);
  console.log("Contact: " + req.params.contactId);
  console.log("=======================");
  // {$and:[{"sender": ObjectId("643e912774c75764ac0cf8f9")},{"users": "643ae9edc0d5df03763050e0"}]}
  try {
    const messages = await Messages.find({$or :
      [{$and : [{"sender": req.params.userId},
              {"users": req.params.contactId}]},

      {$and : [{"sender": req.params.contactId},
              {"users": req.params.userId}]}]
    }).select([
      "message",
      "sender",
      "createdAt",
      "_id",
    ]).sort({createdAt:-1});

    

      
    return res.json(messages);
  } catch (ex) {
    console.log(ex);
    next(ex);
  }
};










module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};
