export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary_light text-primary_dark">
      <h1 className="text-6xl">404</h1>
      <p className="text-xl mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-primary_dark text-primary_light rounded-lg"
      >
        Go Back Home
      </a>
    </div>
  );
}
