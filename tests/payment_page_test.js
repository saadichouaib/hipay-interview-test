/// <reference path="../steps.d.ts" />
const expect = require('chai').expect;
let postBody, header;
let generatedUrl;

Feature('Online payments');

Scenario('Generate a new payment page', async (I) => {

    headers = {
        accept : "application/json",
        Authorization : "Basic OTQ2NTgzNjUuc3RhZ2Utc2VjdXJlLWdhdGV3YXkuaGlwYXktdHBwLmNvbTpUZXN0X1JoeXBWdktpUDY4VzNLQUJ4eUdoS3Zlcw==",
        "Content-Type" : "multipart/form-data"
    };

    postBody = {
		orderid : 'ORDER_1603795254978',
        description : 'desc',
        currency : 'EUR',
        amount : '8.99',
        payment_product_list : 'visa'
	};

	const resp = await I.sendPostRequest('/v1/hpayment', postBody,headers);
	expect(resp.status).to.eql(200);
    console.log(resp.data.forwardUrl)
});