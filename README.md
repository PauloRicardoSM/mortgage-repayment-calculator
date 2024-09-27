|![logo-web-dev](https://github.com/PauloRicardoSM/gallery-home-project/assets/135445155/a2887afe-2a07-4347-9da4-943099e04b49)|<h1>Frontend Mentor - Mortgage Repayment Calculator</h1>|
|:---:|:---:|

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

| Mobile View | Tablets View | Desktop View |
|:---:|:---:|:---:|
| ![mortgage-mobile-view](https://github.com/user-attachments/assets/350b5389-2467-4b94-b4e7-a2a8f0364757) | ![mortgage-tablet-view](https://github.com/user-attachments/assets/c33634f7-59e8-43f5-b726-9cf32957ca0c) | ![mortgage-desktop-view](https://github.com/user-attachments/assets/4143808d-eae0-496b-b2bc-74dfab611df5) |

### Links

- Solution URL: [Click here.](https://github.com/PauloRicardoSM/mortgage-repayment-calculator)
- Live Site URL: [Click here.](https://pauloricardosm.github.io/contact-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS preprocessor
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- JQuery
- GSAP

### What I learned

I further enhanced my understanding of form accessibility and learned how to create easy-to-read, well-structured HTML, which simplifies the application of SCSS. Additionally, I expanded my knowledge of jQuery. Here is a piece of my formulary:
```html
<fieldset id="fmortgageAmount" class="borderHidden">
          <legend class="visually-hidden" id="mortgageAmountLabel">Mortgage Amount</legend>
          <p class="pForm">
            <label for="imortgageAmount">Mortgage Amount</label>
            <div id="amountGrid" class="yellowHover">
              <input type="number" name="mortgageAmount" class="input inputNumber" id="imortgageAmount" aria-labelledby="mortgageAmountLabel" aria-describedby="mortgageAmountError" min="0" required>
              <span id="leftSymbol" class="yellowHover">£</span>
            </div>

            <br>

            <span class="error" id="mortgageAmountError" aria-live="polite">This field is required</span>
          </p>
</fieldset>
```
I tried to make it as accessible as possible by linking each error message to the right field and each label to its corresponding input.

### Continued development

For future projects, I intend to work and improve my skills and competencies in:

- Flexbox
- CSS Grid
- JavaScript
- SCSS
- Accessibility
- JQuery
- GSAP
  
I also plan to start studying some JavaScript frameworks like React, in addition to starting with the basics of databases and backend with the Python framework Django.

### Useful resources
- Copilot (AI of the EDGE browser) and ChatGPT: As I already have a bagarrem, I used them only to point out possible bugs and errors that I found during the course of the project.
  
## Author

- Frontend Mentor - [@PauloRicardoSM](https://www.frontendmentor.io/profile/PauloRicardoSM)
- LinkedIn - [Paulo Ricardo Sousa Menezes](https://www.linkedin.com/in/paulo-ricardo-sousa/)
- Email - pauloricardosm@alu.ufc.br
- GitHub - [@PauloRicardoSM](https://github.com/PauloRicardoSM)
