$('p:eq(1)').attr('id', 'jotain');
$('#fp').remove();
$('#fdiv').css('background-color', 'grey');
$('#fdiv').css('color', 'white');


$('#nappi').click(function() {
    $('#jotain').after('<p id="tp">Hello user</p>');
});

$('#4p').hide();

$('#sdiv').hover(

    function() {
        $('#4p').text('About to select link').show();
    },

    function() {
        $('#4p').hide();
    }
)

