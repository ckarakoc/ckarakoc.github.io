"""
Sorts the './projects.json' based on the 'name' key.
"""
import os, json

script_dir = os.path.dirname(os.path.abspath(__file__))
json_file_path = os.path.join(script_dir, 'projects.json')

with open(json_file_path, 'r') as f:
  data = json.load(f)

sorted_data = sorted(data, key=lambda x: x['name'])

with open(json_file_path, 'w') as f:
  json.dump(sorted_data, f, indent=2)

print('Data sorted successfully!')
