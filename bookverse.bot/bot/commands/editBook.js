const axios = require("axios");

module.exports = {
    name: "editbook",
    description: "Edit a book's details",
    async execute(message, args) {
        const [bookId, ...fields] = args;
        const fieldsString = fields.join(" ");
        const [fieldToEdit, newValue] = fieldsString.split("=");

        if (!bookId || !fieldToEdit || !newValue) {
            return message.reply(
                "Usage: !editbook <bookId> <fieldName=newValue>\nExample: !editbook 64aef6d8d83c2b001b39c8a4 title=Updated Title"
            );
        }

        try {
            const response = await axios.put(`${process.env.API_URL}/books/${bookId}`, {
                [fieldToEdit]: newValue,
            });
            message.reply(`Book updated successfully: ${response.data.title}`);
        } catch (error) {
            console.error(error);
            message.reply("Failed to update the book. Please ensure the book ID and field are correct.");
        }
    },
};
