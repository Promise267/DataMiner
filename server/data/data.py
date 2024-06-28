from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

# Initialize the WebDriver
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Navigate to the website
driver.get("https://www.brainyquote.com/topics/motivational-quotes")

# Optional: Wait for the challenge to be solved
driver.implicitly_wait(10)

# Get the page source
page_source = driver.page_source

# Use BeautifulSoup to parse the page source
soup = BeautifulSoup(page_source, 'html.parser')

def writeIntoFile(content):
    with open('quotes.html', 'w', encoding='utf-8') as f:
        f.write(content)

writeIntoFile(soup.prettify())

# Close the WebDriver
driver.quit()
