import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";



// export async function POST() {
//   const student = await prisma.student.create({
//     data: { name: "Aman", age: 20 },
//   });
//   return NextResponse.json(student);
// }

// export async function GET() {
//   const students = await prisma.student.findMany();
//   return NextResponse.json(students);
// }



export async function POST(request) {
  try {
    const body = await request.json();
    const student = await prisma.student.create({
      data: {
        name: body.name,
        email: body.email,
        age: Number(body.age)
      }
    })
  }
  catch {

  }
}