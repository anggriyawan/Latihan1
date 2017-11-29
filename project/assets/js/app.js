$(document).ready(function () {

    var filter = $('#filter');

    filter.on('keyup', function () {
        var grid = $(".grid");
        var search = this.value.toLowerCase();

        grid.each(function () {
            var namaGrid = $(this).find('.detail').text().toLowerCase();


            if (namaGrid.indexOf(search) != -1) {
                $(this).show(300);
            } else {
                $(this).hide(300);
            }
        })
    });

});