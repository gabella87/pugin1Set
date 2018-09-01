#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Sep  1 18:01:54 2018

@author: gabella
"""

import MySQLdb
import mysql.connector

baseRelacional = MySQLdb.connect(host="sitedev.ipxon.net",    # your host, usually localhost
                     user="tesis",         # your username
                     passwd="tesis.2018",  # your password
                     db="tesis")        # name of the data base

cur = baseRelacional.cursor()

sql = ("SELECT * from GuilleCPU")
cur.execute(sql)
filas = cur.fetchall()
for fila in filas:
    print(fila)
    