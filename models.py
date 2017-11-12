from pymongo import MongoClient
con = MongoClient()

def returncollectionlist(dbstr):
    db = con[dbstr]
    tablelist = db.collection_names()
    return tablelist