#!/usr/bin/env bash

DECLINATION_ID=$(node -p "require('./package.json').declinationId")

npx @rollup-umd/documentation-cli variable \
  PACKAGE_NAME=$(node -p "require('./package.json').name") \
  PACKAGE_DESCRIPTION="$(node -p "require('./package.json').description")" \
  PACKAGE_VERSION=$(node -p "require('./package.json').version") \
  PACKAGE_PEERS="$(npx rollup-umd-scripts peer npm-install-cmd)" \
  NODE_VERSION=$(node --version) \
  NPM_VERSION=$(npm --version) \
  CI_REPOSITORY_URL=${CI_REPOSITORY_URL} \
  CI_PROJECT_URL=${CI_PROJECT_URL} \
  CI_PROJECT_NAMESPACE=${CI_PROJECT_NAMESPACE} \
  CI_PROJECT_NAME=${CI_PROJECT_NAME} \
  IMG_SHIELD_PUBLISHING=$(npx rollup-umd-scripts publish status --badge)

if [[ "$DECLINATION_ID" = cli  ]]; then
  echo "[Documentation] generating CLI documentation"
  npx @yeutech-lab/rollup-umd-documentation-cli
fi
