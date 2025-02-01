import { useEffect, useRef } from 'react';

export default function LandingBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Gradient spots */}
      <div className="absolute left-[calc(50%-13rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-30rem)]" aria-hidden="true">
        <div className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#4318FF] to-[#9F7AEA] opacity-30" />
      </div>
      <div className="absolute right-[calc(50%-13rem)] top-10 -z-10 transform-gpu blur-3xl sm:right-[calc(50%-30rem)]" aria-hidden="true">
        <div className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#4318FF] to-[#9F7AEA] opacity-30" />
      </div>
    </div>
  );
}