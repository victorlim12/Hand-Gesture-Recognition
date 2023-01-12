#!/bin/bash 

myArray=("call" "fist" "like" "mute" "one" "peace" "rock" "stop_inverted" "three" "two_up" "dislike" "four" "ok" "palm" "peace_inverted" "stop" "three2" "two_up_inverted")

# Create copy
cp -R test test_$1

# Move blurrer file over
for str in ${myArray[@]}; do
	cp blurrer.py  ./test_$1/$str/blurrer.py
#	chmod 777 $str"/blurrer.py"
done

# Start blurring
for str in ${myArray[@]}; do
	cd ./test_$1/$str/
	pwd
	echo test_$1/$str/
	nohup python blurrer.py $1 &
	cd ..
	cd ..
done