import { Link } from "next-view-transitions";

export function AnimatedName() {
  return (
    <Link href="/" className="flex mb-8 text-gray-1000 no-underline fade-in">
      <span
        basics-css-icon=""
        data-icon="arrow-left-curve"
        role="img"
        aria-label="arrow-left-curve icon"
      ></span>
      Home
    </Link>
  );
}
