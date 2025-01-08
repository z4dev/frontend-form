// Select all governorate radio buttons
const governorateRadios = document.querySelectorAll('input[name="governorate"]');
const otherGovernorateContainer = document.getElementById('other-governorate-container');
const otherGovernorateInput = document.getElementById('other-governorate');

// Add event listener to all radio buttons
governorateRadios.forEach((radio) => {
  radio.addEventListener('change', function () {
    if (this.value === 'أخرى') {
      otherGovernorateContainer.style.display = 'block'; // Show the input
      let input = 
      otherGovernorateInput.setAttribute('required', 'required');
    } else {
      otherGovernorateContainer.style.display = 'none'; // Hide the input
      otherGovernorateInput.removeAttribute('required');
      otherGovernorateInput.value = ''; // Clear the input
    }
  });
});


// Handle provider type selection
    document.getElementById("provider-options").addEventListener("change", function (event) {
        const providerType = event.target.value;
        const otherInfoDiv = document.getElementById("other-provider-info");

        if (providerType === "other") {
            otherInfoDiv.style.display = "block";
            let name = document.getElementById("provider-name")
            if(!name.value){
                name.style.borderColor = 'red';
            }
            let id = document.getElementById("provider-id")
            if(!id.value){
                id.style.borderColor = 'red';
            }

            if(id.value.length < 9 || id.value.length > 9){
                id.style.borderColor = 'red';
                alert("الرقم الذي أدخلته غير صحيح")
            }
          

        } else {
            otherInfoDiv.style.display = "none";
            document.getElementById("provider-name").removeAttribute("required");
            document.getElementById("provider-id").removeAttribute("required");
        }
    });


function handleChange(event, detailsId) {
  const value = event.target.value;
  const detailsDiv = document.getElementById(detailsId);

  if (value === 'yes') {
    detailsDiv.innerHTML = `
      <label>كم العدد؟</label>
      <select onchange="generateInputs(event, '${detailsId}')">
        <option value="">اختر العدد</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div class="inputs-container"></div>
    `;
    detailsDiv.classList.remove('hidden');
  } else {
    detailsDiv.innerHTML = '';
    detailsDiv.classList.add('hidden');
  }
}

function generateInputs(event, detailsId) {
  const count = parseInt(event.target.value, 10);
  const inputsContainer = document.querySelector(`#${detailsId} .inputs-container`);
  inputsContainer.innerHTML = '';

  for (let i = 1; i <= count; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = `${detailsId}-input-${i}`;
    input.placeholder = `الاسم رباعي `;
    input.style = 'width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px; margin-top: 10px;'; 
    input.className = 'form-control';
    inputsContainer.appendChild(input);
  }
}



