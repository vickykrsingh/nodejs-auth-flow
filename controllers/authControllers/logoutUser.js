const logout = (req,res) => {
    try {
        const cookieOption = {
            expires : new Date(),
            httpOnly: true
        }
        res.cookie("token",null,cookieOption)
        res.status(200).json({
            success:true,
            message:"Logged out"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    logout
}