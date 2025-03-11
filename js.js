// Specifically used for select(tab) function
const w = ["greyWindow", "cssWindow", "htmlWindow", "jsWindow"];
// const w = ["greyWindow", "cssCodeWindow", "htmlCodeWindow", "jsCodeWindow"];
const t = ["greyTab", "cssTab", "htmlTab", "jsTab"];

let syntax = false;

//temp z-indexing bring to front
// document.getElementById("jsWindow").style.zIndex = 5;
  

$(document).ready(function(){

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

            $("#css-2").html($("#inputFiles").val() + ".css");
            $("#js-2").html($("#inputFiles").val() + ".js");
        }
    });    
    // Changes CSS filename
    $("#inputCss").on('keypress', function(e){
        if (e.which == 13) {
            $("#style").html($("#inputCss").val());
    
            $("#stylesheet").html($("#inputCss").val() + ".css");

            $("#css-2").html($("#inputCss").val() + ".css");
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

            $("#js-2").html($("#inputJs").val() + ".js");
        }
    });

    // Toggle Code Appearance
    $("#syntaxCheck").click(function(){
        if (syntax) {
            $("#syntaxCheck").html("Change to Simplified Code?");
        } else {
            $("#syntaxCheck").html("Change to Real Syntax?");
        }
    });
    
    // Change CSS
        // miniWindow Body
        $("#bgCol-body").on('keypress', function(e){
            if (e.which == 13) {
                $("#miniWindow").css("background-color", $("#bgCol-body").val());

                $("#bgCol-body-2").html("background-color: " + $("#bgCol-body").val() + ";");
            }
        });
        $("#font-body").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").css("font-family", $("#font-body").val());
                $("#h2").css("font-family", $("#font-body").val());
                $(".p").css("font-family", $("#font-body").val());
                $("#uList").css("font-family", $("#font-body").val());
                $("#oList").css("font-family", $("#font-body").val());
                $("#a").css("font-family", $("#font-body").val());
                $("#label").css("font-family", $("#font-body").val());
                $("#input").css("font-family", $("#font-body").val());
                $("#button").css("font-family", $("#font-body").val());
                $("#table").css("font-family", $("#font-body").val());

                $("#font-body-2").html("font-family: " + $("#font-body").val() + ";");
            }
        });
        // miniWindow h1
        $("#col-h1").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").css("color", $("#col-h1").val());

                $("#col-h1-2").html("color: " + $("#col-h1").val() + ";");
            }
        });
        $("#font-h1").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").css("font-family", $("#font-h1").val());

                $("#font-h1-2").html("font-family: " + $("#font-h1").val() + ";");
            }
        });
        $("#align-h1").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").css("text-align", $("#align-h1").val());

                $("#align-h1-2").html("text-align: " + $("#align-h1").val() + ";");
            }
        });    
        // miniWindow h2
        $("#col-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").css("color", $("#col-h2").val());

                $("#col-h2-2").html("color: " + $("#col-h2").val() + ";");
            }
        });
        $("#font-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").css("font-family", $("#font-h2").val());
                
                $("#font-h2-2").html("font-family: " + $("#font-h2").val() + ";");
            }
        });
        $("#align-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").css("text-align", $("#align-h2").val());

                $("#align-h2-2").html("text-align: " + $("#align-h2").val() + ";");
            }
        });
        // miniWindow p
        $("#col-p").on('keypress', function(e){
            if (e.which == 13) {
                $(".p").css("color", $("#col-p").val());

                $("#col-p-2").html("color: " + $("#col-p").val() + ";");
            }
        });
        $("#font-p").on('keypress', function(e){
            if (e.which == 13) {
                $(".p").css("font-family", $("#font-p").val());

                $("#font-p-2").html("font-family: " + $("#font-p").val() + ";");
            }
        });
        // miniWindow i and b
        $("#bgCol-ib").on('keypress', function(e){
            if (e.which == 13) {
                $(".ib").css("background-color", $("#bgCol-ib").val());

                $("#bgCol-ib-2").html("background-color: " + $("#bgCol-ib").val() + ";");
            }
        });
        $("#col-ib").on('keypress', function(e){
            if (e.which == 13) {
                $(".ib").css("color", $("#col-ib").val());

                $("#col-ib-2").html("color: " + $("#col-ib").val() + ";");
            }
        });
        // miniWindow a and input
        $("#font-aInput").on('keypress', function(e){
            if (e.which == 13) {
                $("#a").css("font-family", $("#font-aInput").val());
                $("#label").css("font-family", $("#font-aInput").val());
                $("#input").css("font-family", $("#font-aInput").val());

                $("#font-aInput-2").html("font-family: " + $("#font-aInput").val() + ";");
            }
        });
        // miniWindow button
        $("#bgCol-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("background-color", $("#bgCol-button").val());

                $("#bgCol-button-2").html("background-color: " + $("#bgCol-button").val() + ";");
            }
        });
        $("#col-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("color", $("#col-button").val());

                $("#col-button-2").html("color: " + $("#col-button").val() + ";");
            }
        });
        $("#margin-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin", $("#margin-button").val());

                $("#margin-button-2").html("margin: " + $("#margin-button").val() + ";");
            }
        });
        $("#marginTop-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-top", $("#marginTop-button").val());

                $("#marginTop-button-2").html("margin-top: " + $("#marginTop-button").val() + ";");
            }
        });
        $("#marginBottom-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-bottom", $("#marginBottom-button").val());

                $("#marginBottom-button-2").html("margin-bottom: " + $("#marginBottom-button").val() + ";");
            }
        });
        $("#marginLeft-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-left", $("#marginLeft-button").val());

                $("#marginLeft-button-2").html("margin-left: " + $("#marginLeft-button").val() + ";");
            }
        });
        $("#marginRight-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("margin-right", $("#marginRight-button").val());

                $("#marginRight-button-2").html("margin-right: " + $("#marginRight-button").val() + ";");
            }
        });
        $("#padding-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding", $("#padding-button").val());

                $("#padding-button-2").html("padding: " + $("#padding-button").val() + ";");
            }
        });
        $("#paddingTop-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-top", $("#paddingTop-button").val());

                $("#paddingTop-button-2").html("padding-top: " + $("#paddingTop-button").val() + ";");
            }
        });
        $("#paddingBottom-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-bottom", $("#paddingBottom-button").val());

                $("#paddingBottom-button-2").html("padding-bottom: " + $("#paddingBottom-button").val() + ";");
            }
        });
        $("#paddingLeft-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-left", $("#paddingLeft-button").val());

                $("#paddingLeft-button-2").html("padding-left: " + $("#paddingLeft-button").val() + ";");
            }
        });
        $("#paddingRight-button").on('keypress', function(e){
            if (e.which == 13) {
                $("#button").css("padding-right", $("#paddingRight-button").val());

                $("#paddingRight-button-2").html("padding-right: " + $("#paddingRight-button").val() + ";");
            }
        });
        // miniWindow .collections class
        $("#bgCol-class").on('keypress', function(e){
            if (e.which == 13) {
                $(".collections").css("background-color", $("#bgCol-class").val());

                $("#bgCol-class-2").html("background-color: " + $("#bgCol-class").val() + ";");
            }
        });
        $("#col-class").on('keypress', function(e){
            if (e.which == 13) {
                $(".collections").css("color", $("#col-class").val());

                $("#col-class-2").html("color: " + $("#col-class").val() + ";");
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

                $("#bgCol-id-2").html("background-color: " + $("#bgCol-id").val() + ";");
            }
        });
        $("#margin-id").on('keypress', function(e){
            if (e.which == 13) {
                let idName = "#" +  $("#idName").val();

                $("#lines").css("margin", "5px");
                $("#lists").css("margin", "5px");
                $("#media").css("margin", "5px");

                $(idName).css("margin", $("#margin-id").val());

                $("#margin-id-2").html("margin: " + $("#margin-id").val() + ";");
            }
        });
        $("#padding-id").on('keypress', function(e){
            if (e.which == 13) {
                let idName = "#" +  $("#idName").val();

                $("#lines").css("padding", "5px");
                $("#lists").css("padding", "5px");
                $("#media").css("padding", "5px");

                $(idName).css("padding", $("#padding-id").val());

                $("#padding-id-2").html("padding: " + $("#padding-id").val() + ";");
            }
        });
    
    // Change HTML
        // miniWindow Title
        $("#text-title").on('keypress', function(e){
            if (e.which == 13) {
                $("#title").html($("#text-title").val());

                $("#title-2").html($("#text-title").val());
            }
        });
        // miniWindow #lines Content
        $("#text-h1").on('keypress', function(e){
            if (e.which == 13) {
                $("#h1").html($("#text-h1").val());

                $("#h1-2").html($("#text-h1").val());
            }
        }); 
        $("#text-h2").on('keypress', function(e){
            if (e.which == 13) {
                $("#h2").html($("#text-h2").val());

                $("#h2-2").html($("#text-h2").val());
            }
        }); 
        $("#text-p").on('keypress', function(e){
            if (e.which == 13) {
                $("#p").html($("#text-p").val());

                $("#p-2").html($("#text-p").val());
            }
        }); 
        $("#text-pi").on('keypress', function(e){
            if (e.which == 13) {
                let pItalicized = $("#text-pi").val();

                let result1 = pItalicized.replaceAll(" *", " <i class='ib'>");
                let result2 = result1.replaceAll("*", "</i>");
                
                // console.log(result2);
                
                $("#pi").html(result2);
                
                let result3 = result2.replaceAll("<i class='ib'>", "&lt;i&gt;");
                let result4 = result3.replaceAll("</i>", "&lt;/i&gt;");

                $("#pi-2").html(result4);
                
            }
        });
        $("#text-pb").on('keypress', function(e){
            if (e.which == 13) {
                let pBolded = $("#text-pb").val();

                let result1 = pBolded.replaceAll(" **", " <b class='ib'>");
                let result2 = result1.replaceAll("**", "</b>");
                
                // console.log(result2);
                
                $("#pb").html(result2);

                let result3 = result2.replaceAll("<b class='ib'>", "&lt;b&gt;");
                let result4 = result3.replaceAll("</b>", "&lt;/b&gt;");

                $("#pb-2").html(result4);
            }
        });
        // miniWindow #lists Content
        $("#text-ul1, #text-ul2, #text-ul3, #text-ul4, #text-ul5").on('keypress', function(e){
            if (e.which == 13) {                
                $("#ul1").html($("#text-ul1").val());
                $("#ul2").html($("#text-ul2").val());
                $("#ul3").html($("#text-ul3").val());
                $("#ul4").html($("#text-ul4").val());
                $("#ul5").html($("#text-ul5").val());

                $("#ulA-2").html($("#text-ul1").val());
                $("#ulB-2").html($("#text-ul2").val());
                $("#ulC-2").html($("#text-ul3").val());
                $("#ulD-2").html($("#text-ul4").val());
                $("#ulE-2").html($("#text-ul5").val());
            }
        });
        $("#text-ol1, #text-ol2, #text-ol3, #text-ol4, #text-ol5").on('keypress', function(e){
            if (e.which == 13) {                
                $("#ol1").html($("#text-ol1").val());
                $("#ol2").html($("#text-ol2").val());
                $("#ol3").html($("#text-ol3").val());
                $("#ol4").html($("#text-ol4").val());
                $("#ol5").html($("#text-ol5").val());

                $("#olA-2").html($("#text-ol1").val());
                $("#olB-2").html($("#text-ol2").val());
                $("#olC-2").html($("#text-ol3").val());
                $("#olD-2").html($("#text-ol4").val());
                $("#olE-2").html($("#text-ol5").val());
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

                $("#label-2").html($("#text-label").val());
            }
        });
        $("#text-placeholder").on('keypress', function(e){
            if (e.which == 13) {                
                $("#input").attr("placeholder", $("#text-placeholder").val());

                $("#input-2").html($("#text-placeholder").val());
            }
        });
        $("#text-button").on('keypress', function(e){
            if (e.which == 13) {                
                $("#button").html($("#text-button").val());

                $("#button-2").html($("#text-button").val());
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



                $("#th1-2").html($("#text-th1").val());
                $("#th2-2").html($("#text-th2").val());
                $("#th3-2").html($("#text-th3").val());

                $("#td1A-2").html($("#text-td1a").val());
                $("#td2A-2").html($("#text-td2a").val());
                $("#td3A-2").html($("#text-td3a").val());

                $("#td1B-2").html($("#text-td1b").val());
                $("#td2B-2").html($("#text-td2b").val());
                $("#td3B-2").html($("#text-td3b").val());
            }
        });

        // Change JS
            // Declaring Variables
            $("#var-num").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#num-2").html($("#var-num").val());
                }
            });
            $("#var-str").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#str-2").html($("#var-str").val());
                }
            });
            $("#var-bool").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#bool-2").html($("#var-bool").val());
                }
            });

            $("#var-arr0").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#arr0-2").html($("#var-arr0").val());
                }
            });
            $("#var-arr1").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#arr1-2").html($("#var-arr1").val());
                }
            });
            $("#var-arr2").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#arr2-2").html($("#var-arr2").val());
                }
            });

            $("#var-objprop1").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#obj1-2").html($("#var-objprop1").val());
                }
            });
            $("#var-objprop2").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#obj2-2").html($("#var-objprop2").val());
                }
            });
            $("#var-objprop3").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#obj3-2").html($("#var-objprop3").val());
                }
            });

            // Function Naming/Altering
            $("#function1").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#funcName1").html($("#function1").val());
                }
            });
            $("#function2").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#funcName2").html($("#function2").val());
                }
            });
            $("#function3").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#funcName3").html($("#function3").val());
                }
            });

            $("#condition").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#expression").html($("#condition").val());
                }
            });

            // Console Log Entries
            $("#call-console").on('keypress', function(e){
                if (e.which == 13) {                
                    $("#test").html("> " + $("#call-console").val());

                    $("#console-2").html("\"" + $("#call-console").val() + "\"");
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
                    // console.log(result);


                    let result2 = arrAll.replaceAll("[a", "\" + a");
                    let result3 = "";
                    let end = "\"";

                    // Might fix later IF NEEDED: determines how the output should be concatenated + how it should look in the "real syntax" window
                    if (result2.includes("] ")){
                        result3 = result2.replaceAll("] ", " + \" ");
                    } else if (result2.includes("],")){
                        result3 = result2.replaceAll("],", " + \",");
                    } else if (result2.includes("]]")) {
                        result3 = result2.replaceAll("]", "");
                        end = "";
                    }

                    $("#arr-2").html("\"" + result3 + end);
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

                    let result2 = arrI.replaceAll("[a", "\" + a");
                    let result3 = "";
                    let end = "\"";

                    // Might fix later IF NEEDED: determines how the output should be concatenated + how it should look in the "real syntax" window
                    if (result2.includes("]] ")){
                        result3 = result2.replaceAll("]] ", "] + \" ");
                    } else if (result2.includes("]],")){
                        result3 = result2.replaceAll("]],", "] + \",");
                    } else if (result2.includes("]]")) {
                        result3 = result2.replaceAll("]]", "]");
                        end = "";
                    }

                    $("#arrI-2").html("\"" + result3 + end);
                }
            });
            $("#call-var").on('keypress', function(e){
                if (e.which == 13) {  
                    
                    let varr = $("#call-var").val();
                    let result = "";

                    if (varr.includes("[obj.[prop1]]")){
                        result = varr.replaceAll("[obj.[prop1]]", "'" + $("#var-objprop1").val() + "'");
                    } else if (varr.includes("[obj.[prop2]]")){
                        result = varr.replaceAll("[obj.[prop2]]", "'" + $("#var-objprop2").val() + "'");
                    } else if (varr.includes("[obj.[prop3]]")){
                        result = varr.replaceAll("[obj.[prop3]]", "'" + $("#var-objprop3").val() + "'");
                    } else if (varr.includes("[arr[0]]")){
                        result = varr.replaceAll("[arr[0]]", "'" + $("#var-arr0").val() + "'");
                    } else if (varr.includes("[arr[1]]")){
                        result = varr.replaceAll("[arr[1]]", "'" + $("#var-arr1").val() + "'");
                    } else if (varr.includes("[arr[2]]")){
                        result = varr.replaceAll("[arr[2]]", "'" + $("#var-arr2").val() + "'");
                    } else if (varr.includes("[num]")) {
                        result = varr.replaceAll("[num]", "'" + $("#var-num").val() + "'");
                    } else if (varr.includes("[str]")) {
                        result = varr.replaceAll("[str]", "'" + $("#var-str").val() + "'");
                    } else if (varr.includes("[bool]")) {                       
                        result = varr.replaceAll("[bool]", "'" + $("#var-bool").val() + "'");
                    } else {
                        result = "Error: Requires a variable value within the input."
                    }

                    $("#varPrint").html("> " + result);



                    let result2 = "";
                    let result3 = "";
                    let end = "\"";

                    if (varr.includes("[a")) {
                        result2 = varr.replaceAll("[a", "\" + a");
                    } else if (varr.includes("[o")) {
                        result2 = varr.replaceAll("[o", "\" + o");
                    }

                    // Might fix later IF NEEDED: determines how the output should be concatenated + how it should look in the "real syntax" window
                    if (result2.includes("] ")){
                        result3 = result2.replaceAll("] ", " + \" ");
                    } else if (result2.includes("],")){
                        result3 = result2.replaceAll("],", " + \",");
                    } else if (result2.includes("]]")) {
                        result3 = result2.replaceAll("]", "");
                        end = "";
                    }

                    if (result2.includes("]] ")){
                        result3 = result2.replaceAll("]] ", "] + \" ");
                    } else if (result2.includes("]],")){
                        result3 = result2.replaceAll("]],", "] + \",");
                    } else if (result2.includes("]]")) {
                        result3 = result2.replaceAll("]]", "]");
                        end = "";
                    }

                    $("#var-2").html("\"" + result3 + end);

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
                            result2 = "> Error: Haven't implemented arithmetic yet, sorry!"
                        } else if (condition.includes("< ")) {
                            val1 = (condition.substring(0, condition.indexOf("<") - 1));
                            val2 = condition.substring(condition.indexOf("<") + 2);
                            
                            if (Number(val1) < Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>). That means '" + $("#condition").val() + "' is in fact, true.";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>). That means '" + $("#condition").val() + "' is in fact, false.";
                            }
                        } else if (condition.includes("> ")) {
                            val1 = (condition.substring(0, condition.indexOf(">") - 1));
                            val2 = condition.substring(condition.indexOf(">") + 2);
                            
                            if (Number(val1) > Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>). That means '" + $("#condition").val() + "' is in fact, true.";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>). That means '" + $("#condition").val() + "' is in fact, false.";
                            }
                        } else if (condition.includes("<=")) {
                            val1 = (condition.substring(0, condition.indexOf("<=") - 1));
                            val2 = condition.substring(condition.indexOf("<=") + 2);
                            
                            if (Number(val1) <= Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>). That means '" + $("#condition").val() + "' is in fact, true.";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>). That means '" + $("#condition").val() + "' is in fact, false.";
                            }
                        } else if (condition.includes(">=")) {
                            val1 = (condition.substring(0, condition.indexOf(">=") - 1));
                            val2 = condition.substring(condition.indexOf(">=") + 2);
                            
                            if (Number(val1) >= Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>). That means '" + $("#condition").val() + "' is in fact, true.";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>). That means '" + $("#condition").val() + "' is in fact, false.";
                            }
                        } else if (condition.includes("==")) {
                            val1 = (condition.substring(0, condition.indexOf("==") - 1));
                            val2 = condition.substring(condition.indexOf("==") + 2);
                            
                            if (Number(val1) == Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>). That means '" + $("#condition").val() + "' is in fact, true.";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>). That means '" + $("#condition").val() + "' is in fact, false.";
                            }
                        } else if (condition.includes("!=")) {
                            val1 = (condition.substring(0, condition.indexOf("!=") - 1));
                            val2 = condition.substring(condition.indexOf("!=") + 2);
                            
                            if (Number(val1) != Number(val2)) {
                                result2 = "> This shows up only if the If/Else condition IS met (the <b>if</b>). That means '" + $("#condition").val() + "' is in fact, true.";
                            } else {
                                result2 = "> This shows up only if the If/Else condition is NOT met (the <b>else</b>). That means '" + $("#condition").val() + "' is in fact, false.";
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

                        $("#strLoop").html("> \"" + bigString.join("<br>") + "\"");
                        $("#strNum").html("> The text was repeated " + $("#var-num").val() + " times, the same as the number variable.");
                        $("#strStr").html("> The text written was \"" + $("#var-str").val() + "\", the same as the string variable.");

                    } else if ($("#call-function").val() == $("#function3").val() || ($("#call-function").val() == $("#function4").val())) {
                    
                        $("#bool").html("Error: This section requires a function with NO parameters.");
                        
                    } else {
                        $("#bool").html("");
                        $("#ifElse").html("");

                        $("#strLoop").html("");
                        $("#strNum").html("");
                        $("#strStr").html("");
                    }

                    $("#function-2").html($("#call-function").val() + "()");
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

                    


                    let result2 = "";
                    let result3 = "";

                    if (para.includes("[a")) {
                        result2 = para.replaceAll("[a", "\" + a");
                    } else if (para.includes("[o")) {
                        result2 = para.replaceAll("[o", "\" + o");
                    }

                    if (result2.includes("]]")) {
                        result3 = result2.replaceAll("]]", "]");
                    } else if (result2.includes("]")) {
                        result3 = result2.replaceAll("]", "");
                    }

                    // Figure out how to get this to NOT reference the variable, just output the name
                    $("#para-2").html($("#function3").val() + para);
                    console.log(para);

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


function syntaxCheck() {
    if (!syntax) {
        w[1] = "cssCodeWindow";
        w[2] = "htmlCodeWindow";
        w[3] = "jsCodeWindow";

        syntax = true;
    } else {
        w[1] = "cssWindow";
        w[2] = "htmlWindow";
        w[3] = "jsWindow";

        syntax = false;
    }

    // console.log(w);
    // console.log(syntax);
}
function select(tab) {
    
    for (let i = 0; i < w.length; i++) {
        // If Real Syntax mode is toggled on, send the Simplified Code backwards and vice versa
        if (syntax) {
            document.getElementById("cssWindow").style.zIndex = 0;
            document.getElementById("htmlWindow").style.zIndex = 0;
            document.getElementById("jsWindow").style.zIndex = 0;
        } else {
            document.getElementById("cssCodeWindow").style.zIndex = 0;
            document.getElementById("htmlCodeWindow").style.zIndex = 0;
            document.getElementById("jsCodeWindow").style.zIndex = 0;
        }

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

// Unsure what the JQuery equivalent of these commands are, if any
function linkHelp(url) {
    window.open(url);
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

