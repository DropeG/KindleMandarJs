import Foto from "./pongo0.jpg";

export function HeroImage() {
  return (
    <div className="relative h-[500px] w-[500px]">
      <img
        src={Foto}
        alt="Dog"
        className="w-full h-full object-cover rounded-2xl shadow-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#B7E2F3]/20 rounded-2xl" />
    </div>
  );
}

