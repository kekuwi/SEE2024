const title = document.querySelector("title").textContent;

function get(Url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",Url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


let data = JSON.parse(get(`https://raw.githubusercontent.com/kekuwi/SEE2025-Data/refs/heads/main/Class%20`+ title.at(-1) +`.json`));

data.forEach(item => {
    let galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item", "pswp-gallery-item");

    let imageLink = document.createElement("a");
        imageLink.href = item.link;
        imageLink.setAttribute("data-pswp-width", item.witdh);
        imageLink.setAttribute("data-pswp-height", item.height);
        imageLink.setAttribute("data-croped", "true");

    let imageThumbnail = document.createElement("img");
        imageThumbnail.src = item.s_link;
        imageThumbnail.alt = item.alt;

    let imageDescription = document.createElement("div");
        imageDescription.classList.add("pswp-caption-content");
        imageDescription.innerHTML = `<B>${item.title}</B> \n<br> Created by <i>${item.creator}</i> \n<br>\n<br> ${item.Description}`;
   
    imageLink.appendChild(imageThumbnail);
    galleryItem.appendChild(imageLink);
    galleryItem.appendChild(imageDescription);
    document.querySelector("#gallery").appendChild(galleryItem);
});