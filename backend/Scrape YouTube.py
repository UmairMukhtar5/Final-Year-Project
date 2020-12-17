from selenium import webdriver
import time
import re
import csv
import string
from pymongo import MongoClient
import sys

def isEnglish(s):
    try:
        s.encode('ascii')
    except UnicodeEncodeError:
        return False
    else:
        return True

client = MongoClient('mongodb+srv://umair:12345@cluster0.hgkkb.mongodb.net/<dbname>?retryWrites=true&w=majority')
db = client.get_database('mydb')
queries = db.youtube





driver = webdriver.Chrome("C:\webdrivers\chromedriver.exe")
#url = 'https://www.youtube.com/watch?v=6BkpqgCSxFA'
url = sys.argv[1]
print("-------------------------------------------------------------------------------------------------------------------")
driver.get(url)

key = { "URL" : url }
data = {"URL" : url}
queries.update(key, data, upsert= True)


# driver.maximize_window()
time.sleep(5)
title = driver.find_element_by_xpath('//*[@id="container"]/h1/yt-formatted-string').text
print("Video Title: " + title)
print("-------------------------------------------------------------------------------------------------------------------")

comment_section = driver.find_element_by_xpath('//*[@id="comments"]')
driver.execute_script("arguments[0].scrollIntoView();", comment_section)
time.sleep(7)

last_height = driver.execute_script("return document.documentElement.scrollHeight")
while True:
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")

    # Wait to load page
    time.sleep(2)

    # Calculate new scroll height and compare with last scroll height
    new_height = driver.execute_script("return document.documentElement.scrollHeight")
    if new_height == last_height:
        break
    last_height = new_height

driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")

emoji_pattern = re.compile("["
                           u"\U0001F600-\U0001F64F"  
                           u"\U0001F300-\U0001F5FF"
                           u"\U0001F680-\U0001F6FF"
                           u"\U0001F1E0-\U0001F1FF"
                           "]+", flags=re.UNICODE)

name_elems=driver.find_elements_by_xpath('//*[@id="author-text"]')
comment_elems = driver.find_elements_by_xpath('//*[@id="content-text"]')
num_of_names = len(name_elems)
for i in range(num_of_names):
    username = name_elems[i].text    # .replace(",", "|")
    # username = emoji_pattern.sub(r'', username)
    # username = str(username).replace("\n", "---")
    comment = comment_elems[i].text    # .replace(",", "|")
    # comment = emoji_pattern.sub(r'', comment)
    # comment = str(comment).replace("\n", "---")
    
    #if isEnglish(comment) == False:
     #   comment = "NOT ENGLISH"
        
    print(username + ": " + comment) # comment.translate({ord(i):None for i in '' if i not in string.printable})
    print("-------------------------------------------------------------------------------------------------------------------")
    queries.find_one_and_update({'URL' : url},{ '$push' : {'comment': comment}}) 




driver.close()
