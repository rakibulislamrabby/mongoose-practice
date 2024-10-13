import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

//usng cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting test data into mongoDB
  /*
        Step1: Interface 
        Step2: Schema 
        Step3: model 
        Step4: database query 
    */
  //   res.send("Hello World!");
  //   next()

  // 1.creating interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }
  // 2. Create a Schema using interface.
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  // 3. Create a Model.
  const User = model<IUser>("user", userSchema);

  const createUsertoDB=async()=>{
    const user = new User({
    id: "12345",
    role: "student",
    password: "securePassword123!",
    name: {
      firstName: "Rakibul",
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
  createUsertoDB()
  
});

export default app;
