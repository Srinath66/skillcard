'use client';

import { ProfileForm } from '@/components/ProfileForm';
import { ProfileCard } from '@/components/ProfileCard';

export default function CreatePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Create Your Profile Card</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ProfileForm />
        </div>
        <div className="flex justify-center items-start">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
} 