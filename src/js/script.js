$(document).ready(function() {
    $("#btnSubmit").click(function(event) {
        event.preventDefault();

        let hasErros = false;

        const fields = [ 
            {name: 'mortgageAmount', errorId: 'mortgageAmountError'},
            {name: 'mortgageTerm', errorId: 'mortgageTermError'},
            {name: 'interestRate', errorId: 'interestRateError'}
        ];

        fields.forEach(campo => {
            if($(`input[name="${campo.name}"]`).val().trim() === '') {
                $(campo.errorId).css('display', 'block');
                hasErros = true;
            } else {
                $(campo.errorId).css('display', 'none');
            }
        });


        const fields = [ 
            {name: 'mortgageAmount', errorId: '#mortgageAmountError'},
            {name: 'mortgageTerm', errorId: '#mortgageTermError'},
            {name: 'interestRate', errorId: '#interestRateError'}
        ];

        fields.forEach(campo => {
            if ($(`input[name="${campo.name}"]`).val().trim() === '') {
                $(campo.errorId).css('display', 'block');
                hasErros = true;
            } else {
                $(campo.errorId).css('display', 'none');
            }
        });


        if(!$('input[name="mortgageType"]:checked').length) {
            $('#mortgageTypeError').css('display', 'block');
            hasErros = true;
        } else {
            $('#mortgageTypeError').css('display', 'none');
            hasErros = false;
        }
    });
});

// if($('input[name="mortgageAmount"]').val() === '') {
        //     $('#mortgageAmountError').css('display', 'block');
        //     hasErros = true;
        // } else {
        //     $('#mortgageAmountError').css('display', 'none');
        //     hasErros = false;
        // }

        // if($('input[name="mortgageTerm"]').val() === '') {
        //     $('#mortgageTermError').css('display', 'block');
        //     hasErros = true;
        // } else {
        //     $('#mortgageTermError').css('display', 'none');
        // hasErros = false;
        // }

        // if($('input[name="interestRate"]').val() === '') {
        //     $('#interestRateError').css('display', 'block');
        //     hasErros = true;
        // } else {
        //     $('#interestRateError').css('display', 'none');
        // hasErros = false;
        // }