#!/bin/bash 

# Unzipping train datasets
echo UNZIP_TRAIN
myArray=("call" "fist" "like" "mute" "one" "peace" "rock" "stop_inverted" "three" "two_up" "dislike" "four" "ok" "palm" "peace_inverted" "stop" "three2" "two_up_inverted")

cd train
for str in ${myArray[@]}; do
    nohup unzip $str.zip -d $str &
    #realpath `find -name $str.zip`
done
cd ..

# Unzipping annotations
echo UNZIP_ANNOTE
cd train_annote/train2___
nohup unzip ann_train_val.zip &
cd ..
cd ..

# Chaning subsample to test and unzipping
echo UNZIP_TEST
mv subsample test
cd test
nohup unzip ann_subsample.zip &
nohup unzip subsample.zip &
cd ..