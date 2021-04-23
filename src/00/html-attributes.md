## What are HTML Attributes?

So now you've learned a couple ways to write HTML elements.

1. Without text inside:

```html
<div></div>
```

2. With text inside:

```html
<div>Oh fancy meetin' you here</div>
```

3. With other elements! and text! inside:

```html
<div>
  <h1>Onions</h1>
  <p>They have layers.</p>
</div>
```

So in simple terms, you know how to either make an empty element, or make one with stuff inside.

Using "attributes" is another way to customize how an element shows up on your website. An "attribute", just as its English meaning implies, is a trait that describes your element, just like you might describe yourself!

> ILLUSTRATION: On the left, it's me? Maybe curled up in a ball on my couch with a laptop. On the right it's a plain circle. Then caption each like: Me, "shape": "round", "is-moving": "false" (+ maybe one thats differen)

## How to apply attributes to an HTML element

There are two parts to each element attribute: the name and the value.

```html
<div size="large" mood="happy" x="y">Text</div>
```

The attribute name goes after the element name, with some space in between. Then, add an equals sign, followed by the attribute value, which needs to be in quotations. Finally, you have the angle bracket (`>`) to close your opening tag, and the closing tag stays the same as before.

Optionally, you can omit the equals sign and quote text. (But you must omit BOTH the equals sign & value; including just one will cause an error). This will save your attribute with its custom name but with no defined value.

Here's a `div` element with the following information attached: it has an attribute called "size" with a value "large", one called "beautiful" with a value "yes", and two called "easy" and "breezy" with both have no value.

```html
<div size="large" easy breezy beautiful="yes">Text</div>
```

Just like `div` and `h1` came from a long list of all of the existing HTML element types, there's an even longer list of existing attribute types!

All of [these attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) are available on every single HTML element type (although they might be useful on some types).

Each element type has its own unique set of existing attributes as well. For instance, if you look up the [attributes for `img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) - the aptly named "image" element - has a whole bunch of attributes: `alt`, `src`, `width`, etc.

Each of these, when added to an HTML element, gives a specific instruction to the browser on how to interpret that element. There might specific rules to what format each value has to be in, too.

For instance, here I'm setting the `src` attribute to [this image address](https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg). This tells the browser: for this `img` element, display what's at that link.

```html
<img
  src="https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg"
/>
```

(Did you notice `img` is one of those self-closing tags? 😛)

Here are a few more realistic examples so you can get used to the syntax.

Setting an `<a>` ("anchor" or link) element specific URL using the `href` attribute.

```html
<a href="https://butt.com">What smells?</a>
```

Maing an `<input>` (yes, "input") element of `type` "email".

```html
<input type="email" />
```

Making that image element show up 500 pixels wide and 300 pixels tall.

```html
<img
  width="500"
  height="300"
  src="https://www.scarymommy.com/wp-content/uploads/2019/09/GettyImages-146582583-min-1.jpg"
/>
```

Try these out in your `.html` file! Here are some practice ideas:

- Add two different images but make them show up as same exact size. (Tip: To get the web address of an image, try ctrl+clicking an image on a website and hiting "Copy Image Address")
- Set up a classic prank by creating an innocent-looking link that [goes here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