const daughterSelect = document.getElementById("daughter-above-12-select");
    const daughterInputsContainer = document.getElementById("daughter-above-12-inputs");

    // Add an event listener for changes to the select dropdown
    daughterSelect.addEventListener("change", (event) => {
        const selectedValue = parseInt(event.target.value, 10);

        // Clear previous inputs
        daughterInputsContainer.innerHTML = "";

        // Generate new inputs based on the selected value
        for (let i = 1; i <= selectedValue; i++) {
            const inputWrapper = document.createElement("div");
            inputWrapper.className = "form-group";

            // First Name Input
            const nameLabel = document.createElement("label");
            nameLabel.innerText = `الاسم  ${i}`;
            nameLabel.style = "font-size: 14px; color: #333; margin-bottom: 5px; display: block;";

            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.name = `daughter-${i}-name`;
            nameInput.required = true;
            nameInput.style = "width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px;";

            // Gender Input
            const genderLabel = document.createElement("label");
            genderLabel.innerText = `الجنس ${i}`;
            genderLabel.style = "font-size: 14px; color: #333; margin-bottom: 5px; display: block;";

            const genderSelect = document.createElement("select");
            genderSelect.name = `daughter-${i}-gender`;
            genderSelect.required = true;
            genderSelect.style = "width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px;";
            const genderOption1 = new Option("أنثى", "female");
            const genderOption2 = new Option("ذكر", "male");
            genderSelect.add(genderOption1);
            genderSelect.add(genderOption2);

            // Date of Birth Input
            const dobLabel = document.createElement("label");
            dobLabel.innerText = `تاريخ الميلاد ${i}`;
            dobLabel.style = "font-size: 14px; color: #333; margin-bottom: 5px; display: block;";

            const dobInput = document.createElement("input");
            dobInput.type = "date";
            dobInput.name = `daughter-${i}-dob`;
            dobInput.required = true;
            dobInput.style = "width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px;";

            // Passport Input
            const passportLabel = document.createElement("label");
            passportLabel.innerText = `رقم جواز السفر ${i}`;
            passportLabel.style = "font-size: 14px; color: #333; margin-bottom: 5px; display: block;";

            const passportInput = document.createElement("input");
            passportInput.type = "text";
            passportInput.name = `daughter-${i}-passport`;
            passportInput.required = true;
            passportInput.style = "width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px;";

            // Educational Stage Input
            const educationLabel = document.createElement("label");
            educationLabel.innerText = `المرحلة التعليمية ${i}`;
            educationLabel.style = "font-size: 14px; color: #333; margin-bottom: 5px; display: block;";

            const educationSelect = document.createElement("select");
            educationSelect.name = `daughter-${i}-education`;
            educationSelect.required = true;
            educationSelect.style = "width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ddd; border-radius: 5px;";
            const educationOption1 = new Option("ابتدائي", "primary");
            const educationOption2 = new Option("إعدادي", "middle");
            const educationOption3 = new Option("ثانوي", "high");
            const educationOption4 = new Option("جامعي", "university");
            const educationOption5 = new Option("أخرى", "other");
            educationSelect.add(educationOption1);
            educationSelect.add(educationOption2);
            educationSelect.add(educationOption3);
            educationSelect.add(educationOption4);
            educationSelect.add(educationOption5);

            // Append all elements to the inputWrapper
            inputWrapper.appendChild(nameLabel);
            inputWrapper.appendChild(nameInput);
            inputWrapper.appendChild(genderLabel);
            inputWrapper.appendChild(genderSelect);
            inputWrapper.appendChild(dobLabel);
            inputWrapper.appendChild(dobInput);
            inputWrapper.appendChild(passportLabel);
            inputWrapper.appendChild(passportInput);
            inputWrapper.appendChild(educationLabel);
            inputWrapper.appendChild(educationSelect);

            // Append inputWrapper to the container
            daughterInputsContainer.appendChild(inputWrapper);
        }
    });




