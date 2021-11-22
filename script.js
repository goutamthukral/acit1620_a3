let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

function cleanUpIndex(){
    let contactDiv = document.querySelectorAll('.contact');
    for(i=0;i<contactDiv.length;i++)
    {
        contactDiv[i].remove();
    }
}

function createSingleIndex(contact){
    let anchorTag = document.createElement("a");
    anchorTag.href="page3.html";
    let newDiv = document.createElement("div");
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = contact['name'];
    newDiv.className = "contact";
    newDiv.appendChild(newParagraph);
    anchorTag.appendChild(newDiv);
    console.log(anchorTag);
}

function renderIndex(contactList){
    for(i=0;i<contactList.length;i++)
    {
        let contactDiv = document.querySelector('.main');
        let anchorTag = document.createElement("a");
        anchorTag.href = "page3.html";
        let newDiv = document.createElement("div");
        let newP = document.createElement("p");
        newP.innerHTML = contactList[i]['name'];
        newDiv.className = "contact";
        newDiv.appendChild(newP);
        anchorTag.appendChild(newDiv);
        contactDiv.appendChild(anchorTag);
    }
}

function cleanUpView(){
    let contactDiv = document.querySelector(".contactinfo");
    contactDiv.remove()
}

function renderView(contact){
    let contactDiv = document.querySelector(".main");
    let contactinfo = document.createElement("div");
    contactinfo.className = "contactinfo";
    let contactname = document.createElement("div");
    contactname.className = "contactname";
    contactname.innerHTML = contact['name'];
    let img = document.createElement("img");
    img.src = "./img/profile.jpg";
    img.className = "profilepic";
    img.alt = "Profile picture"
    contactname.appendChild(img);
    contactinfo.appendChild(contactname);
    let contactemail = document.createElement("div");
    contactemail.className = "contactemail";
    contactemail.innerHTML = "email: "+contact['email'];
    contactinfo.appendChild(contactemail);
    let contactphone = document.createElement("div");
    contactphone.className = "contactphone";
    contactphone.innerHTML = "cell: "+contact['phone'];
    contactinfo.appendChild(contactphone);
    let contactaddress = document.createElement("div");
    contactaddress.className = "contactaddress";
    contactaddress.innerHTML = "address: "+contact['address'];
    contactinfo.appendChild(contactaddress);
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.innerHTML =
    "<button class=\"button edit\" value=\"Edit\">Edit</button>" +
    "<button class=\"button close\" value=\"Close\">Close</button>"
    contactinfo.appendChild(buttons);
    contactDiv.appendChild(contactinfo);
}

function cleanUpCreate(){
    let contactform = document.querySelector(".contactedit");
    contactform.remove()
}

function renderCreate(contact){
    let contactDiv = document.querySelector(".main");
    let contactedit = document.createElement("div");
    contactedit.className = "contactedit";
    profilePicture = "<div class=\"contactimg\">" +
                        "<img src=\"./img/profile.jpg\" class =\"profilepic\" alt=\"Profile picture\">" +
                     "</div>";
    contactedit.insertAdjacentHTML('afterbegin', profilePicture);               
    let contactform = document.createElement("div");
    contactform.className = "form";  
    let form = document.createElement("form");
    let contactNameForm = document.createElement("div");
    contactNameForm.className = "inputcontainer";
    let nameInput = document.createElement("input");  
    nameInput.setAttribute = ("type","text"); 
    nameInput.setAttribute = ("id","contactname");  
    nameInput.setAttribute = ("name","contactname");  
    nameInput.setAttribute = ("placeholder","Contact Name");  
    nameInput.value = contact['name'];
    contactNameForm.appendChild(nameInput);
    contactNameForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extranamefield\" name=\"extranamefield\">+</button>");
    form.appendChild(contactNameForm);
    let contactPhoneForm = document.createElement("div");
    contactPhoneForm.className = "inputcontainer";
    let phoneInput = document.createElement("input");  
    phoneInput.setAttribute = ("type","tel"); 
    phoneInput.setAttribute = ("id","contactphone");  
    phoneInput.setAttribute = ("name","contactphone");  
    phoneInput.setAttribute = ("placeholder","Contact Phone");  
    phoneInput.value = contact['phone'];
    contactPhoneForm.appendChild(phoneInput);
    contactPhoneForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extraphonefield\" name=\"extraphonefield\">+</button>");
    form.appendChild(contactPhoneForm);
    let contactAddressForm = document.createElement("div");
    contactAddressForm.className = "inputcontainer";
    let addressInput = document.createElement("input");  
    addressInput.setAttribute = ("type","text"); 
    addressInput.setAttribute = ("id","contactaddress");  
    addressInput.setAttribute = ("name","contactaddress");  
    addressInput.setAttribute = ("placeholder","Contact Address");  
    addressInput.value = contact['address'];
    contactAddressForm.appendChild(addressInput);
    contactAddressForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extraaddressfield\" name=\"extraaddressfield\">+</button>");
    form.appendChild(contactAddressForm);
    let contactEmailForm = document.createElement("div");
    contactEmailForm.className = "inputcontainer";
    let emailInput = document.createElement("input");  
    emailInput.setAttribute = ("type","email"); 
    emailInput.setAttribute = ("id","contactemail");  
    emailInput.setAttribute = ("name","contactemail");  
    emailInput.setAttribute = ("placeholder","Contact Email");  
    emailInput.value = contact['email'];
    contactEmailForm.appendChild(emailInput);
    contactEmailForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extraemailfield\" name=\"extraemailfield\">+</button>");
    form.appendChild(contactEmailForm);
    submitButtons = "<div class=\"buttons\">" +
                        "<button type=\"submit\" class=\"button save\" id=\"savecontact\" name=\"savecontact\">Save Contact</button>" +
                        "<button type=\"reset\" class=\"button cancel\" id=\"cancel\" name=\"cancel\">Cancel</button>" +
                    "</div>";
    form.insertAdjacentHTML('beforeend', submitButtons);
    contactform.appendChild(form);
    contactedit.appendChild(contactform);
    contactDiv.appendChild(contactedit);
}