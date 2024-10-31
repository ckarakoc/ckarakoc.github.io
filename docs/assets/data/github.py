"""
Gets all the repositories of user, based on his GITHUB_ACCESS_TOKEN in the .env file. Writes the relevant keys into './projects_github.json'.
"""
import requests, os, json
from dotenv import load_dotenv, find_dotenv

env_path = find_dotenv()
load_dotenv(env_path)

username = os.environ.get("GITHUB_USERNAME")
token = os.environ.get("GITHUB_ACCESS_TOKEN")

repos_url = f"https://api.github.com/user/repos"
repos_headers = {
  "Authorization": f"Bearer {token}",
  "Accept": "application/vnd.github+json",
}
repos_params = {
  "per_page": "100"
}

response = requests.get(repos_url, headers=repos_headers, params=repos_params)
data = response.json()

if response.links:
  next_link_url = response.links["next"]["url"]
  last_link_url = response.links["last"]["url"]
  while True:
    print(next_link_url)
    response = requests.get(next_link_url, headers=repos_headers, params=repos_params)
    data = data + response.json()
    if next_link_url == last_link_url:
      break
    next_link_url = response.links["next"]["url"]

script_dir = os.path.dirname(os.path.abspath(__file__))
json_file_path = os.path.join(script_dir, 'projects_github.json')

data = [{"name": item["name"], "visibility": item["visibility"], "url":item["html_url"], "languages":item["languages_url"], "license":item["license"]["name"] if item["license"] else None} for item in data]

for item in data:
  languages_url = item["languages"]
  languages_list = requests.get(languages_url, headers=repos_headers).json().keys()
  item["languages"] = list(languages_list)

with open(json_file_path, 'w') as f:
  json.dump(data, f, indent=2)

