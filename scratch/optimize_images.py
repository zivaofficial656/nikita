import os
from PIL import Image

IMAGE_DIR = 'public/images'

IMAGE_MAP = {
    'n1.jpg': 'nikita-spa-aromatherapy-preparation-tray.webp',
    'n2.webp': 'luxury-couple-spa-suite-koramangala.webp',
    'n3.webp': 'private-hydrotherapy-suite-bengaluru.webp',
    'n4.webp': 'circular-bed-therapy-suite-bengaluru.webp',
    'n5.webp': 'spa-treatment-room-circular-layout-bengaluru.webp',
    'n6.webp': 'couple-massage-room-swan-art-koramangala.webp',
    'n7.webp': 'deep-tissue-massage-suite-koramangala.webp',
    'n8.webp': 'aromatherapy-massage-room-bengaluru.webp',
    'n10.webp': 'twin-massage-suite-ambient-glow-koramangala.webp',
    'n11.webp': 'thai-massage-platform-suite-koramangala.webp',
    'n12.webp': 'spa-relaxation-room-evening-ambiance-bengaluru.webp',
    'n13.webp': 'body-massage-spa-room-bengaluru.webp',
    'n14.webp': 'dual-therapy-room-fresh-linens-koramangala.webp',
    'n15.webp': 'couple-spa-room-jacuzzi-koramangala.webp',
    'n16.webp': 'in-suite-jacuzzi-relaxation-lounge-bengaluru.webp',
    'n17.webp': 'private-shower-dressing-corner-koramangala.webp',
    'n18.webp': 'spa-hydrotherapy-jacuzzi-ritual-koramangala.webp',
    'n19.webp': 'spa-vanity-gold-basin-amenities-bengaluru.webp',
    'n20.webp': 'swedish-massage-room-bengaluru.webp',
    'n21.webp': 'twin-treatment-suite-vanity-mirror-koramangala.webp',
}

results = []

for src_name, dst_name in IMAGE_MAP.items():
    src_path = os.path.join(IMAGE_DIR, src_name)
    dst_path = os.path.join(IMAGE_DIR, dst_name)
    
    if not os.path.exists(src_path):
        print(f"Warning: {src_path} not found")
        continue

    src_size = os.path.getsize(src_path)
    
    with Image.open(src_path) as img:
        width, height = img.size
        # Optimize with high quality WebP
        # For n18 which had massive uncompressed data, quality 85 achieves great size reduction
        q = 85 if src_name == 'n18.webp' else 88
        img.save(dst_path, 'WEBP', quality=q, method=6)
        
    dst_size = os.path.getsize(dst_path)
    savings = (1 - dst_size / src_size) * 100
    results.append({
        'src': src_name,
        'dst': dst_name,
        'dimensions': f"{width}x{height}",
        'src_size': src_size,
        'dst_size': dst_size,
        'savings': savings
    })

print(f"{'Source':<12} | {'SEO Destination':<45} | {'Dimensions':<12} | {'Before':<10} | {'After':<10} | {'Saved %'}")
print("-" * 105)
for r in results:
    print(f"{r['src']:<12} | {r['dst']:<45} | {r['dimensions']:<12} | {r['src_size']:<10} | {r['dst_size']:<10} | {r['savings']:.1f}%")
