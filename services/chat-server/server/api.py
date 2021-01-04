import os
import sys
import traceback
from flask import Blueprint, jsonify, request
from flask_cors import cross_origin
import server.logging as logging

chat_server = Blueprint('chat_server', __name__)


@chat_server.route('/load_bot', methods=['GET'])
def load_bot():
    """Load Individual Bot Based on Bot ID
    Create an new user session

    Returns:
        [type]: [description]
    """
    response_object = {}
    response = jsonify(response_object)
    return response

@chat_server.route('/load_available', methods=['GET'])
def load_available():
    """Load Available Bots

    Returns:
        Response Object
    """
    response_object = {}
    response = jsonify(response_object)
    return response


@chat_server.route('/chat', methods=['GET', 'POST'])
def chat():
    """Check Session with User

    Returns:
        [type]: [description]
    """
    response_object = {
        'status': 'error'
    }
    if request.method == 'POST':
        post_data = request.get_json()
        response_object = kg.update_node(post_data)
        if 'message' in response_object:
            response_object['status'] = 'error'
        else:
            response_object['status'] = 'success'
    response = jsonify(response_object)
    return response