document.getElementById('familyForm').addEventListener('submit',async (event)=>{
  const formData = new FormData(this);
  event.preventDefault();
  const providerType = document.querySelector('input[name="provider-type"]:checked')?.value;
   if(providerType == 'other'){
    const providerNameInput = document.getElementById("provider-name");
    const providerIdInput = document.getElementById("provider-id");

    if(!providerNameInput.value){
      providerNameInput.style.borderColor = 'red';
    }
    if(!providerIdInput.value){
      providerIdInput.style.borderColor = 'red';
    }

   }
  

})

  document.getElementById('familyForm').addEventListener('submit', async function (event) {

      event.preventDefault();



      const formData = new FormData(this);

      const validateForm = () => {
          let isValid = true;
          const requiredFields = [
              'family-head-name',
              'family-head-id',
              'passport-type',
              'passport-number',
              'family-wife-name',
              'family-wife-id',
              'wife-passport-type',
              'wife-passport-number',
              'entry-date',
              'governorate',
              'district',
              'phone',
              'whatsapp',
              'total-family'
          ];




          requiredFields.forEach((field) => {
              const input = document.querySelector(`[name="${field}"]`);
              if (input && !formData.get(field)) {
                  isValid = false;
                  input.style.borderColor = 'red';
              } else if (input) {
                  input.style.borderColor = ''; // Reset border color
              }
          });


    const whatsappInput = document.getElementById('whatsapp'); // WhatsApp input element
    const whatsappValue = whatsappInput.value.trim();

    // Validate the WhatsApp number
    if (!validatePhoneNumber(whatsappValue)) {
        whatsappInput.style.borderColor = 'red'; // Highlight the input box
        alert('يرجى إدخال رقم واتساب صحيح بصيغة دولية (10-15 رقم).'); // Show error message
        return; // Stop form submission
    } else {
        whatsappInput.style.borderColor = ''; // Reset border color
    }

    function validatePhoneNumber(input) {
    const phonePattern = /^\+?\d{10,15}$/; // Regex for valid international phone numbers (10-15 digits)
    return phonePattern.test(input);
    }




    // 




    // 

// Check if a provider type is selected
// Check if a provider type is selected
const providerTypeInput = document.querySelector('input[name="provider-type"]:checked');

let provider = {};

// Validate if a provider type is selected
if (!providerTypeInput) {
    isValid = false; // Mark form as invalid
    const providerError = document.getElementById('provider-error');

    if (!providerError) {
        // Create an error message if not already present
        const errorMessage = document.createElement('span');
        errorMessage.id = 'provider-error';
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '14px';
        errorMessage.textContent = 'يجب اختيار معيل الأسرة.';
        document.getElementById('provider-options').appendChild(errorMessage);
    }
} else {
    // Remove the error message if present
    const providerError = document.getElementById('provider-error');
    if (providerError) {
        providerError.remove();
    }

    // Build the provider object based on the selected type
    provider = providerTypeInput.value === 'other'
        ? {
            type: 'OTHER',
            name: formData.get('provider-name') || '',
            id: formData.get('provider-id') || ''
        }
        : {
            type: providerTypeInput.value === 'husband' ? 'FATHER' : 'MOTHER',
            name: '',
            id: ''
        };

    // Validate "OTHER" provider fields
    if (provider.type === 'OTHER') {
        const providerNameInput = document.getElementById('provider-name');
        const providerIdInput = document.getElementById('provider-id');

        if (!provider.name) {
            isValid = false;
            if (providerNameInput) {
                providerNameInput.style.borderColor = 'red';
            }
        } else if (providerNameInput) {
            providerNameInput.style.borderColor = '';
        }

        if (!provider.id) {
            isValid = false;
            if (providerIdInput) {
                providerIdInput.style.borderColor = 'red';
            }
        } else if (providerIdInput) {
            providerIdInput.style.borderColor = '';
        }
    }
}




// 
// Update the address object with logic for "other"
const governorateValue = formData.get('governorate');
const otherGovernorateValue = formData.get('other-governorate') || '';


// Validation for the governorate
const governorateSelect = document.getElementById('governorate');
const otherGovernorateInput = document.getElementById('other-governorate');

if (!governorateValue) {
    isValid = false;
    governorateSelect.style.borderColor = 'red';
    alert('يرجى اختيار المحافظة.');
} else if (governorateValue === 'أخرى' && !otherGovernorateValue) {
    isValid = false;
    otherGovernorateInput.style.borderColor = 'red';
    alert('يرجى إدخال اسم المحافظة في الحقل المخصص.');
} else {
    governorateSelect.style.borderColor = '';
    otherGovernorateInput.style.borderColor = '';
}





// 

const validateFamilyDetails = () => {
    let isValid = true;

    // Martyrs validation
    const martyrsSelect = document.getElementById('martyrs');
    const martyrsDetailsContainer = document.getElementById('martyrs-details');
    if (martyrsSelect.value === 'yes') {
        const martyrsCountSelect = martyrsDetailsContainer.querySelector('select');
        if (!martyrsCountSelect || !martyrsCountSelect.value) {
            isValid = false;
            martyrsSelect.style.borderColor = 'red';
            // alert('يرجى تحديد عدد الشهداء إذا تم اختيار نعم.');
        } else {
            martyrsSelect.style.borderColor = '';
            const inputs = martyrsDetailsContainer.querySelectorAll('input');
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    alert('يرجى تعبئة تفاصيل الشهداء.');
                } else {
                    input.style.borderColor = '';
                }
            });
        }
    } else {
        martyrsSelect.style.borderColor = '';
    }

    // Injured validation
    const injuredSelect = document.getElementById('injured');
    const injuredDetailsContainer = document.getElementById('injured-details');
    if (injuredSelect.value === 'yes') {
        const injuredCountSelect = injuredDetailsContainer.querySelector('select');
        if (!injuredCountSelect || !injuredCountSelect.value) {
            isValid = false;
            injuredSelect.style.borderColor = 'red';
            // alert('يرجى تحديد عدد الجرحى إذا تم اختيار نعم.');
        } else {
            injuredSelect.style.borderColor = '';
            const inputs = injuredDetailsContainer.querySelectorAll('input');
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    // alert('يرجى تعبئة تفاصيل الجرحى.');
                } else {
                    input.style.borderColor = '';
                }
            });
        }
    } else {
        injuredSelect.style.borderColor = '';
    }

    // Chronic diseases validation
    const chronicSelect = document.getElementById('chronic-diseases');
    const chronicDetailsContainer = document.getElementById('chronic-diseases-details');
    if (chronicSelect.value === 'yes') {
        const chronicCountSelect = chronicDetailsContainer.querySelector('select');
        if (!chronicCountSelect || !chronicCountSelect.value) {
            isValid = false;
            chronicSelect.style.borderColor = 'red';
            // alert('يرجى تحديد عدد المصابين بأمراض مزمنة إذا تم اختيار نعم.');
        } else {
            chronicSelect.style.borderColor = '';
            const inputs = chronicDetailsContainer.querySelectorAll('input');
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    // alert('يرجى تعبئة تفاصيل الأمراض المزمنة.');
                } else {
                    input.style.borderColor = '';
                }
            });
        }
    } else {
        chronicSelect.style.borderColor = '';
    }

    // Urgent surgery validation
    const urgentSelect = document.getElementById('urgent-surgery');
    const urgentDetailsContainer = document.getElementById('urgent-surgery-details');
    if (urgentSelect.value === 'yes') {
        const urgentCountSelect = urgentDetailsContainer.querySelector('select');
        if (!urgentCountSelect || !urgentCountSelect.value) {
            isValid = false;
            urgentSelect.style.borderColor = 'red';
            // alert('يرجى تحديد عدد الحالات التي تتطلب عملية جراحية إذا تم اختيار نعم.');
        } else {
            urgentSelect.style.borderColor = '';
            const inputs = urgentDetailsContainer.querySelectorAll('input');
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    // alert('يرجى تعبئة تفاصيل الحالات التي تحتاج جراحة.');
                } else {
                    input.style.borderColor = '';
                }
            });
        }
    } else {
        urgentSelect.style.borderColor = '';
    }

    return isValid;
};


