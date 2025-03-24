
function processForm() {
    const form = document.getElementById("introForm");
    
    document.getElementById("displayName").textContent = form.name.value;
    document.getElementById("displayMascot").textContent = form.mascot.value;
    document.getElementById("displayImage").src = URL.createObjectURL(form.image.files[0]);
    document.getElementById("displayImageCaption").textContent = form.imageCaption.value;
    document.getElementById("displayPersonalBackground").textContent = form.personalBackground.value;
    document.getElementById("displayProfessionalBackground").textContent = form.professionalBackground.value;
    document.getElementById("displayAcademicBackground").textContent = form.academicBackground.value;
    document.getElementById("displayWebDevBackground").textContent = form.webDevBackground.value;
    document.getElementById("displayPlatform").textContent = form.platform.value;
  
    const courses = document.getElementsByClassName('course');
    let coursesText = '';
    for (let course of courses) {
      if (course.value.trim() !== '') {
        coursesText += course.value + ', ';
      }
    }
    document.getElementById("displayCourses").textContent = coursesText.slice(0, -2);
  
    document.getElementById("displayFunnyThing").textContent = form.funnyThing.value;
    document.getElementById("displayAdditionalInfo").textContent = form.additionalInfo.value;
  
    form.style.display = "none";
    document.getElementById("formData").style.display = "block";
  }
  
  function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("formData").style.display = "none";
    document.getElementById("introForm").style.display = "block";
  }
  
function addCourseField() {
    const coursesDiv = document.getElementById("courses");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "course";
    newInput.classList.add("course");
    newInput.placeholder = "Enter a course";
    
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      coursesDiv.removeChild(newInput);
      coursesDiv.removeChild(deleteButton);
    };
  
    coursesDiv.appendChild(newInput);
    coursesDiv.appendChild(deleteButton);
    coursesDiv.appendChild(document.createElement("br"));
  }
  
  function validateForm() {
    const requiredFields = [
      'name', 'mascot', 'image', 'imageCaption', 'personalBackground',
      'professionalBackground', 'academicBackground', 'webDevBackground', 
      'platform', 'agreement'
    ];
  
    for (let field of requiredFields) {
      const input = document.getElementById(field);
      if (input && input.value.trim() === '') {
        alert('Please fill out all required fields.');
        return false;
      }
    }
  
    const courses = document.getElementsByClassName('course');
    let courseFilled = false;
    for (let course of courses) {
      if (course.value.trim() !== '') {
        courseFilled = true;
        break;
      }
    }
  
    if (!courseFilled) {
      alert('Please add at least one course.');
      return false;
    }
  
    processForm();
    return false; 
  }
  

  