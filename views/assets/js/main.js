const form = document.getElementById("form");
const fullname = document.getElementById("full-name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phone-number");
const discordtag = document.getElementById("discord-tag");
const motivation = document.getElementById("motivation");
const position = document.getElementById("position");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const phonenumberValue = phonenumber.value.trim();
  const discordtagValue = discordtag.value.trim();
  const motivationValue = motivation.value.trim()
  let positionValue = position.value.trim()
  console.log(positionValue)
const positions = ['tech', 'marketing', 'tech support', 'mark', 'technical support']
  if (usernameValue === "") {
    setErrorFor(fullname, "Full Name cannot be blank");
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  }

  if (phonenumberValue === "") {
    setErrorFor(phonenumber, "Phone Number cannot be blank");
  }

  if (discordtagValue === "") {
    setErrorFor(discordtag, "Discord Tag cannot be blank");
  }
    if (motivationValue === "") {
    setErrorFor(motivation, "Motivation + Experience cannot be blank");
  }
    if(positionValue === 'tech') positionValue = "Technical Support"
    if(positionValue === 'marketing') positionValue = "Marketing"
    if(positionValue === 'support') positionValue = "Support"
    if(motivationValue !== "" && discordtagValue !== "" && phonenumberValue !== "" && isEmail(emailValue) && emailValue !== "" && usernameValue !== "") {
        $.post("/apply",{position: positionValue, fullname: usernameValue,email: emailValue, phonenumber: phonenumberValue, discordtag: discordtagValue, motivation: motivationValue});
        Swal.fire({
     		icon: 'success',
     		title: 'Succes!',
    		text: 'Your apply has succesfully been submitted'
    })
		fullname.value = ''
        email.value = ''
        phonenumber.value = ''
        discordtag.value = ''
        motivation.value = ''
        position.value = ''
    }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-content error";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

