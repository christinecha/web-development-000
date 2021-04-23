## What is styling?

You could certainly build a perfectly functional and useful website just using plain HTML. But if you want to customize the look of it, you'll need to learn about styling.

> ILLUSTRATION: functional but drab/default vs functional & looks good? doesn't have to be literal, something fun?

Each HTML element in your `.html` file can have its own unique style.

```html
<div>Block 1</div>
<div>Block 2</div>
<div>Block 3</div>
```

If that's all you write in your `.html` file, your browser will just show three plain lines of text.

But with custom styling, you could put "Block 1" into a blue rectangle with rounded corners and pink text inside. "Block 2" could be jumping up and down, flashing yellow and purple! "Block 3" could always be stuck at the top of the page no matter how much you scroll.

You can style an element's color, positioning, animation, shape, size, and so much more. There are _hundreds_ of traits, called "properties", that you can customize! Just like how `<div>` is a specific element name in HTML, these properties belong to another language, called `CSS`.

Here are some very commonly used CSS properties:

- `color` - the color of the text inside the element
- `background-color` - the background color of the element
- `font-size` - the size of the text inside the element
- `width` & `height` - the width & height of the element
- ... and so on!

Each of these CSS properties has particular rules on what you can set them to. For instance, `font-size` can take a value like `10px`, which would make your text 10 pixels tall. You'll encounter an error if you just set it to `10` though, because as a rule, `font-size` requires units.

Hundreds of properties - each with their own particular set of rules. Yeah, this is often the most intimidating part of styling.

But don't worry! Learning to code isn't about memorizing everything. In fact, one of the most important skills a programmer can have is being able to search for answers online effectively.

If you forgot how `font-size` works, for instance, you could search "font-size CSS" and get endless explanations. With common issues, you can likely even search your specific problem, ex. "font-size 10 not working css" and someone on the other side of the globe will have a blog post about it. The beauty of the web!

> ILLUSTRATION: Some ridiculously specific question (not web related even) and someone on the other side of the world answering it?

## Okay, but how do you add these properties to an HTML element?

We previously learned about HTML attributes and how to use them to save information about a specific element. Like setting an image element's source:

```html
<img
  src="https://funnyfoto.org/wp-content/uploads/2018/07/cat-saturday-30-photos-91_07_02_2018.jpg"
/>
```

One of most useful attributes is called `style`. This is one of those "global" attributes - one that is available on every type of HTML element from.

Just like CSS properties, each HTML attribute has specific rules about what kind of values it will accept. The rule with the `style` attribute is that its value always has to be formatted as CSS code.

## Let's write some CSS!

Now that we've gotten comfortable with how to write in the HTML language, it's time to learn another. In CSS, correct syntax looks like this:

```css
color: red;
background-color: blue;
```

For each property:

- Property name comes first (always lowercase, never with spaces, dashed between words)
- Then a colon (`:`)
- Then the property value
- Finally, a semicolon (`;`) to mark the end of the value

### NB: Small spacing & formatting notes

- The spaces are not required. Writing the same CSS as `color:red;background-color:blue;` is completely valid.
- Semicolons are required between different properties. Since there's no property following `background-color`, you technically don't need one there.

Now, we just need to take that little chunk of CSS code and set that as the value to a `style` attribute on one of our HTML elements:

```html
<div style="color: red;">Test</div>
<div style="background-color: yellow;">Test</div>
<div style="font-size: 30px;">Test</div>
```

Try writing similarly styled HTML elements in your `.html` file. When you view your website (remember, save the file and then refresh your browser!), you should see different colors and font sizes! Hooray!

## NB: Default styles

HTML elements come with some default styles. Remember how big the `h1` was in comparison to the `p` text, even before you added any `style` attributes? That's because your browser gives `h1` a default `font-size` style that is larger than the default of `p`. And `button` has a border by default. And so on.

You'll notice that depending on which browser you open up your .`html` file in, the default styling might also look slightly different. This is because, although the leading browsers have agreed on a lot of things, there are still areas where they diverge.

This is important to know for when your cousin, who still uses Internet Explorer, asks you why your website looks so different on their screen!

## Mini Project Ideas:

- Create a webpage that's just colorful horizontal stripes
- Make gigantic text! And teeny-tiny text!
- Dark Mode: Can you put white text on a black background?