validateFamilyDetails()

// 

// Function to validate ID input
function validateID(id) {
    const palestinianIdRegex = /^\d{9}$/; // Exactly 9 digits
    return palestinianIdRegex.test(id);
}

// Example usage for validating Family Head and Wife IDs
const familyHeadID = formData.get('family-head-id');
const wifeID = formData.get('family-wife-id');



if (!validateID(familyHeadID)) {
    isValid = false;
    const familyHeadInput = document.querySelector('[name="family-head-id"]');
    familyHeadInput.style.borderColor = 'red';
    alert('رقم الهوية الزوج يجب أن يكون 9 أرقام.');
} else {
    document.querySelector('[name="family-head-id"]').style.borderColor = '';
}

if (!validateID(wifeID)) {
    isValid = false;
    const wifeIDInput = document.querySelector('[name="family-wife-id"]');
    wifeIDInput.style.borderColor = 'red';
    alert('رقم هوية الزوجة يجب أن يكون 9 أرقام.');
} else {
    document.querySelector('[name="family-wife-id"]').style.borderColor = '';
}




          // Validation for dynamically generated inputs
          const childrenCount = parseInt(formData.get('daughter-above-12'), 10) || 0;
          for (let i = 1; i <= childrenCount; i++) {
              const name = formData.get(`daughter-${i}-name`);
              const gender = formData.get(`daughter-${i}-gender`);
              const dob = formData.get(`daughter-${i}-dob`);
              const passport = formData.get(`daughter-${i}-passport`);
              const education = formData.get(`daughter-${i}-education`);

              if (!name || !gender || !dob || !passport || !education) {
                  isValid = false;
                  alert(`Please fill all details for child ${i}`);
              }
          }

          // Validation for governorate "other"
          if (formData.get('governorate') === 'أخرى' && !formData.get('other-governorate')) {
              const input = document.querySelector('[name="other-governorate"]');
              input.style.borderColor = 'red';
              isValid = false;
          }

          // Talents validation
          if (formData.get('children-talents') === 'yes' && !formData.getAll('talents').length) {
              alert('Please specify at least one talent for children.');
              isValid = false;
          }

          return isValid;
      };

      // Validate the form
      if (!validateForm()) {
          alert('يرجى ملء جميع الحقول المطلوبة.');
          return;
      }

      // Collect data in the required format
      const collectChildrenDetails = () => {
          const childrenDetails = [];
          const childrenCount = parseInt(formData.get('daughter-above-12'), 10) || 0;

          for (let i = 1; i <= childrenCount; i++) {
              childrenDetails.push({
                  name: formData.get(`daughter-${i}-name`),
                  gender: formData.get(`daughter-${i}-gender`),
                  dob: formData.get(`daughter-${i}-dob`),
                  passport: formData.get(`daughter-${i}-passport`),
                  education: formData.get(`daughter-${i}-education`),
              });
          }
          return childrenDetails;
      };


      function collectDetails(detailType) {
    const detailsContainer = document.querySelector(`#${detailType} .inputs-container`);
    const inputs = detailsContainer ? detailsContainer.querySelectorAll('input') : [];
    const details = [];

    inputs.forEach((input) => {
        if (input.value.trim() !== '') {
            details.push({ name: input.value.trim() });
        }
    });

    return details;
}


