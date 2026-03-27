'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition, useState, useEffect } from 'react';

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const defaultQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (val) {
        params.set('q', val);
      } else {
        params.delete('q');
      }
      
      router.push(`/?${params.toString()}`);
    });
  };

  return (
    <div className="relative w-full group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6B7280]">
        <span className="material-symbols-outlined text-[20px]">search</span>
      </div>
      <input
        className="w-full h-[36px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-md pl-10 pr-4 text-[14px] text-[#030712] placeholder-[#6B7280] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white transition-colors"
        placeholder="Search tools..."
        type="text"
        value={query}
        onChange={handleSearch}
      />
      {isPending && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
