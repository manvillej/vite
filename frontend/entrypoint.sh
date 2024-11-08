#!/bin/sh

MAX_RETRIES=3 

for i in $(seq 1 $MAX_RETRIES); do
    # Replace this with your actual command
    timeout 30s npm install --loglevel=silly --production=false && break 

    if [ $i -lt $MAX_RETRIES ]; then
        echo "Retry attempt $i failed"
        sleep 2
    else
        echo "Max retries exceeded, exiting."
        exit 1
    fi
done