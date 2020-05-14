# Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/memories/destroy.sh

curl "http://localhost:4741/memories/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
