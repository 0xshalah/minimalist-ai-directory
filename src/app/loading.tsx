import { Skeleton } from "@/components/ui/Skeleton";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="w-full pb-24 pt-8">
        <Container>
          <div className="mb-8">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-md p-4 h-[180px]">
                <div className="flex items-start gap-4 mb-3">
                  <Skeleton className="w-10 h-10 rounded" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-3/4 mb-2" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <div className="flex justify-between pt-3 border-t border-[#F3F4F6]">
                  <Skeleton className="h-6 w-16 px-2 py-1 rounded" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
