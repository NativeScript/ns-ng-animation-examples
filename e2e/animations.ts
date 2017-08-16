import { AppiumDriver, SearchOptions, createDriver } from "nativescript-dev-appium";
import { assert } from "chai";

describe("animations", function () {
    let driver: AppiumDriver;
    const externalBtnText = "External animation";
    const selectorBtnText = "Selector";

    before(async () => {
        driver = await createDriver();
    });

    after(async () => {
        await driver.quit();
    });

    it("external animations", async () => {
        const externalBtn = await driver.findElementByText(externalBtnText);
        await externalBtn.click();

        const niceBtn = await driver.findElementByText("Nice", SearchOptions.contains);
        assertPositin((await niceBtn.location()), 0, 64);

        const toggleBtn = await driver.findElementByText("Toggle");
        await toggleBtn.click();
        setTimeout(async function () {
            //niceBtn.log();
            assert.isFalse((await niceBtn.isDisplayed()));
        }, 2000);

        await driver.navBack();        
    });

    it("selector", async () => {
        const selectorBtn = await driver.findElementByText(selectorBtnText, SearchOptions.contains);
        await selectorBtn.click();

        const addBtn = await driver.findElementByText("add", SearchOptions.contains);
        (await addBtn.click());

        const random = await driver.findElementByText("random", SearchOptions.contains);
        assertPositin((await random.location()), 198, 154);

        await driver.navBack();
    });
});

export function assertPositin(point, x, y) {
    assert.equal(point.x, x.toString(), "Element x location is not correct!");
    assert.equal(point.y, y.toString(), "Element y location is not correct!");
}