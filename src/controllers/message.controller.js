import Message from "../models/message.model.js"
import User from "../models/user.model.js"

export const getUsersForSidebar = async(req,res) => {
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password") //getall users except currentUser

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUserForSideBar controller "+error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const getMessages = async(req,res) => {
    try {
        const { id:userToChatId } = req.params
        const senderId = req.user._id

        const messages = await Message.find({
            $or:[
                
            ]
        })
    } catch (error) {
        
    }
}

