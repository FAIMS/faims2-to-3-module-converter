import re
from pprint import pprint

def localise_arch16n(key, arch16n_dict):
    
    key = re.sub(r"\{|\}", "", key.strip())
    failed_key = re.sub(r"_+", " ", key)
    #print(key, arch16n_dict[key])
    return arch16n_dict.get(key, f"arch16n_fail: {failed_key}").strip()

def get_arch16n_dict(arch16n_file):
  arch16n_dict = {}
  with open(arch16n_file, "r") as arch16n:
    for line in arch16n:
      key, value = line.split("=", maxsplit=1)
      arch16n_dict[key] = value
  #pprint(arch16n_dict)
  return arch16n_dict