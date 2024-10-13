import User from "./user.model";

const createUsertoDB=async()=>{
    const user = await new User({
    id: "123556",
    role: "student",
    password: "securePassword123!",
    name: {
      firstName: "Rabby",
      middleName: "Islam",
      lastName: "Dofadar",
    },
    dateOfBirth: "2000-05-15",
    gender: "male",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    emergencyContactNo: "987-654-3210",
    presentAddress: "123 Elm Street, Springfield",
    permanentAddress: "456 Oak Avenue, Springfield",
  });
  await user.save();
  }

  export default createUsertoDB; 