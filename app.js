const scroller = document.querySelectorAll(".scroller");

const date = document.querySelector("#date");

const year = new Date().getFullYear();

const card = document.getElementById("contactButton");

const contact = document.getElementById("contactBody");

const close = document.querySelector(".times");

date.innerHTML = year;

if (!window.matchMedia("prefers-reduced-motion: reduce").matches) {
    scrollAnimation();
}

function scrollAnimation() {
    scroller.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);


        const list = scroller.querySelector(".list");
        const content = Array.from(list.children);

        content.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            list.appendChild(duplicatedItem);
        });
    });
}

card.addEventListener("click", () => {
    contact.style.display = "flex";
})

close.addEventListener("click", () => {
    contact.style.display = "none";
})