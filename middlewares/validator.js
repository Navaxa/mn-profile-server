const { validationResult } = require("express-validator")

exports.validator = (req, res, next) => {

    const err = validationResult(req);

    if (!err.isEmpty()) {
        return res.status(400).json({
            ok: false,
            message: err.mapped()
        })
    }

    next();

}