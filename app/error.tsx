"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#fafaf8] p-8">
      <p className="tag mb-6">Error</p>
      <h1 className="text-2xl font-semibold text-[#111111] mb-3 tracking-[-0.02em]">
        Something went wrong
      </h1>
      <p className="text-[#6b6b6b] text-[0.9375rem] max-w-[400px] mb-8">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button onClick={reset} className="btn btn-primary">
        Try again
      </button>
    </div>
  );
}
