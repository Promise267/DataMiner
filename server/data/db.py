import psycopg2

# Replace with your database connection details
conn = psycopg2.connect(
    host="127.0.0.1",
    database="dataminer",
    user="postgres",
    password="admin"
)
