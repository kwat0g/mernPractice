import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {

    try {
        const { success } = await ratelimit.limit("my-rate-limit");
        if (!success) {
            return res.status(429).json({ message: "Too many requests. Please try again later." });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        next(error);
    }

}

export default rateLimiter;