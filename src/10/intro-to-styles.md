### What are styles and how do they work?

Each HTML element is its own building block in a big empty canvas (the web page). And each of blocks can have its own style.

- Block 1 can be blue, with rounded corners and pink text inside.
- Block 2 can be jumping up and down, flashing yellow and purple!
- Block 3 can be always stuck at the top of the page.

All of these types of traits:

- color
- positioning
- animation
- shape
- size
- ... and much more

...can all be customized through styling. There is a long list of exact, specific characteristics we can change - one common technical term for them is "style properties". Each property has a name, and predefined options it can be set to. For instance:

- Set `color` to `red` to make the text color inside an element red.
- Set `background-color` to `blue` to make the background color of that element blue.

### Okay, so how do you add a style to an element?

There are two general ways to set these style properties on an HTML element.

1. Directly affect a SINGLE element.
2. Indirectly affect ANY NUMBER of elements.

Let's start with #1 - we'll come back to #2.

### Add style to one specific element.

Let's look at your HTML file. You should have a couple elements in there, like:

```
<h1>My Title</h1>
<p>Blah blah blah blah cats are weird.</p>
```

In this case, you've got two elements. One `h1`, one `p` - both with text inside.

The syntax for adding style onto an HTML element looks like this:

```
<h1 style="color: red; background-color: blue;">My Title</h1>
```

Syntax Rules:

- `h1` must still be the first thing after the opening bracket `<`
- There must be space between `h1` and `style`
- `style` must be lowercase
- `=` must come after `style`
- Each style property must be exactly written, all lowercase, i.e. `color` and `background-color`
- The value for each property comes directly after the name of the property, following a colon `:`
- A semicolon `;` MUST separate different style properties
- All the style properties must be in a single text group surrounded by quotes (either single `'` or double `"`)

## Exercise

Try adding some colors to both elements!

```
<h1 style="color: red; background-color: blue;">My Title</h1>
<p style="color: yellow; background-color: purple;">Blah blah blah blah cats are weird.</p>
```

Note: other features of this syntax are optional, or purely preferential. Here are some 100% valid ways to write this same code, although some people might say it looks "ugly" or "wrong."

```
<  h1 style  =  "color:     red;           background-color:blue">
  My Title
</h1>
```

As you'll keep seeing in code, a lot of the guidelines around spacing and formatting are opinions, not requirements.

## What other styles are there?
