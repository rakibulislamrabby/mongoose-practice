import { NextFunction, Request, Response } from "express";
import createUsertoDB from "./user.service";

export const createUser= async(req: Request, res: Response, next: NextFunction) => {
  const user=await createUsertoDB();
  res.status(200).json({
    status:"success",
    data:user,
  })
}

//pattern
//Route--> controller--> service