import React from 'react';

export function WelcomeForm({ onEmailSubmit, handleEmail, isLogged }) {

  const handleSubmit = async (e) => {
      e.preventDefault();
      onEmailSubmit();
  }
  
  return (
    <form className="flex flex-col justify-center h-full space-y-4 w-[450px]" onSubmit={handleSubmit}>
      <div>
          <h3 className="text-5xl font-bold text-[#8B8378]">Ingresa tu Mail para mandar los libros...</h3>
      </div>
      <div className="w-60 min-w-80 pl-4 py-4 rounded-xl bg-white/90 backdrop-blur-sm border-2 border-[#8B8378]/20 focus:outline-none transition-all">
        <input
          type="email"
          placeholder="asinon@kindle.com"
          onChange={(e) => handleEmail(e.target.value)}
          required
          className="focus:outline-none bg-transparent w-64"
        />
        <button
          type="submit"
          className="absolute left-64 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#8B8378] text-white rounded-lg hover:bg-[#6A5F56] transition-colors"
        >
          ✓
        </button>
      </div>
    </form>
  );
}