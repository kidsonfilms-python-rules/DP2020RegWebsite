// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   // This function will display the specified tab of the form ...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   // ... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next";
//   }
//   // ... and run a function that displays the correct step indicator:
//   fixStepIndicator(n)
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form... :
//   if (currentTab >= x.length) {
//     //...the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }

// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class to the current step:
//   x[n].className += " active";
// }



// function post(name, zipcode, email, driveby, prasad, bhog, members) {
//   const http = new XMLHttpRequest();
//   const url = 'https://firestore.googleapis.com/v1/projects/project-delta-db6b3/databases/(default)/documents/bhogReg'
//   http.open("POST", url, true);
//   http.setRequestHeader('Content-type', 'application/json');
  
//   http.send(
//     `{
//       "fields": {
//       "name": {
//       "stringValue": "${name}"
//       },
//       "zipcode": {
//       "stringValue": "${zipcode}"
//       },
//       "email": {
//       "stringValue": "${email}"
//       },
//       "driveby": {
//         "booleanValue": ${driveby}
//       },
//       "prasad": {
//         "booleanValue": ${prasad}
//       },
//       "bhog": {
//         "booleanValue": ${bhog}
//       },
//       "members": {
//         "stringValue": "${members}"
//       }
//       }
//       }`
//   );

//   http.onreadystatechange = (e) => {
//     console.log(http.responseText)
//   }
// }

function post(name, zipcode, email, guests, members, menu) {
  const http = new XMLHttpRequest();
  const url = 'https://us-central1-project-delta-db6b3.cloudfunctions.net/postRegDetails'
  http.open("POST", url, true);
  http.setRequestHeader('Content-type', 'application/json');
  //http.setRequestHeader('Access-Control-Allow-Methods', 'POST');
  //http.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  //http.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // http.send(
  //   `{
  //     "name": "${name}",
  //     "zipcode": "${zipcode}",
  //     "email": "${email}",
  //     "driveby": "${driveby}",
  //     "prasad": "${prasad}",
  //     "bhog": "${bhog}",
  //     "members": "${members}"
  //     }`
  // );
  http.send(
    `{
      "name": "${name}",
      "zipcode": "${zipcode}",
      "email": "${email}",
      "guests": "${guests}",
      "members": "${members}",
      "menu": "${menu}",
     }`
  );
  http.onreadystatechange = (e) => {
    console.log(http.responseText + e)
  }
}

function pass() {
  name = document.getElementById("fullname").value;
  email = document.getElementById("email").value;
  zipcode = document.getElementById("zipcode").value;
  members = document.getElementById("members").value;
  guests = document.getElementById("guests").value;
  console.log(email + ' ' + name + ' ' + zipcode);
  post(name, zipcode, email, guests, members)
  return true;

}


submitBtn = document.getElementById('nextBtn')
// submitBtn.addEventListener('click', () => {
//   if (!(submitBtn.innerHtml == 'Submit')) return false
//   console.log('Passing...')
//   pass()
// })