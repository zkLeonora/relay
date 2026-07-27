import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#fafaf8] p-8">
      <p className="tag mb-6">404</p>
      <h1 className="text-2xl font-semibold text-[#111111] mb-3 tracking-[-0.02em]">
        Page not found
      </h1>
      <p className="text-[#6b6b6b] text-[0.9375rem] max-w-[360px] mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Go home
      </Link>
    </div>
  );
}
