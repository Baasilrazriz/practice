

var val = 0
var val = 0;
for (let i = 5; i < 9; i++) {
    $("#proj" + i).hide()

}

$("#see").click(function () {
    if (val === 0) {
        for (let i = 5; i < 9; i++) {
            $("#proj" + i).show("false")
            val++

        }
    }
    else {
        for (let i = 5; i < 9; i++) {
            $("#proj" + i).hide("false")
val--
        }
    }



})

$("#mobile-viewbtn").click(function () {

$("#navbar").toggle("")
    $("#mobile-nav").toggle("")

            



})
$("#close").click(function () {

    $("#navbar").toggle("")
        $("#mobile-nav").toggle("")
    
                
    
    
    
    })
