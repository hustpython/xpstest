from models import returncollectionlist
from flask import Flask, render_template,jsonify,request
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/dblist')
def dblist():
    #dblist = ['HFSSDataBase','CST','Antenna','GeneMat','Research','Graduate']
    dblist = ['test']
    return jsonify({'dblist':dblist})
@app.route('/postdb',methods=['POST', 'GET'])
def postdb():
    if request.method == 'POST':
        selecteddb = request.get_json()['selecteddb']
        collectionlist = returncollectionlist(selecteddb)
        return jsonify({'collectionlist':collectionlist}) 
if __name__ == '__main__':
    app.run(debug=True)

   