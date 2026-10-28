import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
 
// CREATE
export async function POST(request) {
  const body = await request.json();
  const student = await prisma.student.create({
    data: {
      name: body.name,
      email: body.email,
      age: Number(body.age),
    },
  });
  return NextResponse.json(student, { status: 201 });
}
// READ
export async function GET() {
  const students = await prisma.student.findMany();
  return NextResponse.json(students);
}
// UPDATE
export async function PUT(request) {
  const body = await request.json();
  const student = await prisma.student.update({
    where: { id: Number(body.id) },
    data: {
      name: body.name,
      email: body.email,
      age: Number(body.age),
    },
  });
  return NextResponse.json(student);
}

// DELETE
export async function DELETE(request) {
  const body = await request.json();
  const student = await prisma.student.delete({
    where: { id: Number(body.id) },
  });
  return NextResponse.json({
    message: "Student deleted successfully",
    student,
  });
}
