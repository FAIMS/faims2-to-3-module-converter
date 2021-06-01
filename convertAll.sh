#!/usr/bin/env bash

set -euo pipefail

rm -rf log
mkdir log

python3 convert.py --module-dir oral-history/module/ --project-name "Oral History" > log/oralHistory.log
python3 convert.py --module-dir Lake-Mungo/ --project-name "Lake Mungo" > log/lakeMungo.log
python3 convert.py --module-dir CSIRO-Geochemistry-Sampling/module/ --project-name "CSIRO Geochem" > log/csiroGeochem.log