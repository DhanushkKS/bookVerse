const axios = require("axios");

module.exports = {
    name: "deletebook",
    description: "Delete a book by its ID",
    async execute(message, args) {
        const [bookId] = args;

        if (!bookId) {
            return message.reply("Usage: !deletebook <bookId>");
        }

        try {
            await axios.delete(`${process.env.API_URL}/books/${bookId}`);
            message.reply(`Book with ID ${bookId} has been deleted successfully.`);
        } catch (error) {
            console.error(error);
            message.reply("Failed to delete the book. Please ensure the book ID is correct.");
        }
    },
};
