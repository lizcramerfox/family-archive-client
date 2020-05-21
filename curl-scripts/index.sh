#!/bin/bash

curl "http://localhost:4741/memories" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
