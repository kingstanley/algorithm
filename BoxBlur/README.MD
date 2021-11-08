Last night you had to study but decided to party instead. Now there is a black and white photo of you about to go viral. You can not let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content. The algorithm works as follows: Each pixel in the resulting image equal to the average of the input image values from the 3\*3 square with the center at x. All pixels at the edges are cropped.
As pixels value is an integer, all fractions should be rounded down.

Example:

For image = [[1 ,1,1],
             [1,7,1],
             [1,1,1]]

In the given example, all boundary pixels were cropped, and the value of the pixel in the center was obtained as (1+1+1+1+7+1+1+1+1) = ~rounded down~ = 1;
