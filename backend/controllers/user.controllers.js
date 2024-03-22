import User from "../models/user.models.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password") 

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(`Error in getUsersForSideBar controller:  ${error.message}`);
    res.status(500).json({ error: "Error in getUsersForSideBar" });
  }
};
