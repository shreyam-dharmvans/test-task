import jwt from 'jsonwebtoken';

export const createToken = (id, username, expiresIn) => {
    const payload = {
        id,
        username
    }

    let token = jwt.sign(payload, process.env.SECRET, {
        expiresIn
    });

    return token;
}

export const verifyToken = (req, res, next) => {
    let token = req.signedCookies['auth_token'];
    if (!token || token.trim() == '') {
        return res.status(400).json({
            success: false,
            message: "User not authorized"
        })
    }

    let result = jwt.verify(token, process.env.SECRET);

    if (!result) {
        return res.status(400).json({
            success: false,
            message: "User not authorized"
        })
    }

    res.locals.jwtData = result;

    next();
}