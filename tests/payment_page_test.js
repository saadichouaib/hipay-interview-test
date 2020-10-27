/// <reference path="../steps.d.ts" />
const expect = require('chai').expect;
let postBody;

Feature('Online payments');

Scenario('Verify single payment display', async (I,paymentPage) => {
    postBody = {
		orderid : 'ORDER_1603795254979',
        description : 'desc',
        currency : 'EUR',
        amount : '8.99',
        payment_product_list : 'visa',
        css : 'https://developer.hipay.com/misc/simulator/css-responsive.css',
        template : 'basic-js'
	};

	const resp = await I.sendPostRequest('/v1/hpayment', postBody);
    expect(resp.status).to.eql(200);
    
    I.amOnPage(resp.data.forwardUrl);
    paymentPage.waitToLoad();
    paymentPage.verifySinglePayment();
});

Scenario('Verify multi payment display', async (I,paymentPage) => {
    postBody = {
		orderid : 'ORDER_1603795254979',
        description : 'desc',
        currency : 'EUR',
        amount : '8.99',
        payment_product_list : 'mastercard,visa,american-express',
        css : 'https://developer.hipay.com/misc/simulator/css-responsive.css',
        template : 'basic-js'
	};

	const resp = await I.sendPostRequest('/v1/hpayment', postBody);
    expect(resp.status).to.eql(200);
    
    I.amOnPage(resp.data.forwardUrl);
    paymentPage.waitToLoad();
    paymentPage.verifyMultiPayment();
});