// DJ Utsav Website

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("input[type='text']").value;
        const mobile = document.querySelector("input[type='tel']").value;
        const details = document.querySelector("textarea").value;

        if (name === "" || mobile === "" || details === "") {
            alert("Please fill all details.");
            return;
        }

        const message =
`🎧 DJ Utsav Booking

Name: ${name}
Mobile: ${mobile}

Event Details:
${details}`;

        window.open(
            "https://wa.me/919368982298?text=" +
            encodeURIComponent(message),
            "_blank"
        );
    });

});
