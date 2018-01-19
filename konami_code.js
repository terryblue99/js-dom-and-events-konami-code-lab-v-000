// Attach an event listener to document.body and check for 'keydown' events.
// If the user enters the special code, pressing all ten of the keys in the
// correct order, alert() a congratulatory message. However, if they press a
// key out of sequence or a key that isn't part of the Konami code, don't alert()
// anything and simply keep listening for all ten keydowns in the correct order.

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  // triggers an alert if the right code is entered
  // does not trigger an alert if the wrong code is entered
    document.body.addEventListener('keydown', (event) => {
      onKeyDownHandler(event);
    });

    let index = 0

    function onKeyDownHandler(event) {
      const eventKey = parseInt(event.location);
      console.log("eventKey: " + eventKey);
      if (eventKey === code[index]) {
        index++;     
        if (index === code.length) {
          alert("Hurray!"); 
          index = 0;
        }
      } else {
        index = 0;
      }
    }

}
