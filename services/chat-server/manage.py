import unittest
import os

from flask.cli import FlaskGroup

from server import create_app, generate
from server.models import db, User

from flask_script import Manager, Server, Command
from flask_migrate import Migrate, MigrateCommand
from flask_rq import get_worker

import warnings

deploy_app = create_app()
# default to dev config
env = os.getenv('OK_ENV', 'dev')
app = create_app(env)

migrate = Migrate(app, db)
manager = Manager(app)


class RunTests(Command):

    def run(self):
        test_loader = unittest.defaultTestLoader
        test_runner = unittest.TextTestRunner()
        test_suite = test_loader.discover('test/')
        test_runner.run(test_suite)


manager.add_command("deploy_app", Server(host='localhost', port='5001'))
manager.add_command('test', RunTests())


def setup_default():
    """Addup Default Fields in database
    TODO
    """
    return


def seed():
    """TODO
    """
    generate.seed()


@manager.command
def createdb():
    """ Creates a database with all of the tables defined in
        your SQLAlchemy models (Useronly For now)
    """
    db.create_all()
    setup_default()


@manager.command
def dropdb():
    """
    TODO: Checkout app.config['ENV']
    """
    if app.config['ENV'] != "prod":
        db.drop_all()


@manager.command
def resetdb():
    """ Drop & create a database with all of the tables defined in
        your SQLAlchemy models.
        DO NOT USE IN PRODUCTION.
    """
    if app.config['ENV'] != "prod": #TODO
        db.drop_all()
        createdb()
        seed()

@manager.command
def worker():
    """ Run RQ workers. """
    get_worker().work()

if __name__ == "__main__":
    manager.run()
