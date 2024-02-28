import math

def getNewHT(AT, sWB, sHT):
    y = math.radians(180 - sHT)
    nWB = math.sqrt(sWB**2 + AT**2 - 2*sWB*AT*math.cos(y))
    nHT = math.degrees(math.acos((nWB**2 + AT**2 - sWB**2)/(2*nWB*AT)))
    return nWB, nHT 

print(getNewHT(10, 1199, 63.5))

