$('form').validate();

$("#myname").rules("add", {
    required: true,
    minlength: 5,
    maxlength: 30,
});

$("#mydate").rules("add", {
    required: true,
    date: true,
    messages: {
        required: "This field is required",
        date: jQuery.validator.format("Please enter correct date")
    }
});

$("#myemail").rules("add", {
    required: true,
    email: true,
    messages: {
        required: "This field is required",
        email: jQuery.validator.format("Please enter correct email")
    }
});



jQuery.validator.addMethod('ip', function(value) {
    var split = value.split('.');
    if (split.length != 4)
        return false;

    for (var i = 0; i < split.length; i++) {
        var s = split[i];
        if (s.length == 0 || isNaN(s) || s < 0 || s > 255)
            return false;
    }
    return true;
}, 'Please enter correct ip');

$("#myip").rules("add", {
        ip: 'ip',
    }

);