// Define 'provider' outside the 'validateForm' or other nested functions
let provider = {}; // Declare at the top level of your function

// Build 'provider' based on logic
const providerTypeInput = document.querySelector('input[name="provider-type"]:checked');
if (providerTypeInput) {
    provider = providerTypeInput.value === 'other'
        ? {
            type: 'OTHER',
            name: formData.get('provider-name') || '',
            id: formData.get('provider-id') || ''
        }
        : {
            type: providerTypeInput.value === 'husband' ? 'FATHER' : 'MOTHER',
            name: '',
            id: ''
        };




}


const talentsExists = formData.get('children-talents') === 'yes'; // Check if "Yes" is selected
const talentsDetails = talentsExists 
    ? formData.getAll('talents').filter((talent) => talent.trim() !== '') 
    : []; // Only collect talents if "Yes" is selected

if (talentsExists && talentsDetails.length === 0) {
    isValid = false;
    alert('يرجى تحديد المواهب إذا تم اختيار نعم.');
}




      const data = {
          family_head: {
              name: formData.get('family-head-name'),
              id: formData.get('family-head-id'),
              passport: {
                  type: formData.get('passport-type'),
                  number: formData.get('passport-number'),
                  file_url : formData.get('husband-passport-file')
              },
          },
          wife: {
              name: formData.get('family-wife-name'),
              id: formData.get('family-wife-id'),
              passport: {
                  type: formData.get('wife-passport-type'),
                  number: formData.get('wife-passport-number'),
                  file_url : formData.get('wife-passport-file')
              },
          },
          entry_date: formData.get('entry-date'),
           address : {
           governorate: formData.get('governorate') === 'أخرى' ? formData.get('other-governorate')  : formData.get('governorate'),
           district: formData.get('district'),
           other_governorate: ''
          },
          provider: provider,
          contact: {
              phone: formData.get('phone'),
              whatsapp: formData.get('whatsapp'),
          },

          family_details: {
    total_members: parseInt(formData.get('total-family'), 10),
    martyrs: {
        exists: formData.get('martyrs') === 'yes',
        details: formData.get('martyrs') === 'yes' ? collectDetails('martyrs-details') : [],
    },
    injured: {
        exists: formData.get('injured') === 'yes',
        details: formData.get('injured') === 'yes' ? collectDetails('injured-details') : [],
    },
    chronic_diseases: {
        exists: formData.get('chronic-diseases') === 'yes',
        details: formData.get('chronic-diseases') === 'yes' ? collectDetails('chronic-diseases-details') : [],
    },
    urgent_surgery: {
        exists: formData.get('urgent-surgery') === 'yes',
        details: formData.get('urgent-surgery') === 'yes' ? collectDetails('urgent-surgery-details') : [],
    },
},

          
          children: {
              count: parseInt(formData.get('daughter-above-12'), 10) || 0,
              details: collectChildrenDetails(),
          },
          talents: {
              exists: talentsExists,
              details: talentsDetails,
          },
          under_two: {
              exists: formData.get('underTwo') === 'yes',
              needs: {
                  diapers: !!formData.get('diapers'),
                  milk: !!formData.get('milk'),
              },
          },
      };




      console.log('Data being sent:', JSON.stringify(data, null, 2));


      try {
          // Send data to the backend
          const response = await fetch('http://localhost:3000/family', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });

          const result = await response.json();

          console.log(result);

          if (response.ok) {
              alert('تم تسجيل البيانات بنجاح!');
              console.log('Server Response:', result);
          } else if (result.error && result.error.includes('Family already exists')) {
              alert('تم تسجيلك من قبل ، لا يمكن ان تسجل مره أخرى');
          } else {
              alert('حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى.');
              console.error('Server Error:', result.error);
          }
      } catch (error) {
          console.error('Fetch Error:', error);
          alert('تعذر الاتصال بالخادم. الرجاء التحقق من الاتصال.');
      }
  });



    function handleUnderTwo(hasChildrenUnderTwo) {
        const babyNeedsDiv = document.getElementById("babyNeeds");

        if (hasChildrenUnderTwo) {
            babyNeedsDiv.style.display = "block";
        } else {
            babyNeedsDiv.style.display = "none";

            // Uncheck the checkboxes if "No" is selected
            document.getElementById("diapers").checked = false;
            document.getElementById("milk").checked = false;
        }
    }

















