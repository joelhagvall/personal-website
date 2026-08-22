import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8">
      <div className="glass-card p-12 text-center max-w-md border border-white/10">
        <h1 className="text-8xl font-bold text-white/20 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Try the <Link href="/" className="text-primary hover:underline">home page</Link>,{" "}
          <Link href="/projects" className="text-primary hover:underline">projects</Link>,{" "}
          <Link href="/blog" className="text-primary hover:underline">blog</Link> or{" "}
          <Link href="/contact" className="text-primary hover:underline">contact</Link>.
          A full list of pages is in the{" "}
          <a href="/sitemap.xml" className="text-primary hover:underline">sitemap</a>,
          and a machine-readable overview in{" "}
          <a href="/llms.txt" className="text-primary hover:underline">llms.txt</a>.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
