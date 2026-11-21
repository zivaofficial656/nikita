import os
import re
from PIL import Image

referenced = set()
pattern = re.compile(r'/images/([a-zA-Z0-9_\-\.\%]+)')

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.html')):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as fp:
                for match in pattern.findall(fp.read()):
                    clean = match.split('?')[0].split('#')[0]
                    referenced.add(clean)

with open('index.html', 'r', encoding='utf-8') as fp:
    for match in pattern.findall(fp.read()):
        referenced.add(match.split('?')[0].split('#')[0])

print(f"Total unique images referenced in code: {len(referenced)}")

missing = []
valid = []
for ref in sorted(referenced):
    p = os.path.join('public/images', ref)
    if not os.path.exists(p):
        missing.append(ref)
    else:
        try:
            with Image.open(p) as img:
                valid.append((ref, img.format, img.size, os.path.getsize(p)))
        except Exception as e:
            missing.append(f"{ref} (CORRUPT: {e})")

print(f"Missing or corrupt images: {len(missing)}")
if missing:
    print("MISSING:", missing)
else:
    print("ALL REFERENCED IMAGES EXIST AND ARE VALID!")

print("\nVerified active images:")
for r, fmt, sz, bytes_sz in valid:
    print(f"  {r:<55} | {fmt:<5} | {sz[0]}x{sz[1]:<6} | {bytes_sz/1024:.1f} KB")
