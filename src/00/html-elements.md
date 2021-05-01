## What is HTML, and why are we starting with it?

Imagine that your website is a dancer. One day, we want them to perform beautiful choreography! In magnificent costume! Well, HTML is the dancer's bones. It's hard to design a skirt or direct steps if you don't know about legs.

> ILLUSTRATION: I mean, I think you get the point here >.<

## Creating an HTML file

So far, we've only used a plain text file (`.txt`). Now, let's make our first HTML file.

You can either create a new file or just rename the existing file from `cat.txt` to `cat.html` to get started. Either way, the important bit is the `.html` at the end to indicate what programming language it's in. Open it up in your text editor. Let's write some HTML!

## How to write HTML

In HTML, things are broken down into elements. (You might also hear them called "blocks" or "tags".) Each HTML element looks like this:

```
[1]       [2]       [3]
<element> some text </element>
```

> ILLUSTRATION: Some illustration of the HTML structure as written above? With little arrows pointing to the pieces maybe?

Each element is indicated by two "tags" (1 & 3), and you can put text between them (2). Eachtag is surrounded by brackets `<blerp>` but only the second one has the slash `</blerp>` so you know where it ends.

The element type is specified inside of the angle brackets.

```html
<blerp>Text</blerp><noodle>More Text</noodle>
```

In this example, you'd refer to these as "blerp" and "noodle" elements.

Try typing these elements in your `.html` file. Make your own! Move them around! Type funny quotes inside them! Save your changes, and view the file in your browser again.

Notice that you won't see the element tags, like `<blerp>`, in your browser - you only see the text you put inside them. This is exactly how all HTML elements work; they simply provide the underlying structure for your content.

## Nesting

You can also "nest" elements inside one another, with or without text, to produce more complex structures. "Nesting" is a very common concept across programming, not just in HTML. These relationships are often described as "parent" and "child" - in this case, the elements inside are "children", wrapped by their "parent" element.

```html
<grandma>
  Grandma text #1
  <mom>
    <daughter>Shelly</daughter>
    <daughter>Welly</daughter>
  </mom>
  Grandma text #2
  <aunt>
    <cousin>
      <babycousin>Baby text</babycousin>
    </cousin>
  </aunt>
</grandma>
```

In our family tree example here, `grandma` is the "parent" element of `mom` and `aunt`, which respectively are "parents" of `daughter` and `cousin`. The text inside the elements can also be referred to as their "children". We would even use the term "siblings" to describe the two `daughter` elements!

(Note: The terms "parent", "child", and "sibling" are actual technical terms that developers use all the time. If you use other, albeit similar, language like "mother" and "daughter" elements, folks might not understand you! 😅)

## HTML Elements

Okay, now that we've learned about the general syntax, I'll come clean - `blerp`, `noodle`, `aunt`, and `grandma` aren't actual HTML elements. (Technically you could call them anything you want and there wouldn't be any visible errors, but then, more technically, that's no longer HTML... that's for another day.[^1])

There's a huge selection of HTML element types that all browsers have agreed to accept. Here are just a few examples:

- `<h1>` is Heading 1, for important, very large text.
- `<p>` is Paragraph, for your less important and usually smaller size but lengthier text.
- `<div>` apparently comes from "Document Divisions." This is commonly used for organization and visual layout purposes

These element types are useful because browsers use this information to understand your website's structure and content. For instance, if you put some text inside of an `<h1>` tag, like `<h1>Purple Pandas</h1>`, the browser will decide this "Purple Pandas" bit must be _really_ important to your website.

Using the most appropriate element for a specific part of your website is commonly called using "semantic HTML".

This is a _very important_ skill to learn if you want your websites to be found by search engines, accessible to non-sighted and/or keyboard users, and more.

That being said, your website could technically be built only using `<blerp>` elements and still look the same on the outside...

> ILLUSTRATION: Some callback to the dancer's bones. Like maybe you have arm bones in your legs but it looks the same on the outside, you know?

Here's a list of every single element tag in HTML: https://developer.mozilla.org/en-US/docs/Web/HTML/Element. Warning - there is probably a lot of vocabulary on that site that will look foreign and complicated! Don't worry. Some of these are very obscure, even to experienced developers. 99% of the time, you'll only be using a handful of the most common ones.

## Self-closing tags

There are some HTML elements that can't contain children (no text, no elements, no nothin' inside!). In these special cases, you use a slightly different format - almost as if you've merged the opening and closing tags into one.

Correct:

```
<br />
<hr />
<input />
```

Incorrect:

```
<br></br>
<hr></hr>
<input></input>
```

These elements are called "void elements", and this specific syntax is called a self-closing tag.[^2]

## Your first real HTML website

Try replacing the code in your `.html` file now with real elements. Here's a quick cheatsheet of some of the most common elements:

- `<h1>`, `<h2>`, ... all the way to `<h6>` are for heading text (1 is the most important, 6 is the least)
- `<p>` is paragraph text
- `<strong>` adds emphasis
- `<br>` is a line break (must be self-closing)
- `<hr>` is a horizontal rule (must be self-closing)
- `<div>` is usually for nesting other elements inside
- `<button>` is, well, a button
- `<a>` is for links (stands for "anchor")
- `<ul>` is for an "unordered list", like a bulleted one
- `<li>` is a "list item" and should go specifically inside a `ul`

Try combining all of the concepts so far into your file. You could write something like this:

```html
<h1>Funny Cats</h1>
<h2>Very funny. Ha ha!</h2>
<p>
  This is a <a>website</a> about cats that sit in boxes.
  <br />
  <strong>Meow</strong>
</p>
<hr />
<button>View The Cats</button>
<ul>
  <li>
    <div>
      <h3>cat 1</h3>
    </div>
    <p>meow</p>
  </li>
  <li>cat 2</li>
  <li>cat 3</li>
</ul>
```

Now that we're using real HTML elements, you should see something different in your browser now. Your `h1` text should look very large and your `p` quite small in comparison. The `button` should look like, well, a button! And so on.

Look at you go! This is starting to look like the real thing.

## NB: About spacing & indentation

In some cases, specific spacing is required for things to work. But in a lot of cases, it's just personal preference. For example, these three snippets should all work and look the same in your browser:

```
<h1>
blah blah text content</h1>
```

```
<h1>
  blah blah text content

</h1>
```

```
              <h1>
      blah blah text content
          </h1>
```

Programmers like to enforce strict indentation rules (always indent when you move into a child element, etc.) so their code is more legible. Your text editor can even automatically do that for you whenever you save your file\*.

That being said, remember that this is a stylistic choice, not a requirement! There's nothing about indentation, spacing, or formatting that makes someone fundamentally a _better_ programmer.

\*_Search "format on save [your-text-editor's-name]" and you'll likely find steps to turn that on._

### Footnotes

[^1]: https://dev.w3.org/html5/html-author/#self-closing-tag
[^2]: https://www.w3.org/Style/customdtd.en.html
