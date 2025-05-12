# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

faq-accordion-main/FAQs-finished-stage-desktop-layout-active.png
faq-accordion-main/FAQs-finished-stage-desktop-layout.png
faq-accordion-main/FAQs-finished-stage-mobile-layout.png



### Links

- ChatGPT helped me with understanding  https://chatgpt.com/ - how the butttons and looping system work together
- W3Schools https://www.w3schools.com/  - a good platform where I learned many little ways to put my code together such as selecting HTML elements and storing them in JavaScript variables for later use. 
- CSS Tricks https://css-tricks.com/ - a good platform to learn about CSS flexbox and grid 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile workflow
- Vanilla JavaScript


### What I learned

I learned more of the interaction between HTML, CSS, and JavaScript, how for example Javascript using classList to show an element that is defined in CSS and not in HTML.

I learned that in order to access multiple buttons with the same functionality for this project, I have to use a simple iterative method such as for or forEach loop.



```css
.reveal{
    max-height: 500px;
    opacity: 1;
    /* visibility: visible; */
}
```
```js
    for (let i = 0; i < btn.length; i++) {  //Looping through the buttons
            textReveal[i].classList.toggle('reveal'); 
        });
    };
```


### Continued development

I definitely have to improve in many areas of CSS, especially in javaScript logic

### Useful resources

- freeCodeCamp - https://www.freecodecamp.org/learn - a great platform to learn code for free
- Udemy - https://www.udemy.com/home/my-courses/learning/ - I learned a lot from Udemy courses and still using for future learning
- TheOdinProject - https://www.theodinproject.com/dashboard - planning to finish the Full Stack JavaScript path
- MDN - https://developer.mozilla.org/en-US/ - a good platform for the documentation of HTML, CSS, and JavaScript


## Author

- Website - Aurelian Stanica - https://app.netlify.com/teams/webdeveloperstanica/sites
- Frontend Mentor - @WebDeveloperStanica - https://www.frontendmentor.io/profile/WebDeveloperStanica
- GitHub - WebDeveloperStanica - https://github.com/WebDeveloperStanica
- LinkedIn - Aurelian (DevStan) Stanica - https://www.linkedin.com/in/aurelian-stanica/
