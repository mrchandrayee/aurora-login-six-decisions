const $=id=>document.getElementById(id);
let toastTimer;
function toast(message){const el=$("toast");if(!el)return;el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2300)}

// Toggle the BEFORE / AFTER form treatments shown in the source video.
document.querySelectorAll(".view-btn").forEach(button=>{
  button.addEventListener("click",()=>{
    const view=button.dataset.view;
    document.body.classList.toggle("before",view==="before");
    document.querySelectorAll(".view-btn").forEach(b=>b.classList.toggle("active",b===button));
    $("statePill").textContent=view==="before"?"BEFORE · ORIGINAL HIERARCHY":"AFTER · UPGRADE 06";
    $("formFeedback").textContent="";
  });
});

// Password visibility.
$("showPassword").addEventListener("click",()=>{
  const input=$("password"),visible=input.type==="password";
  input.type=visible?"text":"password";
  $("showPassword").textContent=visible?"Hide":"Show";
  $("showPassword").setAttribute("aria-label",visible?"Hide password":"Show password");
  $("showPassword").setAttribute("aria-pressed",String(visible));
});

// Clear a field's error as the user corrects it.
$("email").addEventListener("input",()=>$("emailError").textContent="");
$("password").addEventListener("input",()=>$("passwordError").textContent="");

function validate(){
  let valid=true;
  const email=$("email").value.trim(),password=$("password").value;
  $("emailError").textContent="";
  $("passwordError").textContent="";
  if(!email){$("emailError").textContent="Enter your email address.";valid=false;}
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){$("emailError").textContent="Enter a valid email address.";valid=false;}
  if(!password){$("passwordError").textContent="Enter your password.";valid=false;}
  else if(password.length<8){$("passwordError").textContent="Use at least 8 characters.";valid=false;}
  if(!valid){$("formFeedback").textContent="Check the highlighted fields.";return false;}
  $("formFeedback").textContent="";
  return true;
}

// Local-only interaction: no credentials are sent to a server.
$("loginForm").addEventListener("submit",async event=>{
  event.preventDefault();
  if(!validate())return;
  const button=$("submitBtn");
  button.disabled=true;button.classList.remove("success");button.classList.add("loading");
  button.querySelector(".button-label").textContent="Signing in";
  await new Promise(resolve=>setTimeout(resolve,300));
  button.classList.remove("loading");button.classList.add("success");
  button.querySelector(".button-label").textContent="Signed in";
  $("formFeedback").textContent="Demo complete · no account or server connection.";
  button.disabled=false;
  setTimeout(()=>{button.classList.remove("success");button.querySelector(".button-label").textContent="Sign in";},2200);
});
$("forgot").addEventListener("click",()=>toast("Password recovery is a UI demo — no email was sent."));
$("createAccount").addEventListener("click",()=>toast("Create account selected — registration is not connected."));
