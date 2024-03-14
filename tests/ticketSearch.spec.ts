import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'



test.describe('Wingie En Uygun Test Cases ', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')

    })

    test.afterEach('close browser', async ({ page }) => { await page.close() });

    test('Test Case 1 - Ticket between Istanbul and Ankara', async ({ page }) => {

        const pm = new PageManager(page)
        const actual_gidis_donus = await pm.on_home_page().search_gidis_donus()

        const expected_gidis_donus = '10:00 ile 17:00 arası'
        expect(actual_gidis_donus).toBe(expected_gidis_donus)

    })

    test('Test Case 2 - Filter THY', async ({ page }) => {

        const pm = new PageManager(page)
        const actual_enUcuz_filter = await pm.on_home_page().filter_thy()
        const expected_enUcuz_filter = 'sort-buttons active'

        expect(actual_enUcuz_filter).toBe(expected_enUcuz_filter)

    })

    test('Test Case 3 - Impact Case', async ({ page }) => {

        const pm = new PageManager(page)
        const actual_URL = await pm.on_home_page().impact_case()

        console.log(actual_URL)
        expect(actual_URL).toContain('rezervasyon')

    })









})