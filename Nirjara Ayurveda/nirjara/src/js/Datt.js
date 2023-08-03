import $ from 'jquery';

function Datt() {


    // $(document).ready(function () {

        
        $("#dd").datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd/mm/yy',
            autoclose: true,
            minDate: new Date(),
    
            beforeShowDay: function (date) {
                var day = date.getDay();
                return [(day > 0 && day < 7), ""];
            }
        });
    
    // })

    



}

export default Datt
