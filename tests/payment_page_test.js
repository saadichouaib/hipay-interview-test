/// <reference path="../steps.d.ts" />

Feature('Online payments');

Scenario('Verify single payment display', async (I,paymentPage) => {
    I.amOnPage(await paymentPage.generateForwardUrl('visa'));
    paymentPage.waitToLoad();
    paymentPage.verifySinglePayment();
    // comment
});

Scenario('Verify multi payment display', async (I,paymentPage) => {
    I.amOnPage(await paymentPage.generateForwardUrl('mastercard,visa,american-express'));
    paymentPage.waitToLoad();
    paymentPage.verifyMultiPayment();
});