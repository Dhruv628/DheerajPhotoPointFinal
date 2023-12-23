import User from "@/app/api/models/User/User";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest, response: Response) => { 
  try { 
    const users = await User.find();
    console.log(users);
    if (!users) {
      return NextResponse.json(
        { message: "Users do not exist" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        users,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        {
          status: 500,
        }
      );
    }
  }
};
