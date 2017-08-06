require('chromedriver');
var webdriver = require('selenium-webdriver');//导入selenium
var driver = new webdriver.Builder().forBrowser("chrome").build();//打开浏览器

driver.get ("http://www.baidu.com");//输入网址
driver.findElement({id:"kw"}).sendKeys("向建群");//输入向建群
driver.findElement({id:"su"}).click();//点击百度一下
driver.get ("http://www.iciba.com/");
driver.findElement({css:"body > div.screen.screen-blue > div.container > div:nth-child(1) > div.container-right > div.hot > div.hot-list > a:nth-child(1)"}).click();
driver.findElement({id:"search-input"}).sendKeys("nihao");
driver.findElement({css:"body > div.screen.screen-blue > div.search > div.search-fix > div.search-box > div.search-submit > div"}).click();


//driver.get();
//driver.findElement({css:""})
//driver.quit();