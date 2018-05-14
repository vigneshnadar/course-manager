

(function () {


    jQuery(main)

    function main() {
       var h1 = jQuery('h1')
       h1.css('color','red')

        var tr = $('.template');
        var tr1 = tr.clone();

        var tbody = $('tbody')
        tbody.append(tr1)

    }

})();