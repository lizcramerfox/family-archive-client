#!/bin/bash

curl "http://localhost:4741/memories" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "memory": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "people": "'"${PEOPLE}"'"
    }
  }'

echo
