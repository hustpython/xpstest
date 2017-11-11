from flask import Flask, render_template,jsonify
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/dblist')
def dblist():
    dblist = ['HFSSDataBase','CST','Antenna','GeneMat','Research','Graduate']
    return jsonify({'dblist':dblist})
if __name__ == '__main__':
    app.run(debug=True)

   