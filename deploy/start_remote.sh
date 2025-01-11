#!/usr/bin/env bash
docker compose -f docker-compose-$1.yaml up --env-file version.env   -d --remove-orphans
