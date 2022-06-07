const Session = require('../models/Session')

module.exports = async (req, res, next) => {
    try {
        const session = await Session.findOne({session: req.cookies.session})
        if (!session)
            return res.status(401).json({message: 'Authorization required'})
        next()
    } catch (err) {
        res.status(401).json({message: 'Authorization required'})
    }
}