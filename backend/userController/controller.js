import { URL } from "../userModel.js/model.js"
import shortId from "shortid"


export const urlSection = async (req, res) => {

    const { originalurl } = req.body

    try {
        // const existUrl = await URL.findOne({ originalurl })
        // if (existUrl) return res.status(400).json({
        //     success: false,
        //     message: "This originalurl alreday exist.."
        // })

        const Shorturl = shortId.generate()

        await URL.create({ originalurl, Shorturl })

        res.status(200).json({
            success: true,
            message: "url shorted successfull.. ",
            shortUrl: Shorturl
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong..."
        })
    }

}


export const getUrlsection = async (req, res) => {
    try {
        const shortCode = req.params.code;

        if (!shortCode) {
            return res.status(400).json({ success: false, message: "Short code is required" });
        }

        
        const urlData = await URL.findOne({ Shorturl: shortCode });

        if (!urlData) {
            return res.status(404).json({ success: false, message: "URL not found" });
        }

        
        return res.redirect(urlData.originalurl);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};