import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="bg-neutral-50 border-b border-neutral-200 dark:bg-slate-800">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight py-8 text-center">
          <Link href="/" className="hover:underline">
            My Unbelievable Story
          </Link>
        </h2>
      </Container>
    </header>
  );
};

export default Header;
