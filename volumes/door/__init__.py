from flask import Flask, send_from_directory
from .config import Config
import random as r
from . import iot

def create_app(test_config=None):
	app = Flask(__name__, instance_relative_config=True, static_url_path='')
	
	if test_config is None:
		app.config.from_object(Config)
	else:
		app.config.from_mapping(test_config)

	
	app.state = app.config['STATUS']
	
	app.password = app.config['PASSWORD'] + str(r.random()) #we are attaching a random string for the password

	
	@app.route('/css/<path:path>')
	def send_css(path):
		return send_from_directory('templates/css', path)
	
	@app.route('/js/<path:path>')
	def send_js(path):
		return send_from_directory('templates/js', path)


	app.register_blueprint(iot.bp)
	return app
