// src/components/Hero/HeroContent.js
import { useState } from 'react';
import { WelcomeForm } from "./WelcomeForm";
import { Mail } from 'lucide-react';

export function HeroContent({ onEmailSubmit, isLogged }) {
  let email = "";

  const handleEmail = (email) => {
    email = email;
  }

  if (!isLogged) {
    return (
      <div className="flex flex-col justify-center h-full space-y-4 w-[450px]">
        <div>
          <WelcomeForm onEmailSubmit={onEmailSubmit} isLogged={isLogged} handleEmail={handleEmail} />
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center h-full space-y-4'>
      <div className="bg-gradient-to-br from-white/95 to-white/75 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 w-96">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-[#8B8378]/10 p-3 rounded-full">
            <Mail size={32} className="text-[#8B8378]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-[#8B8378]">
              Bienvenido!
            </h2>
            <p className="text-[#8B8378]/80 font-medium">
              {email}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#8B8378]/70">
              <span className="text-base">Desliza hacia abajo para buscar libros.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}