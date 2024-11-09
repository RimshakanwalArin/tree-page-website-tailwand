import Link from "next/link";

function Header() {
  return (
   
      <nav className="">
        <ul className="flex justify-center ">
          <li className="text-3xl font-bold ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-3xl font-bold ">
            <Link href="/about">About</Link>
          </li>
          <li className="text-3xl font-bold ">
            <Link href="/contect">Contact</Link>
          </li>
        </ul>
      </nav>
    
  );
}

export default Header;