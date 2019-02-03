FROM node:10-slim
RUN apt-get update && apt-get install -y git curl autoconf g++ libtool make libgflags-dev
WORKDIR /opt/build
RUN git clone --depth 1 https://github.com/protocolbuffers/protobuf && \
    cd protobuf && \
    git submodule update --init --recursive && \
    ./autogen.sh && \
    ./configure && \
    make -j$(nproc) -l$(nproc) install
ARG ORIGIN=grpc
ARG BRANCH=master
ARG COMMIT=HEAD
RUN echo "origin=${ORIGIN} branch=${BRANCH}"
RUN git clone --depth 1 --branch ${BRANCH} https://github.com/${ORIGIN}/grpc-web && \
    cd grpc-web && \
    make install-plugin
RUN npm install --unsafe-perm -g grpc-tools grpc-tools-ts ts-protoc-gen google-protobuf
ENV PATH=$PATH:/usr/local/bin LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
WORKDIR /opt/proto
ENTRYPOINT ["protoc"]