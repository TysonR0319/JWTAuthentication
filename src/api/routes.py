"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
# @api.route("/token", methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return jsonify({"msg": "Bad username or password"}), 401

#     access_token = create_access_token(identity=email)
#     return jsonify(access_token=access_token)

#     return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def post_user():
    body = request.get_json(force=True)
    new_user = User(email=body['email'], password=body['password'], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route('/login', methods=['POST'])
def login_user():
    body = request.get_json(force=True)
    user = db.session.query(User).filter(User.email == body['email']).first()
    print(user.password)
    if user.password == body['password']:
        access_token = create_access_token(identity={'id': user.id})
        return jsonify(access_token), 200
    else:
        return jsonify('Error user not exist'), 401

@api.route('/private',methods=["GET"])
@jwt_required()
def private():
    user_token=get_jwt_identity()
    user=User.query.get(user_token)
    return jsonify(user.serialize()),200