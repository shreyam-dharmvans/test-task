export const getRestrictedData = (req, res) => {
    res.status(200).json({
        success: true,
        message: "You have access to restricted data"
    })
}