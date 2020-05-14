# Ex: TOKEN=tokengoeshere ID=idgoeshere TEXT=textgoeshere sh curl-scripts/memories/update.sh

curl "http://localhost:4741/memories/${ID}" \
  --include \
  --request PATCH \
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
