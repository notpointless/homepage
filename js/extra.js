/*************************
         Variables
 *************************/

/*************************
      Rotational Text
 *************************/
function add_rotational_text(desired_text, deg_inc = 24) {
    // keep track of degree
    let degree = 0;
    // convert text into array
    let array = desired_text.split('');
    // where we need to insert the circular span text
    let target = document.getElementById("brand");
    // create span text with appropriate degree
    if (array.length > 10) {
        target.style.marginBottom = '0.35em'
    }
    for (let i = 0; i < array.length; i++) {
        let text = document.createElement('span');
        degree += deg_inc;
        text.textContent = array[i].toUpperCase();
        text.style.fontWeight = 'bold'
        text.style.transform = "rotate(" + degree + "deg)";
        target.appendChild(text);
    }
}

/*************************
       Non-function
 *************************/