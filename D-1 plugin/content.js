// Find the link to the product type on the page
const productTypeLink = document.querySelector('.a-link-normal[href*="/b/"]');
const placeMent = document.querySelector("#title");

// Create new paragraph element with "Product Type" and list of product types
const slogan = document.createElement("p");
const disclaimer = document.createElement("d");
//const review = document.createElement("r");

//review.innerHTML = `There is still chance for you to help bees live`;
const chartJsHtml = `
  <img src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNHhpPWIGkK0aY-0gyeVw0LqXpllX4nMwope_DIgyybsRrmOEJK2Utqkrk340YoP6fscX7VStp0AXQ/pubchart?oid=1833440820&format=image" <iframe width="auto" height="auto"></iframe> Climate change is growing exponentially. If we don't act now, we may not get a chance later. If you still continue to buy this product without considering their impact on the environment, <b>by 2030<b> we will face irreversible disaster.
  
`;

//src="https://www.youtube.com/embed/FtHRcmAYTRU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

// If the link is found, extract the product type and add information about products CO2e
if (productTypeLink) {
  const productType = productTypeLink.textContent.trim();

  disclaimer.innerHTML = `This data is an approx value only. This is just the CO2 emission created by the product just during manufacturing, this might increase during the lifetime of the product depending on its usage and disposal <br> __________________________________________________<br>`;

  // Create an array of gif links
  const gifLinks = [
    "https://media.giphy.com/media/Jrpy4EB3uqVx8RpRKK/giphy.gif",
    "https://media.giphy.com/media/aK4wh0UE3oddS/giphy.gif",
    "https://media.giphy.com/media/fazF1fn7AUBeE/giphy.gif",
    "https://media.giphy.com/media/l8Dd3u5EupOZq/giphy.gif",
    "https://media.giphy.com/media/3o7WTA8n3Nfi7D58Lm/giphy.gif",
    "https://media.giphy.com/media/3og0IPooGNUCe2fEFa/giphy.gif",
  ];

  // Choose a random gif link from the array
  const randomGifLink = gifLinks[Math.floor(Math.random() * gifLinks.length)];

  // Set the imgTag with the chosen gif link
  let imgTag = `<br><img src="${randomGifLink}" alt="Polar bear" style="display: block; margin: 0 auto; border: 2px solid #ccc; border-radius: 10px;" width="auto" height="auto">`;

  // Checks for product type and adds the appropriate slogan

  if (productType === "Electronics") {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br>${productType} cause approx 200kgCO2e per year <br>`;
  } else if (productType === "Home & Kitchen") {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br>${productType} cause approx 280kgCO2e per year <br>`;
  } else if (productType === "Fashion") {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br>${productType} cause 150kgCO2e per year <br>`;
  } else if (productType === "Watches") {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br>${productType} cause 130kgCO2e per year <br>`;
  } else if (productType === "Entertainment") {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br>${productType} <h1>cause 120kgCO2e per year<h1><br>`;
  } else if (productType === "Shoes & Handbags") {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br>${productType} cause 170kgCO2e per year<br>`;
  } else if (productType === "Back to results") {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br> CO2e information not available for this product.<br>`;
  } else {
    slogan.innerHTML =
      imgTag +
      `<br>Climate change is real!<br> CO2e information not available for this product.<br>`;
  }

  // Add CSS styles to the element to increase text size
  slogan.style.fontSize = "28px";
  slogan.style.fontWeight = "bold";
  slogan.style.color = "#1e6091";
  slogan.style.lineHeight = "33px";
  slogan.style.font = "Poppins";

  disclaimer.style.fontSize = "14px";
  disclaimer.style.fontWeight = "regular";
  disclaimer.style.color = "black";
  disclaimer.style.lineHeight = "14px";
  disclaimer.style.font = "Poppins";
  //disclaimer.style.border = "1px solid black";
  disclaimer.style.padding = "0.5px";

  // Insert new paragraph element after the product type link

  placeMent.parentNode.insertBefore(disclaimer, placeMent.nextSibling);
  placeMent.parentNode.insertBefore(slogan, placeMent.nextSibling);
}

const paymentInfoSpan = document.querySelector(
  "#subtotals > div > div.a-row.place-order-button > div.a-row.a-spacing-small.a-text-center.condensed-line-height"
);

paymentInfoSpan.innerHTML = " If not now, than never" + chartJsHtml;

const element = document.querySelector(
  "#a-page > div.a-section.a-spacing-none > div > div.a-container.page-container > div > div > div.a-fixed-right-grid-col.a-col-left > div.a-fixed-left-grid.a-spacing-base"
);
const newElement = document.createElement("p");
const newText = document.createTextNode(
  " If you buy the product, use it sustainably and dispose it responsibly. Here is a video to learn more about sustainability"
);

const youTube = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/u8MQwOR2og8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`;
element.innerHTML = youTube;
newElement.appendChild(newText);
newElement.style.color = "red";
newElement.style.fontSize = "20px";
element.after(newElement);
