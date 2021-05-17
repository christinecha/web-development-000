I'm using Google Chrome for these examples. There are similar tools available in most common browsers (i.e. Firefox, Safari, Edge, etc.) but I've personally found the Chrome dev tools to be the easiest to use and most well supported.

## Opening Developer Tools, a.k.a. Dev Tools

With Chrome open (on any website), go to View > Developer > Developer Tools.

As a shortcut, you can use `Command + Option + I` on Mac, `Control + Shift + I` on Windows, or `F12` on either. I probably use this shortcut dozens of times every day.

![Opening Dev Tools via View > Developer.](./assets/02/opening-dev-tools.png)

The other options "Inspect Elements" and "Javascript Console" actually also lead you to the same view, just different subsections. ("View Source" will open up a new tab containing the raw HTML code for the webpage you're currently viewing.)

Once you click "Developer Tools," this should open up a sidebar in your browser tab that looks like this:

![Looking at the opened state of Chrome Dev Tools.](./assets/02/dev-tools-open.png)

Welcome to Dev Tools. ✨

> Note: The Dev Tools view shows information specific to the browser tab it's open on. If you now travel to a different browser tab, you'll see that Dev Tools isn't open there. And if you do open it there, you'll see different information than what's showing in the first tab.

There's a lot going on here, but for now, we're just going to focus on the Elements section and one of its subsections, called Styles.

## Elements: Exploring the HTML

In the Elements section, you can see all of the HTML elements that are currently on the page you're viewing.

Use Chrome to open the HTML file you wrote. Open Dev Tools in that tab and view the Elements tab (it should already be there by default, but if not, you can just click "Elements" at the top). You should see the exact HTML you wrote in your text editor now in Dev Tools.

If you've created some nested elements (elements within elements) you might not initially see them in the HTML there. You can expand a parent element by clicking the little arrow next to it. Ta-da, now you see its children!

![You can expand nested elements.](./assets/02/expanded-element.png)

Try hovering over different elements in the HTML you see in Dev Tools. ("Hovering" is just the technical term for moving your mouse on to something without clicking it.) In the example below, I'm hovering over the `button` element:

![When hovering over an element in the HTML, the actual rendered element gets highlighted on the webpage.](./assets/02/hovered-element.png)

Now you can see an immediate connection between the HTML you're writing and what actually shows up on the webpage.

## Manipulating element styles

Here's where it gets pretty cool.

You can actually manipulate a webpage live, using code, directly in your browser.

![Click to edit an element's styles.](./assets/02/click-element-style.png)

## Why is this important?

Something about debugging....

A lot of web development can be summarized as writing code, then having to look for what you've done wrong. I heard someone once say: A web developer is like a detective that's investigating a crime that they themselves have committed.
