// Navbar base
let navbar = document.createElement("nav");
    navbar.classList.add("navbar");

let navbarStylesheet = document.createElement("link");
    navbarStylesheet.rel = "stylesheet";
    navbarStylesheet.href = "CSS/navbar.css";
    document.head.appendChild(navbarStylesheet);

// Logo
let logoContainer = document.createElement("a");
    logoContainer.classList.add("logo");
    logoContainer.href = "./";

let logo = document.createElement("img");
    logo.src = "Assets/SEE logo.png";
    logo.alt = "SEE 2025 Logo";

// Burger menu
let hamburgerButton = document.createElement("button");
    hamburgerButton.type = "button";
    hamburgerButton.classList.add("hamburger-button");
    hamburgerButton.innerText = "☰";

let hamburgerUnderlay = document.createElement("div");
    hamburgerUnderlay.classList.add("hamburger-underlay");

let navList = document.createElement("ul");
    navList.classList.add("nav-list");

let navListItems = [
    { name: "Home", link: "./" },
    { name: "About", link: "./about" },
    { name: "Merchandise", link: "https://forms.gle/JgWsZASdfBqEG7e56" }
];

navListItems.forEach(item => {
    let listItem = document.createElement("li");

    let listLink = document.createElement("a");
        listLink.innerText = item.name;
        listLink.href = item.link;
        listItem.appendChild(listLink);

    navList.appendChild(listItem);
    });

// Append elements
navbar.appendChild(logoContainer);
navbar.appendChild(hamburgerButton);
navbar.appendChild(hamburgerUnderlay);
navbar.appendChild(navList);

logoContainer.appendChild(logo);

// navList.appendChild(navListItems)

document.getElementsByTagName("header")[0].appendChild(navbar);


// hamburger menu systematic
const hamburger = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav-list');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
        menuOpen = true;
        navMenu.style.display = 'block';
        hamburgerUnderlay.style.display = 'block';
    } else {
        menuOpen = false;
        navMenu.style.display = '';
        hamburgerUnderlay.style.display = '';
    }
});
hamburgerUnderlay.addEventListener('click', () => {
        menuOpen = false;
        navMenu.style.display = '';
        hamburgerUnderlay.style.display = '';
});


// footer base
let footer = document.createElement("div");
    footer.classList.add("footer");

let footerContainer = document.createElement("div");
    footerContainer.classList.add("footer-content");

// social media
let socialMediaContainer = document.createElement("div");
    socialMediaContainer.classList.add("footer-social-media");

let socialMediaTitle = document.createElement("h3");
    socialMediaTitle.innerText = "Social Media";
    socialMediaContainer.appendChild(socialMediaTitle);
    
    let socialItems = [
        { name: "SEE Instagram", link: "https://www.instagram.com/selfexpressionexhibition/" },
        { name: "SEE Tiktok", link: "https://www.tiktok.com/@see.umn" },
        { name: "SEE Email", link: "mailto:see.umn.2021@gmail.com" },
        { name: "UMN Website", link: "https://www.umn.ac.id/en/home/" },
        { name: "UMN Instagram", link: "https://www.instagram.com/universitasmultimedianusantara/" }
    ];
    
    socialItems.forEach(item => {
        let listLink = document.createElement("a");
        listLink.innerText = item.name;
        listLink.href = item.link;
        
        socialMediaContainer.appendChild(listLink);
    }
);

// Support Us
let supportUs = document.createElement("div");
    supportUs.classList.add("support-us");

let supportUsTitle = document.createElement("h3");
    supportUsTitle.innerText = "Support Us";

let merchandiseLink = document.createElement("a");
    merchandiseLink.innerText = "Merchandise";
    merchandiseLink.href = "https://forms.gle/JgWsZASdfBqEG7e56";

// copyright
let copyright = document.createElement("p");
    copyright.innerText = "© 2025 UMN Self Expression Exhibiton. All Rights Reserved.";

// Append footers elements
footer.appendChild(footerContainer);
footer.appendChild(copyright);

footerContainer.appendChild(socialMediaContainer);
footerContainer.appendChild(supportUs);
footerContainer.appendChild(merchandiseLink);

supportUs.appendChild(supportUsTitle);
supportUs.appendChild(merchandiseLink);

document.getElementsByTagName("footer")[0].appendChild(footer);