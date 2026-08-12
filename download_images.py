import os
import urllib.request

base_path = r"C:\Users\Applag\OneDrive - um5.ac.ma\Desktop\projet_essaouira\public\images"
os.makedirs(base_path, exist_ok=True)

images = {
    "essaouira_bg.jpg": "https://upload.wikimedia.org/wikipedia/commons/3/36/Essaouira_street.jpg",
    "essaouira_medina.jpg": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Essaouira_-_Medina_1.jpg",
    "essaouira_port.jpg": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Essaouira_port_2.jpg",
    "essaouira_beach.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/87/Morocco_Essaouira_ramparts.jpg",
    
    "tinghir_bg.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Tinghir_Oasis.jpg",
    "tinghir_oasis.jpg": "https://upload.wikimedia.org/wikipedia/commons/9/91/Tinerhir_gorge.jpg",
    "tinghir_kasbah.jpg": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Kasbah_Tinghir.jpg",
    "tinghir_gorge.jpg": "https://upload.wikimedia.org/wikipedia/commons/1/14/Morocco_Gorges_du_Todra_20110321_1.jpg"
}

opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')]
urllib.request.install_opener(opener)

for name, url in images.items():
    filepath = os.path.join(base_path, name)
    print(f"Downloading {name}...")
    try:
        urllib.request.urlretrieve(url, filepath)
        print(f"Success: {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
