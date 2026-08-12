import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_images(page_title):
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={page_title}&prop=images&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req, context=ctx).read()
    data = json.loads(response)
    
    pages = data['query']['pages']
    image_titles = []
    for page_id in pages:
        for img in pages[page_id].get('images', []):
            if not img['title'].lower().endswith(('.svg', '.png', '.gif')):
                image_titles.append(img['title'])
    
    # Get direct URLs for the first 5 images
    for title in image_titles[:5]:
        title_encoded = urllib.parse.quote(title)
        img_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={title_encoded}&prop=imageinfo&iiprop=url&format=json"
        img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        img_resp = urllib.request.urlopen(img_req, context=ctx).read()
        img_data = json.loads(img_resp)
        
        img_pages = img_data['query']['pages']
        for p_id in img_pages:
            try:
                print(f"{page_title} -> {img_pages[p_id]['imageinfo'][0]['url']}")
            except:
                pass

print("Fetching Essaouira...")
get_images("Essaouira")
print("\nFetching Tinghir...")
get_images("Tinghir")
