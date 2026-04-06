import { BrandShowcase } from "../BrandShowcase";

export function AuthLayout({ children }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-8 lg:py-8">
      <BrandShowcase />

      <section className="glass-panel relative overflow-hidden p-6 sm:p-8 lg:w-[46rem] lg:p-10">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(240,196,106,0.15),transparent_70%)] blur-2xl" />
        <div className="relative">{children}</div>
      </section>
    </main>
  );
}