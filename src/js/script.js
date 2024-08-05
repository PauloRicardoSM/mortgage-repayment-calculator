$(document).ready(function() {
    $("#btnSubmit").click(function(event) {
        event.preventDefault();

        let hasErros = false;

        $('.input').each(function() {
            if (!$(this).val()) {
                $(this).nextAll('.error').css('display', 'block');
                hasErros = true;
            } else {
                $(this).nextAll('.error').css('display', 'none');
            }
        });
    });
});

// $(document).ready(function() {
//     $("#btnSubmit").click(function(event) {
//         event.preventDefault();

//         let hasErros = false;

//         $('.input').each(function() {
//             let errorElement = $(this).closest('p').find('.error');
//             if (!$(this).val()) {
//                 errorElement.css('display', 'block');
//                 hasErros = true;
//             } else {
//                 errorElement.css('display', 'none');
//             }
//         });
//     });
// });

