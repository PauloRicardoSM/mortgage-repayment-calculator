 $(document).ready(function() {
    $('input[type="radio"][name="mortgageType"]').change(function() {
        $('input[type="radio"][name="mortgageType"]').each(function() {
            if ($(this).is(':checked')) {
                $(this).closest('.mortType').css('background-color', 'hsla(61, 70%, 52%, 0.2)');
                $(this).closest('.mortType').css('border-color', 'hsl(61, 70%, 52%)')
            } else {
                $(this).closest('.mortType').css('background-color', '');
            }
        });
    });  

    $('#btnClearAll').click(function() {
        $('#completedResu').css('display', 'none');
        $('#emptyResu').css('display', 'block');

        $('.mortType').css('background-color', '');
        $('.mortType').css('border-color', '');
    });

    $("#btnSubmit").click(function(event) {
        event.preventDefault();

        let hasErros = false;

        const fields = [ 
            {name: 'mortgageAmount', errorId: '#mortgageAmountError'},
            {name: 'mortgageTerm', errorId: '#mortgageTermError'},
            {name: 'interestRate', errorId: '#interestRateError'}
        ];

        fields.forEach(campo => {
            if($(`input[name="${campo.name}"]`).val().trim() === '') {
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

        function repaymentType(mortgageAmount, mortgageTerm, interestRate) {
            let monthlyInterestRate = (interestRate / 100) / 12;
            let numberPayments = mortgageTerm * 12;
            let monthlyRepayment = mortgageAmount * ((monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberPayments))/((Math.pow((1 + monthlyInterestRate), numberPayments)) - 1))
            let totalPayment = monthlyRepayment * numberPayments; 

            return { monthlyRepayment, totalPayment };
        }

        function interestOnlyType(mortgageAmount, mortgageTerm, interestRate) {
            let monthlyRepayment = mortgageAmount * ((interestRate / 100) / 12);
            let totalPayment = monthlyRepayment * mortgageTerm * 12;

            return { monthlyRepayment, totalPayment };
        }

        if(!hasErros) {
            let mortgageAmount = parseFloat($('#imortgageAmount').val());
            let mortgageTerm = parseInt($('#imortgageTerm').val());
            let interestRate = parseFloat($('#iinterestRate').val());
            let mortgageType = $('input[name="mortgageType"]:checked').val();

            if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate)) {
                alert("Invalid values");
                return;
            }

            if(mortgageType == "repayment") {
                let resu = repaymentType(mortgageAmount, mortgageTerm, interestRate);
                let completeMonthlyResu = resu.monthlyRepayment;
                let completeTotalPayment = resu.totalPayment;

                $('#monthlyResu').text(`£${completeMonthlyResu.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
                $('#repayResu').text(`£${completeTotalPayment.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
            } else {
                let resu = interestOnlyType(mortgageAmount, mortgageTerm, interestRate);
                let completeMonthlyResu = resu.monthlyRepayment;
                let completeTotalPayment = resu.totalPayment;

                $('#monthlyResu').text(`£${completeMonthlyResu.toLocaleString('en-GB', {minimumFractiondigits: 2, maximumFractionDigits: 2})}`);
                $('#repayResu').text(`£${completeTotalPayment.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
            }

            $('#emptyResu').css('display', 'none');
            $('#completedResu').css('display', 'block');

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
            });
        }
    });
});