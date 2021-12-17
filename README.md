# Javen Liu's Portfolio

The code repository for my portfolio site.

[![Release](https://img.shields.io/github/v/release/jiefenn8/jiefenn8.github.io)](https://github.com/jiefenn8/jiefenn8.github.io/releases/latest)

## Description

This is the code repository for my personal portfolio where users can acquire  public information I have published relating to my Information Technology career. This website also provide additional external sources containing more information about me as well as ways to reach out and contact me.

## UX Design and Thought Process

During the design phase, I have considered the list of users that would be viewing my portfolio website and concluded at this time to opt for a simple yet responsive minimalist website. This approach would place emphasis on the website content than the aesthetics design so that the user can focus on the information while using my development time efficiently to deliver results within my current skillset. 

### User Stories

In the users' point of view, some of the main user stories can be identified below:

- As a developer, I want to find a summary of the individual so that I know who they are and what main skills they have. 

- As a developer, I want to know what projects and code repository they has been involved in so that I know what expertises and experience they have.

- As an employer, I want to find more detailed information about the individual so that I know if the education, experience and career history meets my interests. 

- As an employer, I want to obtain additional contact information and websites so that I can reach out to the individual. 

- As an employer, I want to easily send a message to the individual so that I can share information about potential opportunities or contacts. 

### Wireframes

I digitalised some of the planning I did on sketches with [Wireframe.cc](https://wireframe.cc/). Below you can see the iteration process of my website through multiple revisions. 

- **General Layout** - The general layout of the website navbar, header, content and footer.
    - **Revision 1 (Initial draft)**
        - [Desktop](docs/wireframe/revision_1_layout.PNG)
        - [Mobile](docs/wireframe/revision_1_mobile.PNG)
            - [With menu expanded.](docs/wireframe/revision_1_mobile_menu.PNG)
    - **Revision 2** - Change in color theme, navbar left alignment and branding. The initial color contrast was a bit too strong so I opted for a more lighter color. Branding was also added to give a form of site identity/brand regardless what page the user is viewing.  
        - [Desktop](docs/wireframe/revision_2_layout.PNG)
        - [Mobile](docs/wireframe/revision_2_mobile.PNG) - The mobile burger menu icon has been altered to be right aligned. 
            - [With menu expanded.](docs/wireframe/revision_2_mobile_menu.PNG)
- [Home page](docs/wireframe/revision_2_home_page.PNG) - Quick summary on who I am, my career role and main skills. 
- [About me](docs/wireframe/revision_2_about_me_page.PNG) - Detailed information about my education, projects and career history.
- **Contact me**
    - [Revision 2](docs/wireframe/revision_2_contact_me_page.PNG) - Three ways to reach out or to find more information about me. 
    - [Revision 3](docs/wireframe/revision_3_contact_me_page_with_form.PNG) - Includes the contact form suggested from feedback making contacting me much quicker and easier. 

### Future Consideration

As I consider the portfolio as an ongoing project over time. I have noted that in the future, a change in the UX design to balance between the current minimalist design and aesthetics would be desirable once expertise in UX has matured.

## Features

Besides the responsiveness of the website made possible with the Bootstrap library, other notable features are as follows:

- **Contact Form** - For users that wish to leave a message to me, they can use the contact form located in the 'Contact Me' page. The contact form asks for the Full name, email and message that the users wish to provide to me. The back-end API that manages the forwarding of user messages to my personal email address is [FormSpree](https://formspree.io/). There is also an additional custom script on the client side that hides the form and display a confirmation message when the form is submitted. 

## Running Locally

[Download](https://github.com/jiefenn8/jiefenn8.github.io/archive/refs/heads/master.zip) and extract the repository zip to your desired installation directory

OR

Clone with the repository with CMD (or terminal) with Git installed.

```
cd <install directory of choice>
git clone https://github.com/jiefenn8/jiefenn8.github.io
```

## Technologies

- [HTML5](https://dev.w3.org/html5/html-author/) - The core language defining the website structure and content as a web document.  
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used to manage the styling of the HTML elements for the website.
- [AJAX](https://www.w3schools.com/js/js_ajax_intro.asp) - Used to script the response of the contact form submission. 
- [BootStrap 4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - The web framework for the website to implement responsive layout and components for the website. 
- [JavaScript](https://www.javascript.com/) - Used together with the BootStrap library to operate properly. 
- [Git](https://git-scm.com/) - Version control tool to manage code changes during the life span of this project.
- [GitHub](https://github.com/), [GitHub Pages](https://pages.github.com/) - To store the code in a public remote repository service where I can also deploy my website to a live environment as well.
- [Formspree](https://formspree.io/) - To handle the forwarding of messages via the contact form to my email.

## Testing

Due to the simple web portfolio at this time, testing mainly focused on the responsiveness and any complex features the website offers to the users.

### HTML and CSS Validation

[W3C HTML Validation](https://validator.w3.org/#validate-by-input) to ensure all HTML5 pages defined follows proper W3C HTML5 syntax and standards. 

[W3C CSS Validation](https://jigsaw.w3.org/css-validator/#validate-by-input) to ensure CSS defined follows proper W3C CSS syntax and standards. 

### Responsive Testing

Responsive testing includes testing if the elements responds appropriately to user interactions. This includes checking if the website layout is resizing appropriately to fit the content in the given screen size as expected and if the navbar is collapsing to a hamburger menu as well. Android Smartphone and Desktop was used to test this with other device types with different screen size simulated using the tools mentioned below. 

#### Tools

```Firefox and Chrome developers tool``` provided the ease of inputing screen size to test responsiveness of webpages in simulated devices size such as tablet and other various mobile sizes that I don't have access to. 

### Accessibility Testing

To test if the website can be interacted by users who are unable to view the content normally without additional accessibility assistant tools, [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) was followed closely and changes was made to the site to ensure it was compliant with the guideline. The Firefox and Chrome developers tool mentioned above also have an accessbilitiy feature included that helped evaluate the pages and mention any issues that needs to be fixed. 

### Feature Testing

Testing was conducted with features like the contact form to ensure that the both front end and backend feature worked as intended. This includes sending multiple test cases through the contact form and checking if the front end responds back to the user properly on the success or failure of the submission; As well as checking if Formspree received the test messages and forwarded them to my email.

## Deployment

This portfolio uses GitHub for version control of the code base with the website hosted by [GitHub Pages](https://pages.github.com/). Below are the step by step methods to add changes to the code base and publish it to a live environment.

1. Created repository on GitHub and cloned it to a local directory using ```git clone <repository link>``` on Git terminal.

2. Added files and committed them using ```git add .``` and ```git commit -m "<message>"```

3. Pushed changes to the remote repository (GitHub) with ```git push -u origin master```

4. Went to the repository on GitHub. Accessed the ```Settings```, into ```Pages``` and set the Source to ```Branch: master``` with the directory set to ```/root``` and saved the changes.

2. Saving changes will publish the website and provide a link to the live site. 

You can access my portfolio with the following link [jiefenn8.github.io](https://jiefenn8.github.io/).

## Resources and Citations

- [Wireframe.cc](https://wireframe.cc/) for providing an editor to digital the planning sketches done for this project. 

- [Favicon.cc](https://www.favicon.cc/) for providing an editor to create a custom favicon for my website. 

- [Bootstrap 4.0 documentation](https://getbootstrap.com/docs/4.0) providing knowledge on creating and configuring layouts and components for this website.

- [Bootstrap responsive](https://getbootstrap.com/docs/4.0/components/navbar/#responsive-behaviors) for the website UX compatibility with multiple devices. 

- [Bootstrap icons](https://icons.getbootstrap.com/) such as the LinkedIn, GitHub icons.

- [Bootstrap badge](https://getbootstrap.com/docs/4.0/components/badge/) for the skills badges.

- [StackOverFlow solution smooth scrolling](https://stackoverflow.com/questions/15935318/smooth-scroll-to-top) to improve UX scrolling in the About Me page. 

- [FormSpree](https://formspree.io/) for providing the API as well as the base AJAX snippet (when signed in) which I used and modified from to handle the submission of the contact form.

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) for providing tips and guidelines on form legends, aria-label and appropriate color constant. 



