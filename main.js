//Part 1
const hospital = {
  name: "Oakville Trafalgar Memorial Hospital",
  patient: [
    {
      id: 1,
      fullName: "Chai Ray",
      dateOfBirth: new Date(1992, 2, 4),
      symptoms: ["fever", "diarrhea"],
    },
    {
      id: 2,
      fullName: "Chirag Taluja",
      dateOfBirth: new Date(2005, 9, 14),
      symptoms: ["fatigue", "coughing"],
    },
    {
      id: 3,
      fullName: "Alex Styles",
      dateOfBirth: new Date(2006, 4, 2),
      symptoms: ["congestion", "muscle-ache", "tiredness"],
    },
  ],
};

//Part2
function showPatients(hospital) {
  const name = hospital.name;
  const patients = hospital.patient;

  let finalOutput = "<h1>" + name + "</h1> \n";

  for (let i = 0; i < patients.length; i++) {
    let patient = patients[i];

    //date of birth without time
    let dateOfBirthWithoutTime =
      patient.dateOfBirth.getDate() +
      " " +
      patient.dateOfBirth.getMonth() +
      " " +
      patient.dateOfBirth.getFullYear();

    let patientDetails =
      "<h2>" +
      patient.fullName +
      "," +
      dateOfBirthWithoutTime +
      " " +
      "</h2> \n <ul> \n";

    for (let j = 0; j < patient.symptoms.length; j++) {
      patientDetails += "\t<li>" + patient.symptoms[j] + "</li> \n";
    }

    finalOutput += patientDetails + "</ul> \n";
  }
  return finalOutput;
}

console.log(showPatients(hospital));

//Part3
function getPatient(patients) {
  //random number less than or equal to length of array of patients
  const randomNumber = Math.floor(Math.random() * patients.length);
  return patients[randomNumber].id;
}

console.log(getPatient(hospital.patient));
