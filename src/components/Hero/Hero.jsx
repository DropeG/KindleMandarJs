import { HeroImage } from './HeroImage';
import { HeroContent } from './HeroContent';

export function Hero({ onEmailSubmit, isLogged }) {
  return (
    <div className="flex gap-12 mt-6 ">
      <div>
        <HeroImage />
      </div>
      <div className="ml-8 ">
        <HeroContent onEmailSubmit={onEmailSubmit} isLogged={isLogged} />
      </div>
    </div>
  );
}