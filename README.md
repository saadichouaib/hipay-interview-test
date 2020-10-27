# HP_QA_Test
/hpayment sample test

### About env
This sample was done using https://codecept.io/
Helpers used : Rest helper, Protractor
Reporting : allure

### Requirement
NodeJs 8+

### Execution
```
cd HP_QA_Test
npm install
add \node_modules\.bin to path
cc run -- steps     //run all tests
allure serve output //open allure report
```

### Results trace
```
CodeceptJS v2.3.6
Using test root "C:\Users\csaadi\Desktop\HP_QA_Test"

Online payments --
  Verify single payment display
    I send post request "/v1/hpayment", {"orderid":"ORDER_1603795254979","description":"desc","currency":"EUR","amount":"8.99","payment_product_list":"visa","css":"https://developer.hipay.com/misc/simulator/css-responsive.cs...
    I am on page "https://stage-secure-gateway.hipay-tpp.com/0000-133-1069/payment/web/pay/770e2b10-69af-4e46-a982-afb242992fd0"
    paymentPage: waitToLoad 
      I wait for visible "//tr[@id="orderSummaryMerchantTR"]/td[2]", 10
      I wait for visible "//tr[@id="orderSummaryAmountTR"]/td[2]", 10
      I wait for visible "//tr[@id="orderSummaryReferenceTR"]/td[2]", 10
      I wait for clickable "//*[@id="submit-button"]", 10
      I see "card number"
      I see "card holder"
      I see "expiry date"
      I see "cvv"
    paymentPage: verifySinglePayment 
      I wait for clickable "//*[@class="payment-product-sprite-visa"]", 10
      I see number of elements "//div[@class="controls"]/label", 1
  √ OK in 4978ms

  Verify multi payment display
    I send post request "/v1/hpayment", {"orderid":"ORDER_1603795254979","description":"desc","currency":"EUR","amount":"8.99","payment_product_list":"mastercard,visa,american-express","css":"https://developer.hipay.com/misc...
    I am on page "https://stage-secure-gateway.hipay-tpp.com/0000-133-1069/payment/web/pay/770e2b10-69af-4e46-a982-afb242992fd0"
    paymentPage: waitToLoad 
      I wait for visible "//tr[@id="orderSummaryMerchantTR"]/td[2]", 10
      I wait for visible "//tr[@id="orderSummaryAmountTR"]/td[2]", 10
      I wait for visible "//tr[@id="orderSummaryReferenceTR"]/td[2]", 10
      I wait for clickable "//*[@id="submit-button"]", 10
      I see "card number"
      I see "card holder"
      I see "expiry date"
      I see "cvv"
    paymentPage: verifyMultiPayment 
      I wait for clickable "//*[@class="payment-product-sprite-visa"]", 10
      I wait for clickable "//*[@class="payment-product-sprite-mastercard"]", 10
      I wait for clickable "//*[@class="payment-product-sprite-american-express"]", 10
      I see number of elements "//div[@class="controls"]/label", 3
  √ OK in 5243ms


  OK  | 2 passed   // 23s
```

![name-of-you-image](https://github.com/saadichouaib/HP_QA_Test/blob/main/output/allure_report.png)
