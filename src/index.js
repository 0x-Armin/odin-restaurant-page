import './style.css';

import { homePage } from "./load-home-page";
import { menuPage } from "./load-menu-page";
import { contactPage } from "./load-contact-page";

homePage();

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', homePage);

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', menuPage);

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', contactPage);

