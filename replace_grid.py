import sys

html_file = r"c:\Users\georg\OneDrive\Desktop\GG website_\GG\portfolio-2 copy.html"
grid_file = r"c:\Users\georg\OneDrive\Desktop\GG website_\GG\new_grid.html"

with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

with open(grid_file, 'r', encoding='utf-8') as f:
    new_grid = f.read()

start_marker = '                        <!-- video grid -->'
end_marker = '                        </div><!-- video grid wrap end -->'

start_idx = html.find(start_marker)
end_idx = html.find(end_marker) + len(end_marker)

if start_idx == -1:
    print("ERROR: start marker not found")
    sys.exit(1)
if end_idx == len(end_marker) - 1:
    print("ERROR: end marker not found")
    sys.exit(1)

print(f"Replacing chars {start_idx}-{end_idx} ({end_idx-start_idx} chars)")

before = html[:start_idx]
after = html[end_idx:]
new_html = before + new_grid + after

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f"Done. New file size: {len(new_html)} chars")
