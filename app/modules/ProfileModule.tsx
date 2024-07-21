import React from 'react';
import { useAuth } from '@/context/AuthContext';

const ProfileModule: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow border md:mt-0 sm:max-w-md sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
            Profile
          </h2>
          <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium text-black">Name</label>
              <p className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg p-2.5">
                {user.email || "N/A"}
              </p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">Email</label>
              <p className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg p-2.5">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileModule;
