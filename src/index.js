const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//example: update the imgsrc for the logo
const logo = document.getElementById('logo-img')
logo.src = "http://localhost:9000/img/logo.png";

const ctaImage = document.querySelector('#cta-img')
ctaImage.src = "http://localhost:9000/img/cta.png";

const middleImg = document.querySelector('#middle-img');
middleImg.src = "http://localhost:9000/img/accent.png";

const navLinks = document.querySelectorAll('nav a')
const navTexts = Object.values(siteContent.nav)
navLinks.forEach(function(link, i){
  link.textContent = navTexts[i];
});



const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button']

const mainFeatures = document.querySelector('h4')
mainFeatures.textContent = siteContent['main-content']['features-h4'];
const featuresContent = document.querySelector('p')
featuresContent.textContent = siteContent['main-content']['features-content'];

const mainAbout = document.querySelector('.text-content:nth-of-type(2) h4')
mainAbout.textContent = siteContent['main-content']['about-h4']
const aboutContent = document.querySelector('.text-content:nth-of-type(2) p')
aboutContent.textContent = siteContent['main-content']['about-content']

const mainServices = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
mainServices.textContent = siteContent['main-content']['services-h4'];
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesContent.textContent = siteContent['main-content']['services-content'];

const mainProduct = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
mainProduct.textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

const mainVision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
mainVision.textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];

const contactHeading = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

contactHeading.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address']
phone.textContent = siteContent['contact']['phone']
email.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer a')
footer.textContent = siteContent['footer']['copyright']