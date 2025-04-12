let data = [
    {
        "title": "Test 1",
        "creator": "Adam sandler",
        "link": "https://picsum.photos/2000",
        "s_link": "https://picsum.photos/512",
        "witdh": 2000,
        "height": 2000,
        "alt": "alt demo 1",
        "Description": "test desc 1"
    },
    {
        "title": "Test 2",
        "creator": "Tod filip",
        "link": "https://picsum.photos/2001",
        "s_link": "https://picsum.photos/513",
        "witdh": 2001,
        "height": 2001,
        "alt": "alt demo 2",
        "Description": "test desc 2"
    },
    {
        "title": "Test 3",
        "creator": "xijinpau",
        "link": "https://picsum.photos/2002",
        "s_link": "https://picsum.photos/514",
        "witdh": 2002,
        "height": 2002,
        "alt": "alt demo 3",
        "Description": "test desc 3"
    },
    {
        "title": "Test 4",
        "creator": "duck lintion",
        "link": "https://picsum.photos/2003",
        "s_link": "https://picsum.photos/515",
        "witdh": 2003,
        "height": 2003,
        "alt": "alt demo 4",
        "Description": "test desc 4"
    },
    {
        "title": "Test 5",
        "creator": "check mark",
        "link": "https://picsum.photos/2004",
        "s_link": "https://picsum.photos/516",
        "witdh": 2004,
        "height": 2004,
        "alt": "alt demo 5",
        "Description": "test desc 5"
    },
    {
        "title": "Test 6",
        "creator": "coco nata lee",
        "link": "https://picsum.photos/2005",
        "s_link": "https://picsum.photos/517",
        "witdh": 2005,
        "height": 2005,
        "alt": "alt demo 6",
        "Description": "test desc 6"
    },
    {
        "title": "Test 7",
        "creator": "malling son",
        "link": "https://picsum.photos/2006",
        "s_link": "https://picsum.photos/518",
        "witdh": 2006,
        "height": 2006,
        "alt": "alt demo 7",
        "Description": "test desc 7"
    }
]

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
        imageDescription.innerHTML = `<B>${item.title}</B>\nCreated by <i>${item.creator}</i>\n<br>\n<br> ${item.Description}`;
   
    imageLink.appendChild(imageThumbnail);
    galleryItem.appendChild(imageLink);
    galleryItem.appendChild(imageDescription);
    document.querySelector("#gallery").appendChild(galleryItem);
});