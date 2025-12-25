import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="bg-neutral-50 border-b border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="flex justify-between items-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight text-center">
            <Link href="/" className="hover:underline">
              My Unbelievable Story
            </Link>
          </h2>
          <nav>
            <ul className="flex items-center text-lg font-bold">
              <li>
                <Link href="/" className="hover:underline mx-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline mx-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline mx-2">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline mx-2">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
