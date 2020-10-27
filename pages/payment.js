const { I } = inject();
let postBody, headers;

module.exports = {
  data:{
    paymentProduct : {
      visa : '//*[@class="payment-product-sprite-visa"]',
      masterCard : '//*[@class="payment-product-sprite-mastercard"]',
      americanExpress : '//*[@class="payment-product-sprite-american-express"]',
      count : '//div[@class="controls"]/label'
    },
    merchantName : '//tr[@id="orderSummaryMerchantTR"]/td[2]',
    oerderId : '//tr[@id="orderSummaryReferenceTR"]/td[2]',
    amount : '//tr[@id="orderSummaryAmountTR"]/td[2]'
  },
  input:{
    cardNumber:'cardnumber',
    cardHolder:'ccname',
    expiryDate:'cc-exp',
    cvv:'cvc',
  },
  button:{
    pay:'//*[@id="submit-button"]'
  },

  verifySinglePayment(){
    I.waitForClickable(this.data.paymentProduct.visa,10);
    I.seeNumberOfElements(this.data.paymentProduct.count, 1);
  },

  verifyMultiPayment(){
    I.waitForClickable(this.data.paymentProduct.visa,10);
    I.waitForClickable(this.data.paymentProduct.masterCard,10);
    I.waitForClickable(this.data.paymentProduct.americanExpress,10);
    I.seeNumberOfElements(this.data.paymentProduct.count, 3);
  },

  waitToLoad(){
    I.waitForVisible(this.data.merchantName,10);
    I.waitForVisible(this.data.amount,10);
    I.waitForVisible(this.data.oerderId,10);
    I.waitForClickable(this.button.pay,10);
    I.see('card number');
    I.see('card holder');
    I.see('expiry date');
    I.see('cvv');
  },
}