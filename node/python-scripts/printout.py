import sys
import json

# input = sys.argv[1]
base_info = json.loads(sys.argv[1])
print(base_info)
print(type(base_info))
# print(base_info)
sys.stdout.flush()