$(document).ready(function() {
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
            let monthlyInterestRate = interestRate / 12;
            let numberPayments = mortgageTerm * 12;
            let monthlyRepayment = mortgageAmount * ((monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberPayments))/((Math.pow((1 + monthlyInterestRate), numberPayments)) - 1))
            let totalPayment = monthlyRepayment * numberPayments; 

            return { monthlyRepayment, totalPayment };
        }

        function interestOnlyType(mortgageAmount, mortgageTerm, interestRate) {
            let monthlyRepayment = mortgageAmount * (interestRate / 12);
            let totalPayment = monthlyRepayment * mortgageTerm * 12;

            return { monthlyRepayment, totalPayment };
        }

        if(!hasErros) {
            let mortgageAmount = $('#imortgageAmount').val();
            let mortgageTerm = $('#mortgageTerm').val();
            let interestRate = $('#interestRate').val();
            let mortgageType = $('input[name="mortgageType"]:checked').val();

            if(mortgageType == "repayment") {
                let resu = repaymentType(mortgageAmount, mortgageTerm, interestRate);
                let completeMonthlyResu = resu.monthlyRepayment;
                let completeTotalPayment = resu.totalPayment;

                $('#monthlyResu').text(`${completeMonthlyResu.toFixed(2)}`);
                $('#repayResu').text(`${completeTotalPayment.toFixed(2)}`);
            } else {
                let resu = interestOnlyType(mortgageAmount, mortgageTerm, interestRate);
                let completeMonthlyResu = resu.monthlyRepayment;
                let completeTotalPayment = resu.totalPayment;

                $('#monthlyResu').text(`${completeMonthlyResu.toFixed(2)}`);
                $('#repayResu').text(`${completeTotalPayment.toFixed(2)}`);
            }
        }
    });
});