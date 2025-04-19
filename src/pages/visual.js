export class Visual {
    constructor(page) {
        this.page = page;
        this.cardImage = this.page.locator(`(//a[@class='ec_image_link_cover'])[4]`);
        this.cardLink = this.page.locator('#ec_product_image_effect_4481370').getByRole('link');
        this.mistakeMessage = this.page.getByRole('heading', { name: 'What did you find out?' });
    }

    async cardImageCheck() {
        await this.cardImage.click();
    }

    async cardLinkCheck() {
        await this.cardLink.click();
    }

}