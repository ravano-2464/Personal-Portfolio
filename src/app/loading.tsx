export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95">
      <div className="flex flex-col items-center gap-4">
        <div className="relative size-14 rounded-full border border-primary/35">
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
        </div>
        <p className="text-sm text-muted-foreground">Preparing portfolio...</p>
      </div>
    </div>
  );
}
