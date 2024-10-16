

function savedata() {
    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var gender = document.querySelector('input[name="gender"]:checked') ?
                 document.querySelector('input[name="gender"]:checked').value : ''

    var course = document.getElementById("course")
    var email = document.getElementById("email")
    var databody = document.getElementById("databody")
    var btn = document.getElementById("save")


    var newrow = document.createElement("tr")
    newrow.classList.add("border", "border-gray-300")


    var newName = document.createElement("td")
    newName.textContent = name.value
    newName.classList.add("border", "border-gray-300", "p-2")
    newrow.appendChild(newName)

    var newAge = document.createElement("td")
    newAge.textContent = age.value
    newAge.classList.add("border", "border-gray-300", "p-2")
    newrow.appendChild(newAge)

    var newGender = document.createElement("td")
    newGender.textContent = gender
    newGender.classList.add("border", "border-gray-300", "p-2")
    newrow.appendChild(newGender)


    var newCourse = document.createElement("td")
    newCourse.textContent = course.value
    newCourse.classList.add("border", "border-gray-300", "p-2")
    newrow.appendChild(newCourse)

    var newEmail = document.createElement("td")
    newEmail.textContent = email.value
    newEmail.classList.add("border", "border-gray-300", "p-2")
    newrow.appendChild(newEmail) 


    var deltbtn = document.createElement("button")
    deltbtn.textContent = "Delete"
    
    newrow.appendChild(deltbtn) 
    deltbtn.classList.add("bg-red-700","text-white", "p-2")
    deltbtn.addEventListener("click", function(event){
event.target.parentElement.remove()
    })




    databody.append(newrow) 


}
