#!/usr/bin/env bash

NAME=demo

NGINX_LOG_DIR=/var/log/nginx
WWW_DIR=/var/www
NGINX_CONFIG_DIR=/etc/nginx/conf.d
INIT_DIR=/etc/init.d

# Symlink nginx and init scripts
ln -s $WWW_DIR/$NAME/server/$NAME.conf $NGINX_CONFIG_DIR/$NAME.conf
ln -s $WWW_DIR/$NAME/server/$NAME $INIT_DIR/$NAME

# Make dir for logs and pids
mkdir $NGINX_LOG_DIR/$NAME
mkdir $WWW_DIR/logs
mkdir $WWW_DIR/pids
