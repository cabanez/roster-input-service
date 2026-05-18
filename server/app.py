from flask import Flask, jsonify
from flask_cors import CORS
from db import database
from config import SQLALCHEMY_DATABASE_URI
import db.models

def create_app(db_uri):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    database.db.init_app(app)

    with app.app_context():
        database.db.create_all()  # Creates tables based on defined models

    return app

app = create_app(SQLALCHEMY_DATABASE_URI)
CORS(app)

@app.route('/')
def index():
    return "Hello, this is a Flask microservice!"

@app.route('/call-api', methods=['GET'])
def call_api():
    return jsonify({"message": "Hello from Python!"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
