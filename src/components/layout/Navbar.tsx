import Link from "next/link";
import { Container } from "./Container";
import { SearchInput } from "./SearchInput";
import { Suspense } from "react";

export function Navbar() {
  return (
    <div className="w-full border-b border-[#E5E7EB] bg-white sticky top-0 z-40">
      <Container className="py-3 md:py-0 md:h-16 flex flex-wrap items-center justify-between gap-y-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-[#030712] hover:opacity-80 transition-opacity order-1">
          <div className="size-5 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-[18px] font-semibold tracking-tight-custom leading-none">Minimalist AI Directory</span>
        </Link>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          {/* Submit Button */}
          <Link href="/submit" className="h-[36px] px-4 bg-[#030712] hover:bg-gray-800 text-white rounded-md flex items-center justify-center text-[14px] font-medium tracking-[0.01em] transition-colors">
            Submit
          </Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="flex w-full md:flex-1 md:w-auto md:max-w-[320px] order-3 md:order-2 md:mx-4">
          <Suspense fallback={<div className="w-full h-[36px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-md"></div>}>
            <SearchInput />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
