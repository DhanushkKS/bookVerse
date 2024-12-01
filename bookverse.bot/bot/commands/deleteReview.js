const axios = require("axios");

module.exports = {
    name: "deletereview",
    description: "Delete a review by its ID",
    async execute(message, args) {
        const [reviewId] = args;

        if (!reviewId) {
            return message.reply("Usage: !deletereview <reviewId>");
        }

        try {
            await axios.delete(`${process.env.API_URL}/reviews/${reviewId}`);
            message.reply(`Review with ID ${reviewId} has been deleted successfully.`);
        } catch (error) {
            console.error(error);
            message.reply("Failed to delete the review. Please ensure the review ID is correct.");
        }
    },
};
