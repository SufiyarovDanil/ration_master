import sqlite3


def fill_db(url: str) -> None:
    connection = sqlite3.connect(url)
    cursor = connection.cursor()

    with  open('./res/init.sql', encoding='utf-8') as f:
        for cmd in f.read().split(';'):
            try:
                cursor.execute(cmd)
            except Exception:
                print('skip fill sql command')

    connection.commit()
    connection.close()
