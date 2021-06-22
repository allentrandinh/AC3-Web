import sys
import json


base_info = json.loads(sys.argv[1])
print(base_info)
sys.stdout.flush()