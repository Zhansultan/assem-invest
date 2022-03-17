let image = document.getElementById('white_phone_image');

document.getElementById("header-bottom-right").onmouseover = function() {
    image.src = 'images/Vector_black.svg';
};

document.getElementById("header-bottom-right").onmouseout = function() {
   image.src = 'images/Vector_white.svg';
};

let width = document.getElementById('buildings-first').offsetWidth;
console.log('width = ' + width);

let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

if(deviceWidth > 768) {

    console.log("device width = " + width)
    let buildings_third = document.getElementById('buildings-third');

    buildings_third.style.left = width/1.6 + 'px';
}


let buildings_second = document.getElementById("buildings-second")

buildings_second_height = buildings_second.offsetHeight + 60

let buildings = document.getElementById("buildings")

buildings.style.height = buildings_second_height + 'px'

document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '+' + x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '');
});

let request


$(document).ready(function () {
    $('#myform').submit(function(e) {
        e.preventDefault();

        if (request) {
            request.abort()
        }

        let $form = $(this)

        // Let's select and cache all the fields
        let $inputs = $form.find("input, select, button, textarea");

        // Serialize the data in the form
        let serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);

        request = $.ajax({
            url: "telegram.php",
            type: "POST",
            data: serializedData
        })

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // Log a message to the console
            let modal = document.getElementById('modal');
            modal.style.display = 'block';
            console.log("Hooray, it worked!");
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });

    });
});