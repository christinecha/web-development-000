## Creating an HTML file

So far, we've only used a plain text file (`.txt`). Now, let's make our first HTML file.

You can either create a new file or just rename the existing file from `cat.txt` to `cat.html` to get started. Open it up in your text editor, and let's write some HTML!

## How to write HTML

The rules of a specific language, a.k.a. "syntax" is just like grammatical syntax in English. The predefined set of rules and structure is what makes any language actually usable. Grammar, spelling, sentence structure, part of speech, punctuation, on and on. Code has similar rules!

The best part is, code doesn't have those nasty exceptions like in English ("though through tough thorough trough??") that you just have to memorize. There is a set of rules, and we have to stick to them exactly because the machines won't understand them otherwise.

In HTML, things are broken down into elements. (You might also hear them called "blocks" or "tags".) Each HTML element looks like this:

```
[STARTING TAG] [INSIDE CONTENT] [CLOSING TAG]
<element>  some text might go in between  </element>
```

> ILLUSTRATION: HTML structure as written above

Each element is indicated by a pair of two tags. Each is surrounded by brackets `<whatever>` but only the second has the slash `</whatever>` so you know where it ends. In some cases, you can use a single tag, called a self closing tag, when it doesn't have any inside content, like this:

```
</whatever>

^ is just shorthand for
<whatever></whatever>
```

The spacing doesn't usually\* matter, like these would all be the same thing as the first example:

```
<element>
blah blah text content</element>

<element>
  blah blah text content
</element>

              <element>
      blah blah text content
          </element>
```

\*Spaces inside of an element can be a little confusing sometimes, but that's not important right now.

You'll see folks on the internet muttering a lot about "indentation". They're talking about how when you write the insides of an element, you indicate this by indenting in a bit. This makes reading code a bit easier sometimes because you can put elements inside of elements, infinitely:

```
<first>
  some text

  <second>
    some text
    <third>
      <fourth>
        ... infinity ...
      </fourth>
      some text
    </third>
  </second>
</first>
```

The idea is that without indentation, that looks like this, which makes it harder to tell where the starting/closing tags are.

```
<first>
some text
<second>
some text
<third>
<fourth>
... infinity ...
</fourth>
some text
</third>
</second>
</first>
```

But it's important to remember - the choice to indent HTML is an opinion. It's a commonly held opinion (and a lot of people will enforce this opinion when you collaborate with them) but it's purely stylistic, and doesn't actually affect the meaning of the code.

## HTML Elements

So what goes inside the tags? The technical answer is, anything you want - as long as it doesn't have spaces, and it's identical between the opening and closing tags. You could do something like this, and it's totally valid HTML:

```
<my-beautiful-title>My Title</my-beautiful-title>
<HappyText>Happy happy</HappyText>
```

You'd essentially be defining your own custom elements, here called `my-beautiful-title` and `HappyText`.

However, to help you out, there's a huge existing selection of element types that all the browsers have agreed on. Here's just a few examples:

```
<h1> - H1, meaning Heading 1. For your very important, very large text.
<p>  - P, meaning Paragraph. For your less important and usually smaller size, lengthier text.
<div> - Apparently comes from "Document Divisions." Most commonly used for organization and visual layout purposes
```

These preset elements are useful because browsers use this information to understand what your website is about. If you put somet text inside of an `<h1>` tag, like `<h1>Purple Pandas</h1>`, the browser and other programs are gonna think your whole website is about Purple Pandas! That means:

- A search on Google for "purple pandas" might turn up your website
- A blind person accessing your website will hear "Purple Pandas" as the first thing the browser reads aloud

Using the most appropriate, preset tag for a specific part of your website is called using "semantic HTML" - makes sense, because semantics is all about the specifics of using some words over other ones.

Again, this is not necessary to produce valid, functioning HTML. But you'll often see people talking about it as if it is, because the benefits are extremely important.

Here's a list of every single preset element tag in HTML: https://developer.mozilla.org/en-US/docs/Web/HTML/Element. Warning - there is probably a lot of vocabulary on that site that will look foreign and complicated! Don't worry. Some of those details are very obscure, even to experienced developers. 99% of the time, you'll only be using a handful of the most common ones.

## Exercise:

1. Open your HTML file in your text editor again.
1. Instead of just writing plain text, try using some HTML elements. Play around with a bunch of different tags! Move them around! Nest and un-nest them! Example below.
   ```
   <h1>Funny Cats</h1>
   <p>
     This is a website about cats that sit in boxes.
     <strong>Meow</strong>
   </p>
   <button>View The Cats</button>
   <div>cat 1</div>
   <div>cat 2</div>
   ```
1. Save the file and refresh your browser again. You should see your text now in all different styles and sizes, just because you've used some HTML elements!
