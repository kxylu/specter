#!/usr/bin/env python3
# Based on Parlai's Logger

import os
import sys
import logging

LOGFILE_FORMAT = '%(asctime)s %(levelname)-8s | %(message)s'
LOGFILE_DATE_FORMAT = None

SPAM = 5
DEBUG = logging.DEBUG
VERBOSE = DEBUG + 5
INFO = logging.INFO
REPORT = INFO + 5
SUCCESS = REPORT + 1
ERROR = logging.ERROR
CRITICAL = logging.CRITICAL

class ServerLogger(logging.Logger):
    def __init__(self, name, console_level=INFO):
        """
        Initialize the logger object.
        :param name:
            Name of the logger
        :param console_level:
            minimum level of messages logged to console
        """
        super().__init__(name, console_level)  # can be initialized with any level
        # Logging to stdout
        self.streamHandler = logging.StreamHandler(sys.stdout)
        # Log to stdout levels: console_level and above
        self.prefix = None
        self.streamHandler.setFormatter(self._build_formatter())
        super().addHandler(self.streamHandler)

    def _build_formatter(self):
        prefix_format = f'{self.prefix} ' if self.prefix else ''
        return logging.Formatter(
                prefix_format + LOGFILE_FORMAT, datefmt=LOGFILE_DATE_FORMAT
            )
# -----------------------------------
# Forming the logger                #
# -----------------------------------
logger = ServerLogger(name=__name__)

def set_log_level(level):
    logger.setLevel(level)

def disable():
    logger.mute()

def enable():
    logger.unmute()

def info(msg):
    return logger.info(msg)


def critical(msg):
    return logger.critical(msg)


def report(msg):
    return logger.log(msg, level=REPORT)


def success(msg):
    return logger.log(msg, level=SUCCESS)


def log(*args, **kwargs):
    return logger.log(*args, **kwargs)


def verbose(msg):
    return logger.log(msg, level=VERBOSE)


def debug(*args, **kwargs):
    return logger.debug(*args, **kwargs)


def error(*args, **kwargs):
    return logger.error(*args, **kwargs)


def warn(*args, **kwargs):
    return logger.warn(*args, **kwargs)


def warning(*args, **kwargs):
    return logger.warn(*args, **kwargs)

def get_all_levels():
    levels = set(logging._nameToLevel.keys())
    levels.remove('WARNING')
    return [l.lower() for l in levels]