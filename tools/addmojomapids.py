#!/usr/bin/python
import os,sys,json
sys.path.append("/opt/livingdata/lib")
from livdattable import *
def addmojomapids(featureCollection,prefix):
	index=0
	for feature in featureCollection['features']:
		feature['properties']['mojomapid']=prefix+"-"+str(index)
		index+=1
	return featureCollection

def genfeaturetables(featureCollection):
	t=Table()
	colnames=featureCollection['features'][0]['properties'].keys()
	print colnames
	t.colnames=colnames
	for feature in featureCollection['features']:
		t.matrix.append(feature['properties'])
	return t

if __name__=="__main__":
	infile=sys.argv[1]
	outfile=sys.argv[2]
	f=open(infile,"r")
	featureCollection=json.loads(f.read())
	f.close()
	print len(sys.argv)
	if len(sys.argv)<4:
		prefix=os.path.split(infile)[1].split(".")[0]
	print prefix
	outCollection=addmojomapids(featureCollection,prefix)
	of=open(outfile,"w")
	of.write(json.dumps(outCollection, indent=4, sort_keys=True))
	of.close()
	csvname=prefix+".csv"
	
	