function handlePassportType(type) {
    const passportInput = document.getElementById("passport-number");
    if (type === "palestinian") {
        passportInput.setAttribute("maxlength", "7");
        passportInput.setAttribute("pattern", "\\d{7}");
        passportInput.placeholder = "أدخل رقم جواز السفر (7 أرقام فقط)";
    } else {
        passportInput.removeAttribute("maxlength");
        passportInput.removeAttribute("pattern");
        passportInput.placeholder = "أدخل رقم جواز السفر";
    }
}

function handleWifePassportType(type) {
    const wifePassportInput = document.getElementById('wife-passport-number');
    if (type === 'palestinian') {
        wifePassportInput.setAttribute('maxlength', '7');
        wifePassportInput.setAttribute('pattern', '\\d{7}');
        wifePassportInput.placeholder = 'أدخل رقم جواز السفر (7 أرقام فقط)';
    } else {
        wifePassportInput.removeAttribute('maxlength');
        wifePassportInput.removeAttribute('pattern');
        wifePassportInput.placeholder = 'أدخل رقم جواز السفر';
    }
}


function handleTalents(hasTalents) {
  const talentOptions = document.getElementById('talentOptions');
  talentOptions.classList.toggle('hidden', !hasTalents);
}

function handleUnderTwo(hasChildrenUnderTwo) {
const babyNeedsDiv = document.getElementById("babyNeeds");

if (hasChildrenUnderTwo) {
    babyNeedsDiv.style.display = "block";
} else {
    babyNeedsDiv.style.display = "none";

    // Uncheck the checkboxes if "No" is selected
    document.getElementById("diapers").checked = false;
    document.getElementById("milk").checked = false;
}
}



