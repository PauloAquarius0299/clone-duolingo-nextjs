'use client';

import { getCourseById, getUserProgress } from '@/db/queries';
import { auth, currentUser } from '@clerk/nextjs/server';
import prisma from '@/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const upsertUserProgress = async (courseId: number) => {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      throw new Error('Unauthorized');
    }

    const course = await getCourseById(courseId);

    if (!course) {
      throw new Error('Course not found');
    }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
      await prisma.userProgress.update({
        where: { userId: userId },
        data: { activeCourseId: courseId },
      });
    } else {
      await prisma.userProgress.create({
        data: {
          userId: userId,
          userName: user.firstName || 'User',
          userImageSrc: user.imageUrl || '/mascote.svg',
          activeCourseId: courseId,
          hearts: 5,
          points: 0,
        },
      });
    }

    revalidatePath('/courses');
    revalidatePath('/learn');
    redirect('/learn')
  } catch (error) {
    console.error('Error upserting user progress:', error);
    throw new Error('Could not upsert user progress');
  }
};
