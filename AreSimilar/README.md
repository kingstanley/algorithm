Two arrays are said to be semilar if one can be obtained from the other by swapping at most one pair of elements from the other

Example 
For a = [1,2,3] and b = [1,2,3] the output should be areSimilar(a,b) = true.
        The arrays are equal, no need to swap any value;

For a = [1,2,3] and b =[2,1,3] the output should be areSimilar(a,b) = true
        We can obtain b from a by swapping 1 and 2 in b

For a = [1,2,2] and b = [2,1,1] the output should be areSimilar(a,b) = false.
        Any swap of any two element either in a or in b won't make a and b equal.

Hint:
toString()
