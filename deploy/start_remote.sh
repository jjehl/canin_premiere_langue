#!/usr/bin/env bash
docker compose --env-file ../version.env -f docker-compose-$1.yaml up -d --remove-orphans
