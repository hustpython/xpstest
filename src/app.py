from flask import Flask
app = Flask(__name__)
@app.route('/')
def root():
    t = {
        'a': 1,
        'b': 2,
        'c': [3, 4, 5]
    }
    return t

if __name__ == '__main__':
    app.debug = True
    app.run()