function handleGovernorateChange(value) {
const otherGovernorateContainer = document.getElementById("other-governorate-container");
const otherGovernorateInput = document.getElementById("other-governorate");

if (value === "أخرى") {
    otherGovernorateContainer.style.display = "block";        
    otherGovernorateInput.setAttribute("required", "true");
    if(otherGovernorateInput.value.trim() === "") {
        otherGovernorateInput.focus();
        otherGovernorateInput.style.borderColor = 'red';

    }
    else if(otherGovernorateInput.value.trim() !== "") {
        otherGovernorateInput.style.borderColor = '';
    }
   
} else {
    otherGovernorateContainer.style.display = "none";
    otherGovernorateInput.removeAttribute("required");
    otherGovernorateInput.value = ""; // Clear the input if not "أخرى"
}

}


const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {

input.addEventListener('input',()=>{

  if(input.value < 0 ){
      input.value = 0 ;
  }
     
})


});








const inputsS = document.querySelectorAll('input');
const selectS = document.querySelectorAll('select');
selectS.forEach((el)=>{
el.removeAttribute('required');
})
inputsS.forEach((el)=>{
el.removeAttribute('required');
})



// Add these constants at the top of script.js
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];

function validatePassportFile(fileInput, fieldName) {
    const file = fileInput.files[0];
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    
    // Remove any existing error message
    const existingError = fileInput.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    if (!file) {
        errorDiv.textContent = `الرجاء اختيار ملف ${fieldName}`;
        fileInput.parentElement.appendChild(errorDiv);
        return false;
    }
    
    if (!ALLOWED_TYPES.includes(file.type)) {
        errorDiv.textContent = 'يجب أن يكون الملف صورة (JPG, PNG) أو PDF';
        fileInput.parentElement.appendChild(errorDiv);
        return false;
    }
    
    if (file.size > MAX_FILE_SIZE) {
        errorDiv.textContent = 'حجم الملف يجب أن يكون أقل من 5 ميجابايت';
        fileInput.parentElement.appendChild(errorDiv);
        return false;
    }
    
    return true;
}

// Add event listeners
document.getElementById('husband-passport-file').addEventListener('change', function() {
    validatePassportFile(this, 'جواز سفر رب الأسرة');
});

document.getElementById('wife-passport-file').addEventListener('change', function() {
    validatePassportFile(this, 'جواز سفر الزوجة');
});

// Add to form submit handler
document.getElementById('familyForm').addEventListener('submit', function(e) {
    const husbandFile = document.getElementById('husband-passport-file');
    const wifeFile = document.getElementById('wife-passport-file');
    
    const isHusbandValid = validatePassportFile(husbandFile, 'جواز سفر رب الأسرة');
    const isWifeValid = validatePassportFile(wifeFile, 'جواز سفر الزوجة');
    
    if (!isHusbandValid || !isWifeValid) {
        e.preventDefault();
    }
});
