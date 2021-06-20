exports.secureCode = (req, res, next) => {

    const { code } = req.body;

    if ( !(code === process.env.SECURE_CODE) ) {
        return res.status(400).json({
            ok: false,
            message: 'Secure code does not match'
        });
    }
    
    next();

}