
import prisma from '@prisma/client';


export async function getCourses() {
  try {
    const courses = await prisma.course.findMany();
    return courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Could not fetch courses.");
  }
}

export async function createCourse(title: string, imageSrc: string) {
  try {
    const newCourse = await prisma.course.create({
      data: {
        title,
        imageSrc,
      },
    });
    return newCourse;
  } catch (error) {
    console.error("Error creating course:", error);
    throw new Error("Could not create course.");
  }
}
