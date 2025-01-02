const axios = require("axios");

module.exports = {
    name: "addreview",
    description: "Add a review for a book",
    async execute(message, args) {
        const [bookId, ...reviewText] = args;
        const comment = reviewText.join(" ");

        if (!bookId || !comment) {
            return message.reply("Usage: !addreview <bookId> <comment>");
        }

        try {
            await axios.post(`${process.env.API_URL}/reviews`, {
                bookId,
                userId: message.author.id,
                comment,
            });
            message.reply("Review added successfully!");
        } catch (error) {
            console.error(error);
            message.reply("Failed to add the review.");
        }
    },
};
