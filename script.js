dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);

    setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        if (duration.asMilliseconds() <= 0) return;
        element.querySelector(".num-sec").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".num-min").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".num-hour").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".num-day").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
    }, 250);

}
activateCountdown(document.getElementById("myCountdown"), "2022-12-31");

// const hamburger = document.querySelector(".hamburger");
// const menuItem = document.querySelector(".menu-item");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     menuItem.classList.toggle("active");
// })
// document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     menuItem.classList.remove("active");
// }))
