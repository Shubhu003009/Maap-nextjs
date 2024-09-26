import Button from "@/components/Button";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center min-h-svh text-para">
      <h1 className="text-6xl">404</h1>
      <p className="text-xl text-center opacity-40 my-5">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Button href="/">Go Back Home</Button>
    </main>
  );
}
