# Frontend Mentor - Minimalist portfolio website solution

This is a solution to the [Minimalist portfolio website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](./screenshot.png)


### Links

[Live Solution](https://bengera.github.io/scoot/)

## My process

This is the third premium challenge I have attempted on Frontend Mentor. I chose this challenge because there were some challenging elements in the layout that changed bewtween diffeerent screen
sizes.
I began looking at the figma files and trying to structure my HTML based on the desktop version. So seeing if the mobile one column layout would need to eventually become
a 2 column layout, or if the content would be seperated with a top and a bottom. 
I think that I should have structured my pages more carefully this time. The CSS and JS fixes became a little disorganized towards the end of the project.

### Built with

- Semantic HTML5 markup
- SASS/CSS
- Flexbox
- Vanilla JavaScript
- Mobile-first workflow


### What I learned / What I noted down

1. I have been mistakenly using buttons when I should have been using anchor elements. I realised this
mistake when validating my HTML. I did some reading on when each should be used.

2. I set a max width for the layout so the elements would not spread out too far on larger screens and used overflowx: hidden on the body to stop it overflowing

3. Before making the FAQ section with the accordion I found out about the `summary` and `details` tags. The heading can be clicked on to hide a view the details.
The summary tag appears to wipe out any semantics of other elements inside it, so I decided to make it using regular divs and some JavaScript.

4. I found it useful to code new elements (like the accordion) in isolation in codepen before adding them to my project. This often helps me to understand what is going 
on without distractions.

Here is some CSS that is new to me.

1. The filter property can be used to change the color of SVGs.
```css
filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);
```

### Things I would do differently 

1. Checking which elements in the site could be used again and naming them apporpriately as resuable components. Too often I found myself naming elements based on what page they were on or what section they belonged to. I need to have a more general name for these elements.

### Things I am still not sure about

1. The site's elements and spacing can sometimes look different on real devices compared to the responsive design view in the browsers. I played around with the elements and properties to try and get them to look the same. When I do find which element or property is causing the issue, I remove it or change it; it is not always obvious what causes this though.

## Acknowledgments / Useful resources

- [How to create an Accordion](https://www.youtube.com/watch?v=dr8Emho-kYo) - 'Learn how to create an Accordion, which is a component that organizes content within collapsible items, with HTML, CSS and JavaScript.' By `Coding Journey.`

