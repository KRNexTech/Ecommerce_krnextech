import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <Skeleton className="h-5 w-2/3 max-w-[500px]" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images Skeleton */}
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="grid grid-cols-4 gap-4">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="aspect-square w-full rounded-lg" />
              ))}
          </div>
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-6">
          <div>
            <Skeleton className="h-10 w-2/3 mb-2" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-4 w-4 rounded-full mr-1" />
                  ))}
              </div>
              <Skeleton className="h-4 w-32" />
            </div>
          </div>

          <div>
            <Skeleton className="h-8 w-24 mb-1" />
            <Skeleton className="h-4 w-48" />
          </div>

          <Skeleton className="h-1 w-full" />

          <div className="space-y-4">
            <div>
              <Skeleton className="h-6 w-16 mb-2" />
              <div className="flex gap-2">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-8 w-8 rounded-full" />
                  ))}
              </div>
            </div>

            <div>
              <Skeleton className="h-6 w-16 mb-2" />
              <div className="flex flex-wrap gap-2">
                {Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-10 w-10 rounded-md" />
                  ))}
              </div>
              <Skeleton className="h-4 w-24 mt-2" />
            </div>

            <div>
              <Skeleton className="h-6 w-24 mb-2" />
              <div className="flex items-center">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-6 w-12 mx-4" />
                <Skeleton className="h-10 w-10 rounded-md" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Skeleton className="h-12 flex-1 rounded-md" />
            <Skeleton className="h-12 flex-1 rounded-md" />
          </div>

          <Skeleton className="h-1 w-full" />

          <div className="space-y-4">
            <div className="flex gap-2">
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 flex-1 rounded-md" />
                ))}
            </div>
            <Skeleton className="h-24 w-full rounded-md" />
          </div>
        </div>
      </div>

      {/* Similar Products Skeleton */}
      <div className="mt-16">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {Array(3)
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
      </div>
    </div>
  )
}
