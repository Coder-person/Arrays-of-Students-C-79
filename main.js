var array_of_names = [];

function submit1(){

    var name1 = document.getElementById("nameofstudent_1").value;
    var name2 = document.getElementById("nameofstudent_2").value;
    var name3 = document.getElementById("nameofstudent_3").value;
    var name4 = document.getElementById("nameofstudent_4").value;

    array_of_names.push(name1);
    array_of_names.push(name2);
    array_of_names.push(name3);
    array_of_names.push(name4);

    console.log(array_of_names);

    document.getElementById("display_array").innerHTML = array_of_names;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){

    array_of_names.sort();
    console.log(array_of_names);
    document.getElementById("display_array").innerHTML = array_of_names;
}