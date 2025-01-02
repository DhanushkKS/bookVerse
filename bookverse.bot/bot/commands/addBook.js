const axios = require("axios");

module.exports = {
    name: "addbook",
    description: "Add a book to your library",
    async execute(message, args) {
        const [title, author, genre, publishedYear] = args;

        if (!title || !author || !genre || !publishedYear) {
            return message.reply("Usage: !addbook <title> <author> <genre> <publishedYear>");
        }

        try {
            const response = await axios.post(`${process.env.API_URL}/books`, {
                title,
                author,
                genre,
                publishedYear: Number(publishedYear),
                createdBy: message.author.id,
            });
            message.reply(`Book "${title}" added successfully!`);
        } catch (error) {
            console.error(error);
            message.reply("Failed to add the book.");
        }
    },
};
