const d = document;
const w = window;

const responsiveMedia = (id, mq, mobileContent, desktopContent) => {
    let breakPoint = w.matchMedia(mq);
    const responsive = e => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        // console.log(e.matches);
    }
    breakPoint.addListener(responsive);
    responsive(breakPoint);
}

export default responsiveMedia;
