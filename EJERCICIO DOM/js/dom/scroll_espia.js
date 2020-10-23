const d = document;

const scrollSpy = () => {

    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries) => {
        // console.log("Entries: " + entries);
        entries.forEach(entry => {
            // console.log("entry", entry);
            const id = entry.target.getAttribute("id");
            // console.log(id)
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
    };

    const observer = new IntersectionObserver(cb, {
        // root
        // rootMargin: "-250px"
        threshold: [0.5, 0.75]
    });

    $sections.forEach(el => observer.observe(el));

}

export default scrollSpy;