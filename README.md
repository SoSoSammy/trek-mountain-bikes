# Trek Mountain Bikes Home Page

<br />
<p align="center">
  <a href="https://sososammy.github.io/trek-mountain-bikes">
    <img width="1900" height="907" alt="image" src="https://github.com/user-attachments/assets/437ead45-5745-4ea4-85d8-da86a631e3dc" />
  </a>

  <h3 align="center">Trek Mountain Bikes Home Page</h3>

  <p align="center">
    A home page design for the fictitious company Trek Mountain Bikes.
    <br />
    <a href="https://sososammy.github.io/trek-mountain-bikes"><strong>View Demo »</strong></a>
  </p>
</p>

## About the Project

I created this project in my Introduction to Design class at Bridgerland Technical College. I went through the steps a designer would take, such as planning a meeting agenda to discuss the client's website, budgeting the time and resources needed, and drafting a website design agreement. I then created a site map for the website, chose organization schemes, [wireframed the homepage design using Figma](https://www.figma.com/design/OqFLIP5z8QQZERD4qaYmZY/Trek-Mountain-Bikes-Website-Design?node-id=2333-53&t=38Wv2bNVLn69sw2w-1), and coded the design with HTML, CSS, and JavaScript. I recently updated the UI and changed the style of the navigation dropdowns on desktop devices.

(**Note:** the website I coded is just the home page for Trek Mountain Bikes. The hyperlinks on my website are just placeholders; they do not link to anything. This project helped me practice my UX, UI, HTML, CSS, and JavaScript skills. This website does not contain the functionality of an ecommerce website.)

### A Major Challenge I Overcame
When updating the desktop navigation dropdown, I was trying to debug my CSS and discover why my navigation bar was off. The hyperlinks were going above their parent container, the height of my navbar included the dropdowns, and when hovering to display the dropdowns, the UI would glitch.

From my past experience, I remembered that I needed `* { box-sizing: border-box; }` so that the padding of an element would be included in its dimensions. I checked my CSS and saw that I had `body { box-sizing: border-box; }`. I then changed the selector from `body` to `*` and voilà&mdash;the hyperlinks were no longer peeking above their parent container!

To fix my other issues, I was debugging using Gemini Pro, Cursor, and ChatGPT 5. I learned that the height of my navbar included the dropdowns because the dropdowns did not correctly have `position: absolute` applied to them, even though I included this in my CSS. The trick was to use a more specific selector: `.desktop-nav .menu-item > .dropdown-menu` (previously, my selector was `.dropdown-menu`).

I also learned that the UI glitches from displaying the dropdowns occurred because I was changing the `display` property in a transition. When the `display` property is changed, the layout is immediately recalculated, without any transitions. This caused the weird glitching behavior in my website. I fixed this by using `opacity` and `visibility` in my transitions, instead of `display`.

### Built With

[![HTML5][HTML5-shield]][HTML5-url]
[![CSS][CSS-shield]][CSS-url]
[![JavaScript][JavaScript-shield]][JavaScript-url]
[![Figma][Figma-shield]][Figma-url]

[HTML5-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS-shield]: https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Figma-shield]: https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white
[Figma-url]: https://www.figma.com/
