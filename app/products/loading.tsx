import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Filters Sidebar Skeleton */}
        <div className="w-full md:w-64 shrink-0">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-8 w-16" />
            </div>

            <div className="space-y-4">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-6 w-24" />
                    <div className="space-y-2">
                      {Array(3)
                        .fill(null)
                        .map((_, j) => (
                          <div key={j} className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4 rounded" />
                            <Skeleton className="h-4 w-32" />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Skeleton className="h-8 w-32" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Skeleton className="h-10 w-full sm:w-[250px]" />
              <Skeleton className="h-10 w-full sm:w-[180px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square w-full rounded-lg" />
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-6 w-1/4" />
                </div>
              ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-10 w-10 rounded" />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
