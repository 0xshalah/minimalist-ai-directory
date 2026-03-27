export function HeroSection() {
  return (
    <section className="py-12 md:py-20 text-center flex flex-col items-center justify-center">
      <h1 className="text-[32px] md:text-[48px] font-bold text-[#030712] tracking-tight-custom leading-[1.1] mb-4 max-w-2xl">
        Find the right AI tool. Fast.
      </h1>
      <p className="text-[16px] md:text-[18px] text-[#6B7280] font-normal max-w-xl leading-[1.6]">
        A hyper-curated, distraction-free index of AI workflows. No marketing noise, just utility.
      </p>
      {/* Mobile Search (Visible only on mobile) */}
      <div className="w-full mt-8 md:hidden relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6B7280]">
          <span className="material-symbols-outlined text-[20px]">search</span>
        </div>
        <input className="w-full h-[44px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-md pl-10 pr-4 text-[16px] text-[#030712] placeholder-[#6B7280] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white" placeholder="Search tools..." type="text" />
      </div>
    </section>
  );
}
