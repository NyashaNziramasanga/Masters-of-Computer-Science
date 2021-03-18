# Week3 Elements of Visual Perception

## Structure of the human eye

![human eye](images/human-eye.png)

## Visual Illusions

- What you see and what the computer sees is totally different
- depth perception
- Simultaneous contrast - machine sees different contrasts as the same, examples are how we interpret shadows
- Depth cues - object movement and how shadows work

### Considerations

- The end client is a human, so they need to understand what they see
- Don't expect your algorithm to see the same thing that you see

## Image sensing and acquisition

- Incoming energy, how to structure the data and represent it
- Output result and digitalising the response

### Image formation and representation

The digitalization of the image

![digitalization](images/digitalization.png)

- uses a sampling and quantization process
- sampling plots the  the discretization in space
- quantization used to show the intensity of every signal
- The more information the finer and clearer and more data is on the image

### Three ways of representing a digital image

1. **3 Dimensional function**
2. **Visual intensity array**
3. **Matrix** - each point represents a value which represents the intensity of the pixel

### what is an image

- A 2D function **f(x,y)**
- **(x,y)** represents the spatial coordinates
- The values are proportional to the energy intensity radiated by a physical source
- non-negative and finite

## Representation Digital Images

Coordinates used to represent a digital imahe with a one-to-one correspondence between x and y axis

[representation](images/representation.png)

Matrix representation of `f(x,y)`

[matrix](images/matrix.png)

- `M x N` matrix should be positive values and `L` being the intensity
- The larger the matrix the more memory is needed to store the image

### Dynamic Range

- Range of values spanned by the Gray Scale
- The **upper limit** is **saturation** that is the maximum detectable intensity
- The **lower limit** is **noise** that is the minimum detectable intensity

[noise and saturation](images/noise-saturation.png)

### Image Contrast

- Image contrast is the difference in intensity between the highest and lowest intensity levels on an image
- Contrast Ratio - Ratio of the luminance of the brightest color (white) to that of the darkest color (black) that the systems in capable of producing
- High dynamic range = high contrast

## Fundamental Maths