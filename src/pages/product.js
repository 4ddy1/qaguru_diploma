export class Product {
    constructor(page) {
        this.page = page;
        this.commentBox = this.page.getByRole('textbox', { name: 'Comment' });
        this.postCommentButton = this.page.getByRole('button', { name: 'Post Comment' });
        this.twitterLink = this.page.getByRole('link', { name: 'X', exact: true })
        this.mistakeMessage = this.page.getByRole('heading', { name: 'What did you find out?' });
    }

    async addComment(text) {
        await this.commentBox.click();
        await this.commentBox.fill(text);
        await this.postCommentButton.click();
    }

    async twitterLinkClick() {
        await this.twitterLink.click();
    }
}