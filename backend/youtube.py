from pytchat import LiveChat
from pymongo import MongoClient
import sys

# client = MongoClient()
client = MongoClient("mongodb+srv://umair:12345@cluster0.hgkkb.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client["mydb"]
comments = db["customer"]


#url = "https://www.youtube.com/watch?v=mg7FweYjasE"
url = sys.argv[1]
livechat = LiveChat(url)
#livechat = LiveChat(sys.argv[1])
key = { "URL" : url }
data = {"URL" : url}
comments.update(key, data, upsert= True)


while livechat.is_alive():
  try:
    chatdata = livechat.get()
    for c in chatdata.items:
        print(f" [{c.author.name}]- {c.message}")
        username = c.author.name
        comment = c.message

        #comm = {
        #  "URL" : url
        #"comment" : [comment]
        #}
        
        comments.find_one_and_update({'URL' : url},{ '$push' : {'comment': comment}}) 

        chatdata.tick()
  except KeyboardInterrupt:
    livechat.terminate()
    break
