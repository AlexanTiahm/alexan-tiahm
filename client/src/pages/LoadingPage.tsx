import Spinner from "../components/Spinner";

type LoadingPageProps = {
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
};

export default function LoadingPage({ message = "Loading…", showRetry = false, onRetry }: LoadingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-6">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center mb-6">
          <Spinner size="lg" label={message} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
          {message}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
          Hang tight — we're fetching your content. This should only take a moment.
        </p>

        {/* Skeleton list to indicate the structure of content being loaded */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse flex items-start gap-4">
              <div className="rounded-md bg-slate-200 dark:bg-slate-700 w-14 h-14 flex-shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Optional retry button */}
        {showRetry && (
          <div className="mt-6">
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800 text-sm font-medium text-slate-900 dark:text-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
