from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.get("https://www.brainyquote.com/topics/motivational-quotes")
driver.implicitly_wait(10)
page_source = driver.page_source

soup = BeautifulSoup(page_source, 'html.parser')

def writeIntoFile(content):
    with open('quotes.html', 'w', encoding='utf-8') as f:
        f.write(content)

writeIntoFile(soup.prettify())


driver.quit()