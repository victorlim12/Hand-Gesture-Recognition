#!/bin/bash 

# 1. Download train dataset
myArray=("call" "fist" "like" "mute" "one" "peace" "rock" "stop_inverted" "three" "two_up" "dislike" "four" "ok" "palm" "peace_inverted" "stop" "three2" "two_up_inverted")

# Train dataset
for str in ${myArray[@]}; do
    nohup python download.py --train -d --targets $str --save_path . &
done

# Train annotations
nohup python download_copy.py --train -a --save_path ./train_annote &

# Subsample/test dataset
nohup python download.py --subset -d --save_path . &
nohup python download.py --subset -a --save_path . &

# Wait until Finish
echo "WAIT UNTIL FINISH DOWNLOADING"