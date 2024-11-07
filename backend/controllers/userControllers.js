import User from '../model/userSchema.js';

export const signup = async (req, res) => {
    try {
        let { username, email } = req.body;

        if (!username || !email) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        let result = await User.find({ username, email });

        if (result) {
            res.status(400).json({
                success: false,
                message: "Username already exists"
            });
        }

        result = new User({
            username,
            email
        })

        await result.save();

        return res.status(200).json({
            success: true,
            message: "User created successfully. Please singin"
        })
    } catch (error) {
        console.log("Erron singing up" + error);
        res.status(400).json({
            success: false,
            message: "Error singing up"
        })
    }

}

export const signin = async (req, res) => {
    try {
        let { username, email } = req.body;

        if (!username || !email) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        let result = await User.find({ username, email });

        if (!result) {
            res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        let token = createToken(result._id, result.username, "7d");
        let expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie("auth_token", token, {
            expires,
            httpOnly: true,
            signed: true,
            sameSite: 'none',
            secure: true
        });

        return res.status(200).json({
            success: true,
            message: "user successfully signed in"
        })
    } catch (error) {
        console.log("Erron singing in" + error);
        res.status(400).json({
            success: false,
            message: "Error singing in"
        })
    }

}

export const signout = async (req, res) => {
    try {
        res.clearCookie("auth_token", {
            httpOnly: true,
            signed: true,
            sameSite: 'none',
            secure: true
        });
    } catch (error) {
        console.log("Erron singing out" + error);
        return res.status(400).json({
            success: false,
            message: "Error singing out"
        })
    }
}