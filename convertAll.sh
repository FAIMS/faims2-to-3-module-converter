#!/usr/bin/env bash

if [ "$(ls -A oral-history)" ]; then
	echo "submodules already downloaded"
else
git submodule init
git pull --recurse-submodules
fi

pip install .

set -euo pipefail

rm -rf log
mkdir log

# python3 convert.py --module-dir oral-history/module/ --project-name "Oral History" > log/oralHistory.log
# python3 convert.py --module-dir Lake-Mungo/ --project-name "Lake Mungo" > log/lakeMungo.log
# python3 convert.py --module-dir CSIRO-Geochemistry-Sampling/module/ --project-name "CSIRO Geochem" > log/csiroGeochem.log

rm -rf faims3-oral-history/ faims3-Lake-Mungo faims3-CSIRO-geochem
mkdir faims3-oral-history faims3-Lake-Mungo faims3-CSIRO-geochem

echo "oral history"
faims2-to-3 oral-history/module/ faims3-oral-history/
echo "lake mungo"
faims2-to-3 Lake-Mungo/ faims3-Lake-Mungo/
echo "geochem"
faims2-to-3 CSIRO-Geochemistry-Sampling/module/ faims3-CSIRO-geochem/