# Models Comparison
 For this section, the codes provided here are mainly used for comparison of models with a Neural ODE layer, against those without. 5 pre-trained models have been tested with their weights and results given. 
 
 Note that some codes were used as reference and should be credited as such:
 - HAGRID: https://github.com/hukenovs/hagrid
 - SODEF: https://github.com/kangqiyu/SODEF

## Directories
- hagrid/classifier/config:
   - Configuration files used to train the models
   - config: has all config files
   - config*: has their respective configurations
   - Has format: \(model)\_(model\_specifics)\_(test or train)\_(type of dataset)
<br>
- hagrid/classifier/models/Testing_testing_123
  - Architecture of the ODE models
<br>
- hagrid/DATASET_DOWNLOAD_SCRIPTS
   - Dataset downloading + blurring scripts
<br>
- hagrid/TRAINED_MODELS
  - Pretrained weights of our runs
  - The respective configuration during train and test can be found in the config directory
<br>
- hagrid/experiments (after executing train and test)
  - Location of each run/train of the model
  - Note that each run/epoch is saved, and the final
  - Name of the experiment file can be changed in the config file 

## Installation
```
git clone ***********************
cd hagrid
conda create -n gestures python=3.9 -y
conda activate gestures
pip install -r requirements.txt
# Export the environment variable to the current directory
# Note that the base directory need not be the working directory, as long as all references are made the variable BASE_HAGRID_DIRECTORY
 export BASE_HAGRID_DIRECTORY=`pwd`
```
## Downloading datasets + Bluring
To quickly download the dataset and generate blurry ones, we have made a few scripts to speed up this process
```
cd DATASET_DOWNLOAD_SCRIPTS
```
Downloading dataset
```
./download_dataset.sh # THEN WAIT UNTIL FINISH DOWNLOADING
```
Unzipping dataset
```
./zippers.sh   #THEN WAIT UNTIL FINISH DOWNLOADING
```
Generating blurry test dataset
```
#./blurry.sh <kernel size>
# E.g:
./blurry.sh 30
```
## Train/Test models
To train and test, the syntax is such:
```
# To train: python -m classifier.run --command 'train' --path_to_config <PATH>
# E.g:
python -m classifier.run --command 'train' --path_to_config $BASE_HAGRID_DIRECTORY/classifier/config/mobilev3_small_ode_train.yaml

# To test:  python -m classifier.run --command 'test' --path_to_config <PATH>
# E.g:
python -m classifier.run --command 'test' --path_to_config $BASE_HAGRID_DIRECTORY/classifier/config_test_30/mobilev3_small_ode_test_30.yaml
```
## Results (Most recent run)
| Filename  |  Gesture Accuracy (Kernel 10) | Gesture Accuracy (Kernel 30) | Gesture Accuracy (Kernel 50) | 
| --------- | --------- | -------- | -------- |
| MobileNetV3_small.pth | 88.9% | 66.3% | 43.2% |
| MobileNetV3_large.pth  | 91.6% | 73% | 50.6% |
| MobileV3_small_ODE.pth | 93.3% | 75.6% | 52.5% |
| MobileV3_large_ODE.pth | 94.5% | 78.0% | 55.6% |
| ResNet18.pth | 95.4% | 72.9% | 49.4% |
