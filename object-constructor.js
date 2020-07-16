function Book(title, author) {
	this.title = title
	this.author = author
	this.getTitle = function() {return `Title: ${title}`}
	this.getAuthor = function() {return `Author: ${author}`} 
}

const PP = new Book('Pride and Prejudice', 'Jane Austen')
const H = new Book('Hamlet', 'William Shakespeare')
const WP = new Book('War and Peace', 'Leo Tolstoy')

console.log(PP)
console.log(H)
console.log(WP)