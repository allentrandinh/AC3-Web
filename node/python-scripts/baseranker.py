import core_functions as cf
import sys
import json

# Assume that argv1 has the construct {id:'name_base',longitude:#,latitude:#}
name_base_list = []
base_list = []

# base input has format [{basename:...,longitude:...,latitude....}, {..} ]
base_info = json.loads(sys.argv[1])

# add corresponding names and coordinates to array
for element in base_info:
    name_base_list.append(element['basename'])
    base_list.append([float(element['longitude']), float(element['latitude'])])

# areas input has the format: [ {name:..., longitude:..., latitude:...., weight:...} ]
conflict_info = json.loads(sys.argv[2])
potential_conflict_areas = []
weight_conflict_areas = []

# add corresponding names and coordinates to array
for element in conflict_info:
    weight_conflict_areas.append(float(element['weight']))
    potential_conflict_areas.append(
        [float(element['longitude']), float(element['latitude'])])


# total_dis_to_all_areas is an array containing the total distance from that base to
# potential conflicting areas after taking into account the weights of each area, order is the order of base_list
total_dis_to_all_areas = []
unadjusted_total_dis = []
# update dictionary
for base in base_list:
    total = 0
    unadjusted = 0
    for i in range(len(potential_conflict_areas)):
        total += cf.dist_2Coordinates(base,
                                      potential_conflict_areas[i])*weight_conflict_areas[i]
        unadjusted += cf.dist_2Coordinates(base, potential_conflict_areas[i])
    total_dis_to_all_areas.append(total)
    unadjusted_total_dis.append(unadjusted)


# print out order of which
# print("The ascending order of bases with regards to total distance to all potential conflicting areas are: ")
# sorted_total_dis = sorted(total_dis_to_all_areas)
# for i in range(len(base_list)):
#     cur_index = total_dis_to_all_areas.index(sorted_total_dis[i])
#     print(f"{name_base_list[cur_index]} "
#           f"- adjusted total distance: {sorted_total_dis[i]} miles "
#           f"- unadjusted total distance: {unadjusted_total_dis[cur_index]}")
sorted_total_dis = sorted(total_dis_to_all_areas)
respond = {'intro': 'The ascending order of bases with regards to total distance to all potential conflicting areas are:',
           'base': []}
for i in range(len(base_list)):
    cur_index = total_dis_to_all_areas.index(sorted_total_dis[i])
    respond['base'].append(
        [name_base_list[cur_index], sorted_total_dis[i], unadjusted_total_dis[cur_index]])
    # print(f"{name_base_list[cur_index]} "
    #       f"- adjusted total distance: {sorted_total_dis[i]} miles "
    #       f"- unadjusted total distance: {unadjusted_total_dis[cur_index]}")

output = json.dumps(respond)
print(output)
sys.stdout.flush()
