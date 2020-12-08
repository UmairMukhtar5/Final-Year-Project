from pytchat import LiveChat
from pymongo import MongoClient
import sys

# client = MongoClient()
client = MongoClient("mongodb+srv://umair:12345@cluster0.hgkkb.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client["mydb"]
comments = db["customer"]



#livechat = LiveChat("https://www.youtube.com/watch?v=s4Pw40IPZo4")
livechat = LiveChat(sys.argv[1])



while livechat.is_alive():
  try:
    chatdata = livechat.get()
    for c in chatdata.items:
        print(f" [{c.author.name}]- {c.message}")
        username = c.author.name
        comment = c.message

        comm = {
        "name" : username,
        "comment" : comment
        }
        comments.insert_one(comm) 

        chatdata.tick()
  except KeyboardInterrupt:
    livechat.terminate()
    break
