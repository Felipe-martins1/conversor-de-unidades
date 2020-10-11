$('#dist-to-convert').click(function () {
    $('#medida').remove()
})


$('#dist-to-convert').change(function () {
    const select = $('#dist-to-convert').val()

    if (select == 'Centímetros') {
        $('#label').text('Distância em Centímetros');
        $('#calc').click(function () {
            const cm = parseFloat($('#milhas').val())
            const metros = (cm / 100).toFixed(2)
            $('#metros').val(metros)
        })
    }

    else if (select == 'Milhas') {
        $('#label').text('Distância em Milhas');
        $('#calc').click(function () {
            const milhas = parseFloat($('#milhas').val())
            const metros = (1609.34 * milhas).toFixed(2)
            $('#metros').val(metros)
        })
    }

    else if (select == 'Quilômetros') {
        $('#label').text('Distância em Quilômetros');
        $('#calc').click(function () {
            const km = parseFloat($('#milhas').val())
            const metros = (1000 * km).toFixed(2)
            $('#metros').val(metros)
        })
    }
})

