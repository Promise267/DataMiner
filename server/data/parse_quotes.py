from bs4 import BeautifulSoup
import os

file_path = "./quotes.html"
quotes = []

def parse_data():
    with open(file_path, 'r') as quotes_file:
        soup = BeautifulSoup(quotes_file, 'html.parser')
        quote_divs = soup.find_all('div', class_='grid-item qb clearfix bqQt')
        for quote_div in quote_divs:
            quote_text = quote_div.find('a', class_='b-qt').text.strip() if quote_div.find('a', class_='b-qt') else ""
            quote_author = quote_div.find('a', class_='bq-aut').text.strip() if quote_div.find('a', class_='bq-aut') else ""
            quotes.append((quote_text, quote_author, 'motivation'))

def file_exists():
    if os.path.exists(file_path):
        parse_data()
    else:
        print(f"File '{file_path}' does not exist.")

file_exists()

print(quotes)