const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
console.log("Navigating to:", link.textContent);
});
});

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(button => {
button.addEventListener("click", () => {
alert("Project details and images will be added soon!");
});
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
(entries) => {

```
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

},
{
    threshold: 0.1
}
```

);

sections.forEach(section => {

```
section.style.opacity = "0";
section.style.transform = "translateY(20px)";
section.style.transition = "0.6s ease";

observer.observe(section);
```

});
