from flask import Flask, Response
from os.path import join, dirname, abspath
from babeljs import transformer

DIR_ROOT = abspath(dirname(__file__))

app = Flask(__name__)


@app.route("/")
def home():
    jsx_path = join(DIR_ROOT, 'getComponent.jsx')
    javascript = transformer.transform(jsx_path)
    return Response(javascript, mimetype='application/javascript')

if __name__ == "__main__":
    app.run()
