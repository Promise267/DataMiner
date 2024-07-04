from . import db
from . import parse_quotes
cur = db.conn.cursor()
sql = 'INSERT INTO QUOTES (id, quote, author, category) VALUES (%s, %s, %s, %s )'

for item in parse_quotes.quotes:
    cur.execute(sql, item)

db.conn.commit()