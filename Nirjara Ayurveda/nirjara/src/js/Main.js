import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';

$(document).ready(function () {
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

    });
    $(".btn-appointment").click(function () {
        $(".btn-appointment").removeClass("btn-appointment");
        $(".btn-text").addClass("btn-appointment-active");
        $(".nav-link").click(function () {
            $(".btn-text").removeClass("btn-appointment-active");
            $(".btn-text").addClass("btn-appointment");
        });
    });



    // $("#date").datepicker({
    //     changeMonth: true,
    //     changeYear: true,
    //     dateFormat: 'dd/mm/yy',
    //     autoclose: true,
    //     minDate: new Date(),

    //     beforeShowDay: function (date) {
    //         var day = date.getDay();
    //         return [(day > 0 && day < 7), ""];
    //     }
    // });






    // $("#date").on('click', function () {
    //     $("#date").datepicker({
    //         changeMonth: true,
    //         changeYear: true,
    //         dateFormat: 'dd/mm/yy',
    //         autoclose: true,
    //         minDate: new Date(),


    //         beforeShowDay: function (date) {
    //             var day = date.getDay();
    //             return [(day > 0 && day < 7), ""];
    //         }
    //     });
    // })

})

