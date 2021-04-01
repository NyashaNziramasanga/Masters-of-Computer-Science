# Week5 Image Restoration and Reconstruction

## 1. Degradation and noise types

Enhancement vs degradation

### Enhancement

- Improve the image in some way
- Subjective process

### Restoration

- Recover an image that has been degraded by using prior knowledge of the degradation
- Objective process apply the inverse process

![degradation-restoration](images/degradation-restoration.png)

- The goal is to find an approximation `^f` that is similar to the same image `f`
- The more you know about degradation and noise, the better estimation we get

### Noise types

![noise-types](images/noise-types.png)

### Image histograms and noise types

We use **image histograms** to estimate the parameters of most kinds of noise

![image-histograms](images/image-histograms.png)

![image-histograms-2](images/image-histograms-2.png)

## 2. Estimating noise parameters

1. Get a distribution of pixel values for one (uniform) region in the image. Get the mean and variance
2. Try to fit all the distributions with the parameter s obtained, pick the one with the smallest error
3. Select a strip, too small -> not enough statistics, too large -> risks picking two distinct regions

## 3. Filters based on order statistics

## 4. Modelling degradation

### Image degradation and restoration process

- Having an estimate for `H(u,v)`
- If we manage to estimate the filter:
  - Take the observed image 
  - Apply a fourier transform
  - Fourier transform fo the estimated filter
  - Divide one by the other `F(v,u)`
  - Get F back to the spatial domain, and we have `f(x,y)` reconstructed

This is inverse filtering