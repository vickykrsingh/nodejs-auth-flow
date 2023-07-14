const userModel = require("../../models/userModel");

const getUser = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user,
      // here password is not comes because while defining user schema we define one attribute that is 'select:false' means that whenever everyone explicitly want password then password is passed otherwise not
    });
  } catch (error) {
    return res.status(400).send({
        success:false,
        message:error.message
    })
  }
};

module.exports = {
  getUser,
};
