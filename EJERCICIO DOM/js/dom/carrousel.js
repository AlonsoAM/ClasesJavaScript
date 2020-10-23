const d = document;

const slider = () => {

    const $nextBtn = d.querySelector(".slider-buttons .next"),
        $prevBtn = d.querySelector(".slider-buttons .prev"),
        $sliders = d.querySelectorAll(".slider-slide");

    let i = 0;

    d.addEventListener("click", e => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            $sliders[i].classList.remove("active");
            i--;
            if (i < 0) {
                i = $sliders.length - 1;
            }
            $sliders[i].classList.add("active");
        }

        if (e.target === $nextBtn) {
            e.preventDefault();
            $sliders[i].classList.remove("active");
            i++;
            if (i > $sliders.length - 1) {
                i = 0;
            }
            $sliders[i].classList.add("active");
        }
    })

}

export default slider;