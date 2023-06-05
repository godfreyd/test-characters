#!/bin/sh

# export NGINXPROXY

envsubst '$BACKEND_HOST $NODE_HOST' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"

