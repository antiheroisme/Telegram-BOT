#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install git
apt-get install wget
apt-get install proot
apt-get install cmake

git clone https://github.com/xmrig/xmrig
cd rip
mkdir build
cd build
cmake -DWITH_HWLOCK=OFF

echo "All dependencies have been installed, please run the command \"make\" to immediately start the script"