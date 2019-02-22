#!/bin/bash

set -euo pipefail

ORIGIN=${ORIGIN:-grpc}
BRANCH=${BRANCH:-master}

echo "Building protoc image"
protoc_id=''
build_args="--build-arg ORIGIN=${ORIGIN} --build-arg BRANCH=${BRANCH} ./docker/protoc"
docker build ${build_args}
protoc_id=$(docker build -q ${build_args})

function protoc() {
    docker run -v $(pwd):/opt/proto ${protoc_id} $@
}

mkdir -p ${BRANCH}
protoc \
    --js_out=import_style=commonjs:./${BRANCH} \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./${BRANCH} \
    --proto_path=./proto \
    proto/example/example.proto \
    proto/other/other.proto

protoc \
    --ts_out=./ts-protoc-gen \
    --proto_path=./proto \
    proto/example/example.proto \
    proto/other/other.proto