 // function to convert binary to hexadecimal
 function binaryToHexadecimal(inputNum) {
    let hexa = parseInt(inputNum, 2).toString(16);
    return hexa; 
  }

  // function to convert binary to decimal
  function binaryToDecimal(inputNum) {
    let decimal = parseInt(inputNum, 2).toString(10);
    return decimal;
  }

  // function to convert binary to octal
  function binaryToOctal(inputNum) {
    let octal = parseInt(inputNum, 2).toString(8);
    return octal;
    
  }

  // function to convert decimal to binary
  function decimalToBinary(inputNum) {
    let binary = parseInt(inputNum, 10).toString(2);
    return binary;
  }

  // function to convert decimal to hexadecimal
  function decimalToHexadecimal(inputNum) {
    let hexadecimal = parseInt(inputNum, 10).toString(16);
    return hexadecimal;
  }

  // function to convert decimal to octal
  function decimalToOctal(inputNum) {
    let octal = parseInt(inputNum, 10).toString(8);
    return octal;
  }

  // function to convert hexadecimal to binary
  function hexadecimalToBinary(inputNum) {
    let binary = parseInt(inputNum, 16).toString(2);
    return binary;
  }

  // function to convert hexadecimal to decimal
  function hexadecimalToDecimal(inputNum) {
    let decimal = parseInt(inputNum, 16).toString(10);
    return decimal;
  }

  // function to convert hexadecimal to octal
  function hexadecimalToOctal(inputNum) {
    let octal = parseInt(inputNum, 16).toString(8);
    return octal;
  }

  // function to convert octal  to binary
  function octalToBinary(inputNum) {
    let binary = parseInt(inputNum, 8).toString(2);
    return binary;
  }

  // function to convert octal  to hexadecimal
  function octalToHexadecimal(inputNum) {
    let hexadecimal = parseInt(inputNum, 8).toString(16);
    return hexadecimal;
  }

  // function to convert octal  to decimal
  function octalToDecimal(inputNum) {
    let decimal = parseInt(inputNum, 8).toString(10);
    return decimal;
  }

  function performConverstion(inputFromVal, inputToVal, inputNumVal) {
    // Constants used in select fields
    const BINARY = "binary";
    const HEXA_DECIMAL = "hexadecimal";
    const OCTAL = "octal";
    const DECIMAL = "decimal";

    // call the appropriate conversion method depending on select input value and store in answer variable
    if (inputFromVal == BINARY && inputToVal == HEXA_DECIMAL) {
      return binaryToHexadecimal(inputNumVal);
    } else if (inputFromVal == BINARY && inputToVal == DECIMAL) {
      return binaryToDecimal(inputNumVal);
    } else if (inputFromVal == BINARY && inputToVal == OCTAL) {
      return binaryToOctal(inputNumVal);
    } else if (inputFromVal == HEXA_DECIMAL && inputToVal == BINARY) {
      return hexadecimalToBinary(inputNumVal);
    } else if (inputFromVal == HEXA_DECIMAL && inputToVal == DECIMAL) {
      return hexadecimalToDecimal(inputNumVal);
    } else if (inputFromVal == HEXA_DECIMAL && inputToVal == OCTAL) {
      return hexadecimalToOctal(inputNumVal);
    } else if (inputFromVal == DECIMAL && inputToVal == HEXA_DECIMAL) {
      return decimalToHexadecimal(inputNumVal);
    } else if (inputFromVal == DECIMAL && inputToVal == BINARY) {
      return decimalToBinary(inputNumVal);
    } else if (inputFromVal == DECIMAL && inputToVal == OCTAL) {
      return decimalToOctal(inputNumVal);
    } else if (inputFromVal == OCTAL && inputToVal == BINARY) {
      return octalToBinary(inputNumVal);
    } else if (inputFromVal == OCTAL && inputToVal == HEXA_DECIMAL) {
      return octalToHexadecimal(inputNumVal);
    } else if (inputFromVal == OCTAL && inputToVal == DECIMAL)
      return octalToDecimal(inputNumVal);
  }

  // update the answer field value to ans
  function updateAnswerField(answer) {
    const ansField = document.getElementById("answerField");
    ansField.value = answer;
  }

  // funcion to show error message to user
  function show_error(error_msg) {
    // select error ele
    const error = document.getElementById("errorMsg");
    error.innerText = error_msg;
    error.style.display = "block";
  }

  // function add style to input ele when it is not valid
  function addInvalidStyle(ele)
  {
    ele.className = " invalid-field";
  }

  // function remove the invalid style and erro messages
  function removeInvalidStyle()
  {
    // hide the top error message box
    document.getElementById("errorMsg").style.display = "none";

    // get the all form fields where invalid-field class may have been applied
     let toFieldInvalid = document.getElementById("to");
     let inputFieldInvalid = document.getElementById("inputField"); 

     // remove the invalid-field class from both object
     toFieldInvalid.classList.remove("invalid-field");
     inputFieldInvalid.classList.remove("invalid-field");

     // coreect now test
  }

  // verify all input's field
  function isValidData() {
    /* Function checks that all input fields are valid or not.
        Returns true if all fields are valid
        Returns false if any of field is not valid and also set the color of that field in red and display a warning me..
    */

    // check that both select field is not equal
    const fromFieldVal = document.getElementById("from").value;
    const toField = document.getElementById("to");
    if (fromFieldVal == toField.value) {
      show_error("Select different type of number format to convert.");
      addInvalidStyle(toField);
      return false;
    }

    // check input field is not empty
    const inputField = document.getElementById("inputField");
    const inputFieldvalue = inputField.value.trim();
    if (inputField.value.length == 0) {
      show_error("Provide a value in input field to convert.");
      addInvalidStyle(inputField);
      return false;
    }
    // now check if input field is matching correct regex according to type
    console.log(inputFieldvalue)
    if(fromFieldVal=="binary")
    {
        // regex to validate binary
        let binaryRegex = /^[01]+$/;
        if(binaryRegex.test(inputFieldvalue)==false)
        {
          show_error("Input number is not in correct binary format.");
          addInvalidStyle(inputField);
          return false;
        }
    }
    else if(fromFieldVal=="decimal")
    {
         let decimalRegex = /^[-]{0,1}[0-9]+$/ ;
         if(decimalRegex.test(inputFieldvalue)==false)
        {
          show_error("Input number is not in correct decimal format.");
          addInvalidStyle(inputField);
          return false;
        }
    }
    else if(fromFieldVal == "octal"){
         let octalRegex = /^[0-7]+$/ ;
         if(octalRegex.test(inputFieldvalue)==false)
        {
          show_error("Input number is not in correct octal format.");
          addInvalidStyle(inputField);
          return false;
        }
    }
    else if(fromFieldVal=="hexadecimal"){ 
      let hexadecimalRegex = /^[0-9abcdef]+$/ ;
      if(hexadecimalRegex.test(inputFieldvalue)==false)
        {
          show_error("Input number is not in correct hexadecimal format.");      
          addInvalidStyle(inputField);
          return false;
        }
    }
    // all thing is valid, return true
    return true;
  }

  // function to handle convert button click
  function convert(event) {
    // stop default behaviour
    event.preventDefault();

    // check data is valid and proceed futher only if all data is correct
    const valid = isValidData();
    if (valid == false) {
      return;
    } else {
      removeInvalidStyle();
    }
    // read value of all fields
    const inputFromVal = document.getElementById("from").value;
    const inputToVal = document.getElementById("to").value;
    const inputNumberVal = document.getElementById("inputField").value;

    console.log("Starting conversion")

    // perfrom the conversion
    let ans = performConverstion(inputFromVal, inputToVal, inputNumberVal.trim());
    console.log("Converting is done.");

    // update the answer field
    updateAnswerField(ans);
  }

  // function to handle reset button click
  function reset(event) {
    // prevent defualt behaviour
    event.preventDefault();
    // reset error messages and style if any is present
    removeInvalidStyle();
    // reset from select input
    const selecElement = document.getElementById("from");
    selecElement.selectedIndex = 0;

    // reset to select input
    const toSelectElement = document.getElementById("to");
    toSelectElement.selectedIndex = 0;

    // reset input field
    const number1SelectElement = document.getElementById("inputField");
    number1SelectElement.value = "";

    // reset answer input filed, ye kro same
    const number2SelectElement = document.getElementById("answerField");
    number2SelectElement.value = "";
    // print status message in console
    console.log("Values are resetted.");
  }

  function swap(event) {
    //stop default behaviour
    event.preventDefault();

    console.log("Inside swap function");

    // read and store both select field value
    let fromField = document.getElementById("from");
    let toField = document.getElementById("to");

    // swap both fileds's value
    const tmp = fromField.value;
    fromField.value = toField.value;
    toField.value = tmp;

    // reset the input field
    document.getElementById("inputField").value = "";

    // reset the answer field kya hu..nhi kr pa rhe hai...oo tb smjhi to nhi upr ka aur reset function
    // kisi input field ko reset krna ho to us object ka bs value property ko "" set kr do,, hi to upr kro,, isiliye to
    document.getElementById("answerField").value = "";
  
    //remove any invalid messages and styles
    removeInvalidStyle();
  }
  // convert
  let convertButton = document.getElementById("button1");
  convertButton.addEventListener("click", convert);

  //Attach reset button click handle, aise hi dono ka kro comment and attach v
  let resetButton = document.getElementById("button2");
  resetButton.addEventListener("click", reset);

  // swap

  let swapButton = document.getElementById("button3");
  swapButton.addEventListener("click", swap);