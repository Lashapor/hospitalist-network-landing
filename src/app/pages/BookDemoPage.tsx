import { BookDemo } from '../components/BookDemo';

export function BookDemoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Book a Demo</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Schedule a free consultation to see how Hospitalist Network can streamline your
          recruitment process.
        </p>
      </div>
      <BookDemo />
    </main>
  );
}
