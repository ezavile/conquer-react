#!/bin/bash

set -e

"tsc" --noEmit --watch &
"parcel" ./src/index.html
