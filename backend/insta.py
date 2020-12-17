
from instabot import Bot
from pymongo import MongoClient



bot = Bot()
bot.login(username="iamsheza5", password="sheza777")
#url = "https://www.instagram.com/p/CIdERw5l9ym/"

url = sys.argv[1]
post_id = bot.get_media_id_from_link(url)

comments = bot.get_media_comments_all(post_id)

client = MongoClient('mongodb+srv://umair:12345@cluster0.hgkkb.mongodb.net/<dbname>?retryWrites=true&w=majority')
db = client.get_database('mydb')
queries = db.insta

key = { "URL" : url }
data = {"URL" : url}
queries.update(key, data, upsert= True)


for i,comment in enumerate(comments):
    if comment['type'] == 0 :
        print(comment['text'], end= "\n\n")
        queries.find_one_and_update({'URL' : url},{ '$push' : {'comment': comment['text']}}) 

