#!/bin/bash

# URL of your website
URL="https://ovw-3pigs.netlify.app/"

# How many times you want to send a request
COUNT=1000

# Loop to send requests
for ((i=1; i<=COUNT; i++))
do
    # Send request and measure time
    response=$(curl -o /dev/null -s -w "HTTP_CODE: %{http_code}, TIME_TOTAL: %{time_total}\n" $URL)
    
    # Print the response and time
    echo "Request $i: $response"
    
    # Sleep for 1 second to avoid hammering the server too quickly
    sleep 5
done
