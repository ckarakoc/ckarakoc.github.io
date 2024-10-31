"""
Reads './projects_github.json' and writes it to './projects_init.json'.
The 'projects_init.json' file is the initial start which can be copy-pasted into the actual 'projects.json' file.
"""
import json, os

script_dir = os.path.dirname(os.path.abspath(__file__))
init_json_file_path = os.path.join(script_dir, 'projects_init.json')
github_json_file_path = os.path.join(script_dir, 'projects_github.json')

with open(github_json_file_path, 'r') as f:
  github_data = json.load(f)

# {
#     "name": "",
#     "visibility": "",
#     "url": "",
#     "languages": [
#       "C",
#       "C++",
#       "Makefile",
#       "Lua"
#     ],
#     "license": null
# }
data = []
for item in github_data:
  temp = {
      "name": item["name"],
      "repo_url": item["url"],
      "image_url": "/images/repo/images/",
      "description": "",
      "tags": item["languages"],
      "visibility": item["visibility"],
      "tutorial": False,
      "school": False,
      "grade":0,
      "downloadables":[],
      "license": item["license"],
  }
  data.append(temp)

with open(init_json_file_path, 'w') as f:
  json.dump(data, f, indent=2)

print('projects_init.json created successfully!')
