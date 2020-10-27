const { I } = inject();

module.exports = {

  text: {
    bienvenue: '//div[@id="blablaLarge"]/h2[1]'
  },
  
  waitForHomePage(){
    I.waitForVisible(this.text.bienvenue,10);
    I.see('BIENVENUE');
  },
}