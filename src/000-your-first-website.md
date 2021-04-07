# Project 000: Your First Website

## What is a website?

A website is the stuff that renders in your web browser. When you open up Chrome, or Firefox, or Netscape Navigator, what you see inside the frame is a website.

<!-- <diagram: screenshot of a website> -->

## How does my computer know what stuff to show?

When you go to a web address, it's kind of like making a phone call. You direct your call towards a unique phone number, just like you request a specific web address. The phone companie(s) involved then do a bunch of work to make sure you get connected to the right person - just like the internet companie(s) do to get you on the right website.

The website itself is like if the person you dialed had recorded & uploaded a voicemail message, and every time you call them, that's what gets played back to you. Except in this case, instead of just an audio file, it's likely a combination of other files too.

Some of these files are text files, and these are the ones that contain _code_. They have specific endings, like `.html` or `.js` to tell the browser what kind of text (or code) it is, and they handle each kind differently.

## So what is code?

Code is just text. It's a set of instructions humans can write for machines to read. You can write code on any program on your computer that lets you write text, like TextEdit. The only reason you can't really use something like Microsoft Word is that those programs save a bunch of other data with your text - formatting, preferences, data about when/how you wrote that document, etc. - which is why they use their own specific `.doc` or `.docx` extension on these files. If you open one of these in TextEdit, you'll see a bunch of wacky symbols and whatnot; clearly not just readable text.

### How can a machine read my human instructions?

Think of it like a massive chain of translations. A machine on its own has no understanding of your textual instructions. All it knows is whether electricity is flowing (1) or not (0). That's where all the memes about hackers using binary (01010111010110100010100101) come from; at the end of the day, that sequence is all the machines understand.

But at some point, some human was like, what if we group these signals into unique patterns? Like, 000101010101 = a, 0101010001 = b, so on and so forth. Like one of those "languages" you put together as a kid to send secrete notes to your friend.

So then you could write "abc", which is actually shorthand for "0101010101001011111010100101" or whatever (I'm making this up). And then what if `ba` meant something special, and we introduce symbols like `()` which also has its own meaning...?

A few decades later...

A progrmaming language, in effect, is just one of these "translation layers". The closer you get to the 0's and 1's level, the "lower level" the language is. A higher level language is more layers away, which means it's more readable to humans, but seems quite disconnected from the machines.

So when you learn JavaScript, one of the higher level languages, you can write something as simple and human-legible as `var x = 9` (setting a variable X to the value 9). It feels almost like magic that the computer can "understand" you, but all it is is layers and layers of work from engineers past that you can now build on top of.

### Where and how do I write these instructions, aka "code"?

As I mentioned previously, you can technically use any basic text editing software as long as it can output plain text, like TextEdit or Notepad.

However, it might be useful for you to install a text editing application that is meant specifically for programmers, usually called a "text editor" or "I.D.E." ("Integrated Development Environment"). Most of these programs are free so you can always just download one and replace it later as you develop preferences. My personal recommendation at this time is [VS Code](https://code.visualstudio.com/download), which is a Microsoft product.

.... optional nerding out on text editor customization)

### Recap

- A website is just files loaded up by your browser
- Code is just the text in some of those files
- Machines can't magically "understand" your code, this requires layers and layers of translating, eventually down to electrical signals (0's and 1's)
- You can write code in any program that produces plain text files, but it'll probably be more comfortable if you download something specifically for coding.

### Okay, so how do I put get the browser to load up MY files?

Exercise:

1. Create a text file, call it whatever you want, as long as it ends in `.html`, and open it in your text editor program.
1. In this file, write whatever you want. "Meow! I am a cat."
1. Don't forget to save it!
1. Open this file in your browser! You can do this by just manually entering the file's address into your browser, i.e. `file:///Users/cha/Desktop/meow-example.html` instead of where you'd normally write `http://www.google.com`. Common shorcuts for this would be either to going your file directory viewer (Windows Explorer or Mac Finder) and double clicking on this file or dragging the file into your browser program.
1. Change the text again in your file. "Woof! I am a dog."
1. To see the changes in your browser, you'll have first save your file, then "refresh." Voila!

You should see the text you wrote pop up in your browser window. Congrats! This is your first website!
