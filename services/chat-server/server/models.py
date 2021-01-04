from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property
from flask_caching import Cache

db = SQLAlchemy()
cache = Cache()

class Model(db.Model):
    """ Timestamps all models, and serializes model objects."""
    __abstract__ = True

    created = db.Column(db.DateTime(timezone=True),
                        server_default=db.func.now(), nullable=False)

    def __repr__(self):
        if hasattr(self, 'id'):
            key_val = self.id
        else:
            pk = self.__mapper__.primary_key
            if type(pk) == tuple:
                key_val = pk[0].name
            else:
                key_val = self.__mapper__.primary_key._list[0].name
        return '<{0} {1}>'.format(self.__class__.__name__, key_val)

    @classmethod
    def can(cls, obj, user, action):
        if user.is_admin:
            return True
        return False

    @hybrid_property
    def export(self):
        """ CSV export data. """
        if not hasattr(self, 'export_items'):
            return {}
        return {k: v for k, v in self.as_dict().items() if k in self.export_items}

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def from_dict(self, dict):
        for c in self.__table__.columns:
            if c.name in dict:
                setattr(self, c.name, dict[c.name])
        return self


class User(Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    email = db.Column(db.String(255), unique=True, nullable=False, index=True)
    is_admin = db.Column(db.Boolean(), default=False)
    amazon_session_id = db.Column(db.String(255))
    local_session_id = db.Column(db.String(255))

    export_items = ('email', 'name', 'amazon_session_id', 'local_session_id')

    def __repr__(self):
        return '<User {0}>'.format(self.email)

    @staticmethod
    def get_by_id(uid):
        """ Performs .query.get; potentially can be cached."""
        return User.query.get(uid)

    @staticmethod
    @cache.memoize(10)
    def email_by_id(uid):
        """Get Email by User ID
        """
        user = User.query.get(uid)
        if user:
            return user.email

    @staticmethod
    def lookup(email):
        """ Get a User with the given email address, or None."""
        return User.query.filter_by(email=email).one_or_none()
