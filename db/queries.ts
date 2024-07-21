import prisma from '@/prisma'; 
import { auth } from '@clerk/nextjs/server';

export const getUserProgress = async () => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return null;
    }

    const data = await prisma.userProgress.findFirst({
      where: {
        userId: userId,
      },
      include: {
        activeCourse: true, 
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching user progress', error);
    throw new Error('Could not fetch User Progress');
  }
};

export const getCourses = async () => {
  try {
    const data = await prisma.course.findMany(); 
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error); 
    throw new Error(`Could not fetch courses`); 
  }
};

export const getCourseById = async (courseId: number) => {
  try {
    const data = await prisma.course.findUnique({
      where: { id: courseId },
    });
    return data;
  } catch (error) {
    console.log('Error fetching course by ID:', error);
    throw new Error('Could not fetch course by ID');
  }
};