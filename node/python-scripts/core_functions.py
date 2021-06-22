import math
import haversine as hs

def degree2rad(degree_angle):
    return degree_angle*(math.pi/180)

def oneDegreeLongitude_calculator(latitude):
    #standard longitude at equator
    return math.cos(degree2rad(latitude))*69

def average_oneDegreeLongitude(longitude_at_base,longitude_at_conflict):
    return (longitude_at_base+longitude_at_conflict)/2

#calculate the distance between two bases
def center_distance(first_center,second_center):
    '''
    :param first_center: coordinate of first point, 2 values in a list
    :param second_center: coordinate of second point, 2 values in a list
    :return: distance between two center points
    '''
    return (math.sqrt((first_center[0]-second_center[0])**2+(first_center[1]-second_center[1])**2))


#calculate area of overlap between two center
def overlapping_area(first_center,r1,second_center,r2):
    '''
    assumption is that r1 > r2
    :param first_center: coordinate of first circle
    :param r1: radius of first circle
    :param second_center: coordinate of second circle
    :param r2: radius of second circle
    :return: area overlap between two circles of known centers and radius
    '''
    distance = center_distance(first_center,second_center)
    if distance >= (r1+r2):
        return 0
    elif distance <= (r1-r2):
        #second circle inside first circle
        return math.pi*(r2**2)
    else:
        d1 = (r1**2 - r2**2 + distance**2)/(2*distance)
        d2 = distance - d1
        #math.acos returns radian
        return (r1**2)*math.acos(d1/r1)-d1*(math.sqrt(r1**2-d1**2))+(r2**2)*math.acos(d2/r2)-d2*math.sqrt(r2**2-d2**2)

def dist_2Coordinates(coord_1,coord_2):
    '''
    :param coord_1: longitude, latitude
    :param coord_2: longitude, latitude
    :return:
    '''
    return(hs.haversine(coord_1, coord_2, unit=hs.Unit.MILES))
