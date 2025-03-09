// Specifically used for select(tab) function
const w = ["greyWindow", "cssWindow", "htmlWindow", "jsWindow"];
const t = ["greyTab", "cssTab", "htmlTab", "jsTab"];
 


$(document).ready(function(){

    //temp z-indexing bring to front
    // $("#jsWindow").css("z-index", 5);


    // Nav for webpage window elements?
    // Open miniWindow in new tab when done?
    // Always visible window

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
        // miniWindow Body
        $("#bgCol-body").on('keypress', function(e){
            if (e.which == 13) {
                $("#miniWindow").css("background-color", $("#bgCol-body").val());
            }
        });
        $("#font-body").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").css("font-family", $("#font-body").val());
                $("#h2").css("font-family", $("#font-body").val());
                $(".p").css("font-family", $("#font-body").val());
                $("#oList").css("font-family", $("#font-body").val());
                $("#uList").css("font-family", $("#font-body").val());
                $("#a").css("font-family", $("#font-body").val());
                $("#label").css("font-family", $("#font-body").val());
                $("#input").css("font-family", $("#font-body").val());
                $("#button").css("font-family", $("#font-body").val());
                $("#table").css("font-family", $("#font-body").val());
            }
        });
        // miniWindow h1
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
        $("#align-h1").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").css("text-align", $("#align-h1").val());
            }
        });    
        // miniWindow h2
        $("#col-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").css("color", $("#col-h2").val());
            }
        });
        $("#font-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").css("font-family", $("#font-h2").val());
            }
        });
        $("#align-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").css("text-align", $("#align-h2").val());
            }
        });
        // miniWindow h2
        $("#col-p").on('keypress', function(e){
            if (e.which == 13) {
                $(".p").css("color", $("#col-p").val());
            }
        });
        $("#font-p").on('keypress', function(e){
            if (e.which == 13) {
                $(".p").css("font-family", $("#font-p").val());
            }
        });
        // miniWindow i and b
        $("#bgCol-ib").on('keypress', function(e){
            if (e.which == 13) {
                $(".ib").css("background-color", $("#bgCol-ib").val());
            }
        });
        $("#col-ib").on('keypress', function(e){
            if (e.which == 13) {
                $(".ib").css("color", $("#col-ib").val());
            }
        });
        // miniWindow a and input
        $("#font-aInput").on('keypress', function(e){
            if (e.which == 13) {
                $("#a").css("font-family", $("#font-aInput").val());
                $("#label").css("font-family", $("#font-aInput").val());
                $("#input").css("font-family", $("#font-aInput").val());
            }
        });
        // miniWindow button
        $("#bgCol-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("background-color", $("#bgCol-button").val());
            }
        });
        $("#col-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("color", $("#col-button").val());
            }
        });
        $("#margin-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin", $("#margin-button").val());
            }
        });
        $("#marginTop-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-top", $("#marginTop-button").val());
            }
        });
        $("#marginBottom-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-bottom", $("#marginBottom-button").val());
            }
        });
        $("#marginLeft-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-left", $("#marginLeft-button").val());
            }
        });
        $("#marginRight-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-right", $("#marginRight-button").val());
            }
        });
        $("#padding-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding", $("#padding-button").val());
            }
        });
        $("#paddingTop-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-top", $("#paddingTop-button").val());
            }
        });
        $("#paddingBottom-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-bottom", $("#paddingBottom-button").val());
            }
        });
        $("#paddingLeft-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-left", $("#paddingLeft-button").val());
            }
        });
        $("#paddingRight-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-right", $("#paddingRight-button").val());
            }
        });
        // miniWindow .collections class
        $("#bgCol-class").on('keypress', function(e){
            if (e.which == 13) {
                $(".collections").css("background-color", $("#bgCol-class").val());
            }
        });
        $("#col-class").on('keypress', function(e){
            if (e.which == 13) {
                $(".collections").css("color", $("#col-class").val());
            }
        });
        // miniWindow #lines, #lists or #media id
        $("#bgCol-id").on('keypress', function(e){
            if (e.which == 13) {
                let idName = "#" +  $("#idName").val();

                $("#lines").css("background-color", "white");
                $("#lists").css("background-color", "white");
                $("#media").css("background-color", "white");

                $(idName).css("background-color", $("#bgCol-id").val());
            }
        });
        $("#margin-id").on('keypress', function(e){
            if (e.which == 13) {
                let idName = "#" +  $("#idName").val();

                $("#lines").css("margin", "5px");
                $("#lists").css("margin", "5px");
                $("#media").css("margin", "5px");

                $(idName).css("margin", $("#margin-id").val());
            }
        });
        $("#padding-id").on('keypress', function(e){
            if (e.which == 13) {
                let idName = "#" +  $("#idName").val();

                $("#lines").css("padding", "5px");
                $("#lists").css("padding", "5px");
                $("#media").css("padding", "5px");

                $(idName).css("padding", $("#padding-id").val());
            }
        });
    
    // Change HTML
        // miniWindow Title
        $("#text-title").on('keypress', function(e){
            if (e.which == 13) {
                $("#title").html($("#text-title").val());
            }
        });
        // miniWindow #lines Content
        $("#text-h1").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").html($("#text-h1").val());
            }
        }); 
        $("#text-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").html($("#text-h2").val());
            }
        }); 
        $("#text-p").on('keypress', function(e){
            if (e.which == 13) {
                $("#p").html($("#text-p").val());
            }
        }); 
        $("#text-pi").on('keypress', function(e){
            if (e.which == 13) {
                let pItalicized = $("#text-pi").val();

                let result1 = pItalicized.replace(" *", " <i class='ib'>");
                let result2 = result1.replace("*", "</i>");
                
                // console.log(result2);
                
                $("#pi").html(result2);
            }
        });
        $("#text-pb").on('keypress', function(e){
            if (e.which == 13) {
                let pBolded = $("#text-pb").val();

                let result1 = pBolded.replace(" **", " <b class='ib'>");
                let result2 = result1.replace("**", "</b>");
                
                // console.log(result2);
                
                $("#pb").html(result2);
            }
        });
        // miniWindow #lists Content
        $("#text-ol1, #text-ol2, #text-ol3, #text-ol4, #text-ol5").on('keypress', function(e){
            if (e.which == 13) {                
                $("#ol1").html($("#text-ol1").val());
                $("#ol2").html($("#text-ol2").val());
                $("#ol3").html($("#text-ol3").val());
                $("#ol4").html($("#text-ol4").val());
                $("#ol5").html($("#text-ol5").val());
            }
        });
        $("#text-ul1, #text-ul2, #text-ul3, #text-ul4, #text-ul5").on('keypress', function(e){
            if (e.which == 13) {                
                $("#ul1").html($("#text-ul1").val());
                $("#ul2").html($("#text-ul2").val());
                $("#ul3").html($("#text-ul3").val());
                $("#ul4").html($("#text-ul4").val());
                $("#ul5").html($("#text-ul5").val());
            }
        });
        // miniWindow #media Content
        $("#src-img").on('keypress', function(e){
            if (e.which == 13) {                
                $("#img").attr("src", $("#src-img").val());
            }
        });
        $("#href-a").on('keypress', function(e){
            if (e.which == 13) {                
                $("#a").attr("href", $("#href-a").val());
            }
        });

        $("#text-label").on('keypress', function(e){
            if (e.which == 13) {                
                $("#label").html($("#text-label").val());
            }
        });
        $("#text-placeholder").on('keypress', function(e){
            if (e.which == 13) {                
                $("#input").attr("placeholder", $("#text-placeholder").val());
            }
        });
        $("#text-button").on('keypress', function(e){
            if (e.which == 13) {                
                $("#button").html($("#text-button").val());
            }
        });

        $("#text-th1, #text-th2, #text-th3, #text-td1a, #text-td2a, #text-td3a, #text-td1b, #text-td2b, #text-td3b").on('keypress', function(e){
            if (e.which == 13) {                
                $("#th1").html($("#text-th1").val());
                $("#th2").html($("#text-th2").val());
                $("#th3").html($("#text-th3").val());

                $("#td1a").html($("#text-td1a").val());
                $("#td2a").html($("#text-td2a").val());
                $("#td3a").html($("#text-td3a").val());

                $("#td1b").html($("#text-td1b").val());
                $("#td2b").html($("#text-td2b").val());
                $("#td3b").html($("#text-td3b").val());
            }
        });

        // Change JS
            // Console Log Entries
            $("#call-console").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#test").html("> " + $("#call-console").val());
                }
            });
            $("#call-arr").on('keypress', function(e){
                if (e.which == 13) {  
                    
                    let arrAll = $("#call-arr").val();
                    let result = "";
                    
                    if (arrAll.includes("[arr]")){
                        result = arrAll.replace("[arr]", "['" + $("#var-arr0").val() + "', '" + $("#var-arr1").val() + "', '" + $("#var-arr2").val() + "']");
                    } else {
                        result = "Error: Requires '[arr]' within the input."
                    }
                    
                    $("#arr").html("> " + result);
                }
            });
            $("#call-arrIndex").on('keypress', function(e){
                if (e.which == 13) {  
                    
                    let arrI = $("#call-arrIndex").val();
                    let result = "";

                    if (arrI.includes("[arr[0]]")){
                        result = arrI.replace("[arr[0]]", "'" + $("#var-arr0").val() + "'");
                    } else if (arrI.includes("[arr[1]]")){
                        result = arrI.replace("[arr[1]]", "'" + $("#var-arr1").val() + "'");
                    } else if (arrI.includes("[arr[2]]")){
                        result = arrI.replace("[arr[2]]", "'" + $("#var-arr2").val() + "'");
                    } else {
                        result = "Error: Requires '[arr[0]]', '[arr[1]]' OR [arr[2]]' within the input."
                    }

                    $("#arrIndex").html("> " + result);
                }
            });
            $("#call-var").on('keypress', function(e){
                if (e.which == 13) {  
                    
                    let varr = $("#call-var").val();
                    let result = "";

                    if (varr.includes("[obj.[prop1]]")){
                        result = varr.replace("[obj.[prop1]]", "'" + $("#var-objprop1").val() + "'");
                    } else if (varr.includes("[obj.[prop2]]")){
                        result = varr.replace("[obj.[prop2]]", "'" + $("#var-objprop2").val() + "'");
                    } else if (varr.includes("[obj.[prop3]]")){
                        result = varr.replace("[obj.[prop3]]", "'" + $("#var-objprop3").val() + "'");
                    } else if (varr.includes("[arr[0]]")){
                        result = varr.replace("[arr[0]]", "'" + $("#var-arr0").val() + "'");
                    } else if (varr.includes("[arr[1]]")){
                        result = varr.replace("[arr[1]]", "'" + $("#var-arr1").val() + "'");
                    } else if (varr.includes("[arr[2]]")){
                        result = varr.replace("[arr[2]]", "'" + $("#var-arr2").val() + "'");
                    } else if (varr.includes("[num]")) {
                        result = varr.replace("[num]", "'" + $("#var-num").val() + "'");
                    } else if (varr.includes("[str]")) {
                        result = varr.replace("[str]", "'" + $("#var-str").val() + "'");
                    } else if (varr.includes("[bool]")) {                       
                        result = varr.replace("[bool]", "'" + $("#var-bool").val() + "'");
                    } else {
                        result = "Error: Requires a variable value within the input."
                        $("#varSelect").html("> " + result);
                    }

                    $("#varPrint").html("> " + result);
                    // console.log(result);
                }
            });
            // Call User-Chosen Function
            $("#call-function").on('keypress', function(e){
                if (e.which == 13) {
                    
                    let result1 = "";
                    let result2 = "";

                    // If 1st Function (w/ If/Else Statements) is Called
                    if ($("#call-function").val() == $("#function1").val()) {
                        if ($("#var-bool").val().toLowerCase() == "true") {  
                            result1 = "> If you're reading this, the boolean has been set to true!";
                        } else {
                            result1 = "";
                        }
            
                        let condition = $("#condition").val();
                        let val1 = 1;
                        let val2 = 2;

                        // Complicated way of making sure the conditional expressions are interpreted as numbers in an expression and NOT strings (converting using Boolean() keeps just returning true when the value isn't empty, regardless of if the expression's correct)

                        if (condition.includes("+") || condition.includes("-") || condition.includes("*") || condition.includes("x") || condition.includes("/")) {
                            result2 = "> Error: Haven't implemented addition, subtraction, multiplication or division yet, sorry!"
                        } else if (condition.includes("< ")) {
                            val1 = (condition.substr(0, condition.indexOf("<") - 1));
                            val2 = condition.substr(condition.indexOf("<") + 2);
                            
                            if (Number(val1) < Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>).";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>).";
                            }
                        } else if (condition.includes("> ")) {
                            val1 = (condition.substr(0, condition.indexOf(">") - 1));
                            val2 = condition.substr(condition.indexOf(">") + 2);
                            
                            if (Number(val1) > Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>).";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>).";
                            }
                        } else if (condition.includes("<=")) {
                            val1 = (condition.substr(0, condition.indexOf("<=") - 1));
                            val2 = condition.substr(condition.indexOf("<=") + 2);
                            
                            if (Number(val1) <= Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>).";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>).";
                            }
                        } else if (condition.includes(">=")) {
                            val1 = (condition.substr(0, condition.indexOf(">=") - 1));
                            val2 = condition.substr(condition.indexOf(">=") + 2);
                            
                            if (Number(val1) >= Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>).";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>).";
                            }
                        } else if (condition.includes("==")) {
                            val1 = (condition.substr(0, condition.indexOf("==") - 1));
                            val2 = condition.substr(condition.indexOf("==") + 2);
                            
                            if (Number(val1) == Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>).";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>).";
                            }
                        }  

                        // console.log(Number(val1) + ", " + Number(val2));
                        // console.log(Number(val1) < Number(val2));

                        $("#bool").html(result1);
                        $("#ifElse").html(result2);                        
                    
                    // If 2nd Function (w/ For Loop Statement) is Called
                    } else if ($("#call-function").val() == $("#function2").val()) {
                        
                        let bigString = [];

                        for (let i = 0; i < $("#var-num").val(); i++) {
                            bigString.push($("#var-str").val());
                        }

                        $("#strLoop").html("\"" + bigString.join("") + "\"");
                        $("#strNum").html("The text was repeated " + $("#var-num").val() + " times, the same as the number variable.");
                        $("#strStr").html("The text written was \"" + $("#var-str").val() + "\", the same as the string variable.");

                    } else if ($("#call-function").val() == $("#function3").val() || ($("#call-function").val() == $("#function4").val())) {
                    
                        $("#bool").html("Error: This section requires a function with NO parameters.");
                        
                    } else {
                        $("#bool").html("");
                        $("#ifElse").html("");

                        $("#strLoop").html("");
                        $("#strNum").html("");
                        $("#strStr").html("");
                    }
                }
            });
            // When 3rd Function (w/ Variable Printing) is Called
            $("#call-parameter1").on('keypress', function(e){
                if (e.which == 13) {  
                    
                    let input = $("#call-parameter1").val();
                    let para = "";

                    if (input.includes($("#function3").val())) {
                        if (input.includes("[")) {
                            if (input.includes("[num]")) {
                                para = "'" + $("#var-num").val() + "'";
                            } else if (input.includes("[str]")) {
                                para = "'" + $("#var-str").val() + "'";
                            } else if (input.includes("[bool]")){       
                                para = "'" + $("#var-bool").val() + "'"; 
                            } else if (input.includes("[arr]")) {
                                para = "['" + $("#var-arr0").val() + "', '" + $("#var-arr1").val() + "', '" + $("#var-arr2").val() + "']";
                            } else if (input.includes("[arr[0]]")){
                                para = "'" + $("#var-arr0").val() + "'";
                            } else if (input.includes("[arr[1]]")){
                                para = "'" + $("#var-arr1").val() + "'";
                            } else if (input.includes("[arr[2]]")){
                                para =  "'" + $("#var-arr2").val() + "'";
                            } else if (input.includes("[obj]")) {
                                para = "{prop1: '" + $("#var-objprop1").val() + "', prop2: '" + $("#var-objprop2").val() + "', prop3: '" + $("#var-objprop3").val() + "'}";
                            } else if (input.includes("[obj.[prop1]]")){
                                para = "'" + $("#var-objprop1").val() + "'";
                            } else if (input.includes("[obj.[prop2]]")){
                                para = "'" + $("#var-objprop2").val() + "'";
                            } else if (input.includes("[obj.[prop3]]")){
                                para = "'" + $("#var-objprop3").val() + "'";
                            } else {
                                para = input.replace("[obj.[prop3]]", "'" + $("#var-objprop3").val() + "'");
                            }

                            $("#printVal").html("> You have printed out " + para);
                            // console.log(para);
                            
                        } else {
                            $("#printVal").html("> Error: Requires a parameter value within the input.");
                        }
                        
                    } else {
                        $("#printVal").html("> Error: Requires you to call Function #3, '" + $("#function3").val() + "', the one where a variable of choice is printed.");
                    } 
                }
            });
            // When 4th Function (w/ Window Alert Input/Output) is Called
            $(".button").click(function(){
                const msg = "You said... \"";

                if ($(".miniForm").val() != "") {
                    alert(msg + $(".miniForm").val() + "\"");
                } else {
                    alert("Type something in the input box first!")
                }
            });
});

// Not activated until a tab is clicked, after the doc is done loading
// UNABLE TO CONVERT TO JQUERY SINCE I CAN'T FIGURE OUT HOW TO SELECT ARRAY ELEMENTS
function select(tab) {
    
    for (let i = 0; i < w.length; i++) {
        // If the selected tab matches the current array tab, bring to front
        if (tab == w[i]) {
            document.getElementById(w[i]).style.zIndex = 3;

            document.getElementById(t[i]).style.borderBottomLeftRadius = "0px";
            document.getElementById(t[i]).style.borderBottomRightRadius = "0px";
            document.getElementById(t[i]).style.height = "70px";
        } else {
            document.getElementById(w[i]).style.zIndex = 1;

            document.getElementById(t[i]).style.borderBottomLeftRadius = "10px";
            document.getElementById(t[i]).style.borderBottomRightRadius = "10px";
            document.getElementById(t[i]).style.height = "50px";
        }
    } 
}

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

