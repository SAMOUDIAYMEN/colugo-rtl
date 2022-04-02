/*==============================================================*/
// Klev Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass();
            });
            submitMSG(false, text);
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyiUHuhKHPc_5GqTd-Ss2MRW1aQVOyC42En6LjWQHAMMc8qxxQ/exec'
        const form = document.forms['google-sheet']

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .catch(error => console.error('Error!', error.message))
            .then(document.getElementById("Continuer").disabled = true)
            .then(document.getElementById("Continuer").style.backgroundColor = "gray")
            .then(document.getElementById("Continuer").innerHTML = "المرجو الانتظار")
            .then(window.setTimeout(function () {
                document.getElementById("btn-show-popup").click();
                document.getElementById("Continuer").disabled = false;
                document.getElementById("Continuer").style.backgroundColor = "#5A2573"
                document.getElementById("Continuer").innerHTML = "أرسل"
            }, 1000))
            .then($("#contactForm")[0].reset())
    }


    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h4 text-left tada animated text-success";
        } else {
            var msgClasses = "h4 text-left text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict