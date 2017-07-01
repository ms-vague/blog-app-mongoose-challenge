const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
	author: {
		firstName: String,
		lastName: string
	},
	title: {type: String, required: true},
	content: {type: String},
	created: {type: Date, default: Data.now}
});

blogPostSchema.virtual('authorName').get(function() {
	return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogPostSchema.methods.apiRepr = function() {
	return {
		id: this._id,
		author: this.authorName,
		content: this.content,
		title: this.title,
		created: this.created
	};
}

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {BlogPost};