const axios = require("axios");

module.exports = {
    name: "listreviews",
    description: "List all reviews for a specific book",
    async execute(message, args) {
        const [bookId] = args;

        if (!bookId) {
            return message.reply("Usage: !listreviews <bookId>");
        }

        try {
            const response = await axios.get(`${process.env.API_URL}/reviews?bookId=${bookId}`);
            const reviews = response.data;

            if (reviews.length === 0) {
                return message.reply("No reviews found for this book.");
            }

            const reviewList = reviews
                .map(review => `**${review.comment}** by <@${review.userId}>`)
                .join("\n");
            message.reply(`Here are the reviews for the book:\n${reviewList}`);
        } catch (error) {
            console.error(error);
            message.reply("Failed to fetch reviews. Please ensure the book ID is correct.");
        }
    },
};
