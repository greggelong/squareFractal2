# revisiting the square fractal

add a depth

use sz = width / 3 \*\* dep;

to get the size as the seed is made of of width and height of 3 square

```
3^1 = 3 how many little squares height and with
3^2 = 9
3^3 = 27
3^4 = 81
3^5 = 243
```

but the number of seed shapes is

```
depth 1 = 1
2 = 3
3 = 9
4 = 27
5 = 81
```

i cannot figure out if there is a problem when the binnum[4] is zero is it making the correct moves. I am going to refactor to print empty and full spaces changes the color in the drawsquare

but now I am thinking it may be ok if that middle piece is still there as from step 1 to step 2 we have moved out a level so the first level is always in the center of an ever expanding world. so even if the center was blank in step one by step two we have just moved out a level and it is still there.

I have now satisfied myself that this is correct by using the feldman star and a feldman star without a center piece

101010101 and 101000101

```
101
000
101

101000101
000000000
101000101
000101000
000000000
000101000
101000101
000000000
101000101
```

in the above feldman star with out a center. step 2 will have something in the center as we have moved out a level expanded so the original missing piece is still there.

this is different than just cutting out each original block
