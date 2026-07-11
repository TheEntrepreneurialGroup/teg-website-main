"""Compress source images to WebP. Only list assets that still have lossless originals."""
from PIL import Image
import os, sys

BASE = r"c:\Users\Corbi\...Corbi\Cormass\repo\TEG\teg-website-main\public"

# (relative_path, quality) — quality 80 is a good balance
IMAGES = [
    # Heroes
    (r"shared\heroes\hero-about.jpg", 80),
    # (r"shared\heroes\hero-subpage.avif", 80),  # already AVIF, skip
    # Team leads
    (r"about\team-leads\feristah-fenkci.png", 82),
    (r"about\team-leads\jonathan-babelotzky.png", 82),
    (r"about\team-leads\yassin-aboushelib.png", 82),
    (r"about\team-leads\berkay.png", 82),
    (r"about\team-leads\ahmed-kaddour.png", 82),
    (r"about\team-leads\finn.png", 82),
    # Add new source images here before converting them to WebP in the app.
]

saved_total = 0
for rel_path, quality in IMAGES:
    src = os.path.join(BASE, rel_path)
    if not os.path.exists(src):
        print(f"  SKIP (not found): {rel_path}")
        continue

    name = os.path.splitext(os.path.basename(rel_path))[0]
    dst = os.path.join(os.path.dirname(src), name + ".webp")

    img = Image.open(src)
    # Convert RGBA→RGB for JPEG sources to avoid WebP alpha overhead
    if img.mode == "RGBA":
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[3])
        img = bg
    elif img.mode != "RGB":
        img = img.convert("RGB")

    img.save(dst, "WEBP", quality=quality, method=6)

    src_size = os.path.getsize(src)
    dst_size = os.path.getsize(dst)
    saved = src_size - dst_size
    saved_total += saved
    ratio = (1 - dst_size / src_size) * 100
    print(f"  {rel_path}: {src_size//1024}KB → {dst_size//1024}KB (saved {ratio:.0f}%)")

print(f"\nTotal saved: {saved_total//1024}KB ({saved_total//(1024*1024)}MB)")
