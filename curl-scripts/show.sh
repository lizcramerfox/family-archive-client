# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/memories/show.sh

curl "http://localhost:4741/memories/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
