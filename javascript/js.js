const w = ["greyWindow", "cssWindow", "htmlWindow", "jsWindow"];
const t = ["greyTab", "cssTab", "htmlTab", "jsTab"];

const msg = "You said... \"";

$(document).ready(function(){

    //temp z-indexing bring to front
    // $("#cssWindow").css("z-index", 5);

    // Changes Project name + Code filenames
    $("#inputFiles").on('keypress', function(e){
        if (e.which == 13) {
            $("#folderName").html($("#inputFiles").val().toUpperCase());
            $("#style").html($("#inputFiles").val());
            $("#index").html($("#inputFiles").val());
            $("#script").html($("#inputFiles").val());
    
            $("#stylesheet").html($("#inputFiles").val() + ".css");
            $("#scripting").html($("#inputFiles").val() + ".js");
        }
    });
    
    // Changes CSS filename
    $("#inputCss").on('keypress', function(e){
        if (e.which == 13) {
            $("#style").html($("#inputCss").val());
    
            $("#stylesheet").html($("#inputCss").val() + ".css");
        }
    });

    // Changes HTML filename
    $("#inputHtml").on('keypress', function(e){
        if (e.which == 13) {
            $("#index").html($("#inputHtml").val());
        }
    });

    // Changes JS filename
    $("#inputHtml").on('keypress', function(e){
        if (e.which == 13) {
            $("#script").html($("#inputJs").val());

            $("#scripting").html($("#inputJs").val() + ".js");
        }
    });


    // Change CSS
    $("#bgCol-body").on('keypress', function(e){
        if (e.which == 13) {
            $("#miniWindow").css("background-color", $("#bgCol-body").val());
        }
    });

    $("#col-h1").on('keypress', function(e){
        if (e.which == 13) {
            $("#h1").css("color", $("#col-h1").val());
        }
    });
    $("#font-h1").on('keypress', function(e){
        if (e.which == 13) {
            $("#h1").css("font-family", $("#font-h1").val());
        }
    });





    // Window alert with user input
    $(".button").click(function(){
        if ($(".miniForm").val() != "") {
            alert(msg + $(".miniForm").val() + "\"");
        } else {
            alert("Type something in the input box first!")
        }
    });
});

// Not activated until a tab is clicked, after the doc is done loading
function select(tab) {
    
    for (let i = 0; i < w.length; i++) {
        // If the selected tab matches the current array tab, bring to front
        if (tab == w[i]) {
            document.getElementById(w[i]).style.zIndex = 3;

            document.getElementById(t[i]).style.borderBottomLeftRadius = "0px";
            document.getElementById(t[i]).style.borderBottomRightRadius = "0px";
            document.getElementById(t[i]).style.height = "70px";
        } else {
            document.getElementById(w[i]).style.zIndex = 2;

            document.getElementById(t[i]).style.borderBottomLeftRadius = "10px";
            document.getElementById(t[i]).style.borderBottomRightRadius = "10px";
            document.getElementById(t[i]).style.height = "50px";
        }
    } 
}


// CONVERT TO JQUERY IF YOU CAN -- RN CANNOT FIND A WAY THAT ISN'T MESSY/TOO REPETITIVE SINCE IT'S HIGHLY DEPENDENT ON WHICH TAB IS CLICKED
// function select(tab) {
    
//     for (let i = 0; i < w.length; i++) {
//         // If the selected tab matches the current array tab, bring to front
//         if (tab == w[i]) {
//             $(w[i]).css("z-index", 3);

//             $(t[i]).css("border-bottom-left-radius", "0px");
//             $(t[i]).css("border-bottom-right-radius", "0px");
//             $(t[i]).css("height", "70px");
//         } else {
//             $(w[i]).css("z-index", 2);

//             $(t[i]).css("border-bottom-left-radius", "10px");
//             $(t[i]).css("border-bottom-right-radius", "10px");
//             $(t[i]).css("height", "50px");
//         }
//     } 
// }

