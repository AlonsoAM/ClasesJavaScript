const d = document;
const ls = localStorage;

const darkTheme = (btn, classDark) => {

    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌙",
        sun = "☀️";

    const ligthMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light");
    }
    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }

    d.addEventListener('click', e => {

        if (e.target.matches(btn)) {
            // console.log($themeBtn.textContent)
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                ligthMode();
            }
        }
    })

    // console.log($selectors);

    d.addEventListener('DOMContentLoaded', e => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");

        if (ls.getItem("theme") === "light") ligthMode();

        if (ls.getItem("theme") === "dark") darkMode();
    })

}

export default darkTheme;