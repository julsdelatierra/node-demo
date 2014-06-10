#!/usr/bin/env bash

NAME=node-demo

NGINX_LOG_DIR=/var/log/nginx
WWW_DIR=/var/www
NGINX_CONFIG_DIR=/etc/nginx/conf.d
INIT_DIR=/etc/init.d

# Symlink nginx and init scripts
ln -s $WWW_DIR/$NAME/server/node-demo.conf $NGINX_CONFIG_DIR/node-demo.conf
ln -s $WWW_DIR/$NAME/server/node-demo $INIT_DIR/node-demo

# Make dir for logs and pids
mkdir $NGINX_LOG_DIR/$NAME
mkdir $WWW_DIR/logs
mkdir $WWW_DIR/pids
