const axios = require("axios");

module.exports = {
    name: "listbooks",
    description: "List all books in your library",
    async execute(message) {
        try {
            const response = await axios.get(`${process.env.API_URL}/books`);
            const books = response.data;

            if (books.length === 0) {
                return message.reply("No books found in your library.");
            }

            const bookList = books.map(book => `**${book.title}** by ${book.author}`).join("\n");
            message.reply(`Here are your books:\n${bookList}`);
        } catch (error) {
            console.error(error);
            message.reply("Failed to fetch books.");
        }
    },
};
