---
title: "Astro 2.5"
description: "Data collections • Hybrid rendering • Custom client directives • HTML minification • Parallelized rendering • Polymorphic type helper • More!"
publishDate: "May 18, 2023"
authors:
  - cedric
categories:
  - docs
  - svelte
  - astro
coverImage: "/src/content/blog/_images/blog-sample/blog-sample.jpg"
coverImageAlt: "A beautiful cover image"
socialImage: "/src/content/blog/_images/blog-sample/blog-sample.jpg"
lang: "en"
---

## Table of Contents

## Intro

- grezh(ezr)
  - grezh(ezr)
  - grezh(ezr)
  - grezh(ezr)
- vbefbrezqqb
- bfesb

## Test

We just released Astro 2.5, with a big list of features including:

- **[Data collections and references](#data-collections-and-references)**: Your `src/content/` folder can now include JSON and YAML files to store data. You can reference this data from your other collections.
- **[Hybrid rendering (experimental)](#static-by-default-hybrid-rendering-experimental)**: Allow server routes in your mostly static sites.
- **[Custom client directives (experimental)](#custom-client-directives-experimental)**: A new API for integrations to define their own loading mechanics for `client:` directives.
- **[HTML minification](#html-minification)**: An option to allow you to minify your Astro templates.
- **[Parallelized rendering](#parallelized-rendering)**: Astro now runs sibling components in parallel, speeding up rendering when you have multiple components doing their own data loading.
- **[Polymorphic type helper](#polymorphic-type-helper)**: Define a component that accepts the same props as built-in elements.

## Ordered list

1. f zalv rezamev
1. f zalv rezamev
1. f zalv rezamev

## Data collections and references

Content <mark>collections</mark> are Astro's first-class solution to managing and authoring content. Astro 2.5 takes that story even further with **new data formats and collection references.**

First, we've introduced a new `type: 'data'` property to store data formats like JSON and YAML in their own collections. This unlocks using collections for new forms of content including author profiles, reusable image alt text, translation dictionaries, and more.

```diff
src/content/
    blog/
        week-1.md
        week-2.md
+    authors/
+        grace-hopper.json
+        alan-turing.json
```

Configure them using the new `type: 'data'` property:

```ts
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    socialLink: z.string().url(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    /* ... */
  }),
});

export const collections = { blog: blog, authors: authors };
```

### Table

| Old Names | New Names   |
| --------- | ----------- |
| datetime  | pubDatetime |
| slug      | postSlug    |

## An h1 header

Paragraphs are separated by a blank line.

2nd paragraph. _Italic_, **bold**, and `monospace`. Itemized lists
look like:

- this one
- that one
- the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺

## An h2 header

Here's a numbered list:

1.  first item
2.  second item
3.  third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

```
define foobar() {
    print "Welcome to flavor country!";
}
```

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

### An h3 header

Now a nested list:

1.  First, get these ingredients:

    - carrots
    - celery
    - lentils

2.  Boil some water.

3.  Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header).

Here's a footnote. [^1]

Here's another footnote. [^2]

[^1]: Footnote text goes here.
[^2]: Another Footnote text goes here.

Tables can look like this:

| size | material    | color       |
| ---- | ----------- | ----------- |
| 9    | leather     | brown       |
| 10   | hemp canvas | natural     |
| 11   | glass       | transparent |

multi-line tables:

<table><thead><tr><th>size</th><th>material</th><th>color</th></tr></thead><tbody><tr><td>9</td><td>leather</td><td>brown</td></tr><tr><td>10</td><td>hemp canvas</td><td>natural</td></tr><tr><td>11</td><td>glass</td>
<td>

- carrots
- celery
- lentils

</td></tr></tbody></table>

A horizontal rule follows.

---

Here's a definition list:

apples
: Good for making applesauce.

oranges
: Citrus!

tomatoes
: There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
| Line too
| Line tree

and images can be specified like so:

![example image](example-image.jpg "An exemplary image")

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
