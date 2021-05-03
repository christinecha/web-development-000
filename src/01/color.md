## Why do we need to talk about color?

In our previous example, we set the `color` property (which affects text color) to words like `red` or `blue`. There's a long list of these preset colors that browsers will accept. Some of my favorite are:

- `aliceblue`
- `firebrick`
- `papayawhip`
- `oldlace`

> ILLUSTRATION: literal fun mixes with the ones up there? Or any of these work too: https://www.w3.org/wiki/CSS/Properties/color/keywords

This is not a joke. Try these colors out and see for yourself!

(Some developers at some point in time were given the power to make up color names, and that's what they came up with.)

Here you can find all 147 predefined color names, or "color keywords", available in CSS: https://www.w3.org/wiki/CSS/Properties/color/keywords

But wait! Haven't I seen more than 147 colors on the internet? (Also, isn't it ridiculous to type "papayawhip" every time?)

## RGB (Red, Green, Blue) Color

Any color you see on your computer screen is produced by red, green, and blue lights shining out from it. This mix of color lights then blend together to make your brain think it's actually a single color!

Here's [a Wikipedia page how RGB works](https://en.wikipedia.org/wiki/RGB_color_model) and where it came from.

In CSS, the amount of each color light you want is measured from 0 to 255, 0 being none of that light and 255 being the most possible amount. So to specify the specific color you want to make, you have to define these amounts.

For example:

- `0` red, `0` green, and `0` blue = **black** (no light at all)
- `255` red, `0` green, and `0` blue = **bright red** (only red light - and the max amount of it)
- `255` red, `255` green, and `0` blue = **bright yellow** (red + green light)
- `255` red, `255` green, and `255` blue = **white** (all colors at full blast)

And then, to actually use these mini recipes in your code, you'll need the proper syntax:

- Black: `rgb(0,0,0)`
- Bright Red: `rgb(255,0,0)`
- Bright Yellow: `rgb(255,255,0)`
- White: `rgb(255,255,255)`

The format you need is `rgb`, then the color values in order (red, then green, then blue) in parentheses. The numbers must be separated by commas. As seen in some previous CSS, everything must be lowercase.

## Applying color values to styles

Now that you know how to code a specific color value, you can use it in your CSS styles!

Previously we were using color shortcuts "red" and "pink":

```html
<div style="color: red; background-color: pink;">Test</div>
```

Now try putting in your own custom RGB colors!

```html
<div style="color: rgb(200,120,0); background-color: rgb(90,20,30);">Test</div>
```

Do you know what colors these combinations will make? Well, neither can I (besides some educated guesses). Don't worry about having to memorize these numbers or even being able to know what color they are at a glance. There are so many tools that will do this for you!

## Hex Colors

You can also format RGB colors as "hexadecimal" numbers, often called "hex codes" or "hex colors". It's the same concept - three numbers for red, green, and blue amounts - just formatted differently:

```
#ae13f4
```

That probably looks confusing. Let's break it down. The `#` at the beginning is a required prefix to indicate you're using a hex code. This will be the same for every color. Then a code of exactly 6 characters.[^1]

These 6 characters are actually 3 pairs; the first two represent the R (red) amount, the next two are for G (green), and finally the last two are for B (blue). Believe it or not, each of these pairs still just translates to a number from 0 to 25!

```
Red amount:   ae = 174
Green amount: 13 = 19
Blue amount:  f4 = 244
```

So that means these should look exactly the same:

```html
<div style="background-color: rgb(174,19,244);">Test</div>
```

```html
<div style="background-color: #ae13f4;">Test</div>
```

Confused? The reason you see letters and numbers is because we're counting in base 16.

Usually we count in base 10 using the numbers 0 - 9. In base 16, you need 16 digits instead of 10. Since those numbers don't exist in our day-to-day usage, we pull in letters: 0 - 9, then a - f. (More info: https://simple.wikipedia.org/wiki/Hexadecimal)

```
Hexadecimal (Base 16): 0 1 2 ... 8 9 a  b  c  d  e  f
"Normal" (Base 10):    0 1 2 ... 8 9 10 11 12 13 14 15
```

The highest possible number using only two digits is `ff`, which, not coincidentally, is the equivalent of `255` - sound familiar?

## All together now!

Now you've learned three different ways to format a color value in CSS. These three blocks should all look identical:

```html
<div style="background-color: black;"></div>
<div style="background-color: rgb(0,0,0);"></div>
<div style="background-color: #000000;"></div>
```

And so should these:

```html
<div style="background-color: red;"></div>
<div style="background-color: rgb(255,0,0);"></div>
<div style="background-color: #ff0000;"></div>
```

You'll see all three types used very commonly, so it's important to be able to recognize and understand them all. In your own use, choose whatever feels more comfortable for each case.

### Footnotes

[^1]: You might discover, by accident or otherwise, that a 3-character hex code (ex. `#fff`) also works. This format is sometimes used as a shorthand when all three (R, G, and B) hexadecimal numbers are doubles of the same character. Ex. `#f0a` actually denotes `#ff00aa`, `#b9c` is `#bb99cc`, etc.
