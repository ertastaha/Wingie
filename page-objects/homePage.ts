import { Locator, Page, expect } from "@playwright/test";


export class HomePage {
    private readonly page: Page


    constructor(page: Page) {
        this.page = page

    }

    async search_gidis_donus() {

        await this.page.getByTestId('flight-origin-input-comp').locator('div').first().click();
        await this.page.getByRole('button', { name: 'İstanbul' }).click();
        await this.page.getByTestId('flight-destination-label').click();
        await this.page.getByRole('button', { name: 'Ankara' }).click();
        await this.page.getByTestId('search-round-trip-label').locator('span').click();
        await this.page.getByTestId('enuygun-homepage-flight-departureDate-datepicker-input').click();
        await this.page.getByTestId('enuygun-homepage-flight-submitButton').click();

        await this.page.getByText('Gidiş kalkış / varış saatleri').click();
        await this.page.getByText('Öğle').first().click();
        await this.page.getByText('Öğle').nth(1).click();
        const gidis = await this.page.getByText(':00 ile 17:00 arası').first().textContent()

        const donus = await this.page.getByText(':00 ile 17:00 arası').nth(1).textContent()

        return gidis

    }


    async filter_thy() {

        await this.page.getByTestId('flight-origin-input-comp').locator('div').first().click();
        await this.page.getByRole('button', { name: 'İstanbul' }).click();
        await this.page.getByTestId('flight-destination-label').click();
        await this.page.getByRole('button', { name: 'Ankara' }).click();
        await this.page.getByTestId('search-round-trip-label').locator('span').click();
        await this.page.getByTestId('enuygun-homepage-flight-departureDate-datepicker-input').click();
        await this.page.getByTestId('enuygun-homepage-flight-submitButton').click();

        await this.page.getByText('Gidiş kalkış / varış saatleri').click();
        await this.page.getByText('Öğle').first().click();
        await this.page.getByText('Öğle').nth(1).click();

        await this.page.locator('#SearchRoot div').filter({ hasText: 'Havayolları' }).nth(4).click();
        await this.page.locator('label').filter({ hasText: 'Türk Hava Yolları' }).locator('span').first().click();
        await this.page.getByText('En ucuz').click();

        const classValue = await this.page.$eval('div[data-testid="sortButtons0"]', (element) => element.getAttribute('class'));
        console.log(classValue);

        return classValue

    }

    async impact_case() {

        await this.page.getByTestId('flight-origin-input-comp').locator('div').first().click();
        await this.page.getByRole('button', { name: 'İstanbul' }).click();
        await this.page.getByTestId('flight-destination-label').click();
        await this.page.getByRole('button', { name: 'Ankara' }).click();
        await this.page.getByTestId('enuygun-homepage-flight-departureDate-datepicker-input').click();
        await this.page.getByTestId('enuygun-homepage-flight-submitButton').click();

        await this.page.locator('#flight-0').getByRole('button', { name: 'Seç ' }).click();
        await this.page.getByTestId('providerSelectBtn').click();

        const currentUrl = this.page.url();

        return currentUrl

    }
}