import os
import urllib.request

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

images = {
    "public/images/essaouira/1.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/80/%22Breite_Mauern_sch%C3%BCtzen_die_Bev%C3%B6lkerung_von_Essaouira.%22_15.jpg",
    "public/images/essaouira/2.jpg": "https://upload.wikimedia.org/wikipedia/commons/d/d4/%22Drehort_f%C3%BCr_viele_Filme_und_Serien%22._14.jpg",
    "public/images/essaouira/3.jpg": "https://upload.wikimedia.org/wikipedia/commons/6/64/%22Ein_Schmelztiegel_der_Kulturen%22._16.jpg",
    "public/images/essaouira/4.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/ea/%22Breite_Mauern_sch%C3%BCtzen_die_Bev%C3%B6lkerung_von_Essaouira.%22_08.jpg",
    "public/images/tinghir/1.jpg": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Assole_in_Tinghir.jpg",
    "public/images/tinghir/2.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Kasbha_Tinghir_Todra_Morocco_-_panoramio_%282%29.jpg",
    "public/images/tinghir/3.jpg": "https://upload.wikimedia.org/wikipedia/commons/1/14/Morocco_Gorges_du_Todra_20110321_1.jpg"
}

# The 3rd tinghir image was broken, let's use a different reliable wikimedia one for it
images["public/images/tinghir/3.jpg"] = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Todgha_Gorge_1.jpg"

import time

for path, url in images.items():
    if os.path.exists(path) and os.path.getsize(path) > 0:
        continue
    print(f"Downloading {path}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success: {path}")
        time.sleep(2)
    except Exception as e:
        print(f"Failed {path}: {e}")
