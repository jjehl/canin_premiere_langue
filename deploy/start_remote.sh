#!/usr/bin/env bash

docker compose --env-file ../version-front-$1.env -f docker-compose-$1.yaml up -d
