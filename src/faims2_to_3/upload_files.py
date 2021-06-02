import requests
import json


def upload_files(*, output_path, url):
    with open(output_path / "ui-specification.json") as f:
        ui_spec = json.load(f)
    r = requests.put(url + "/ui-specification", json=ui_spec)
    r.raise_for_status()
