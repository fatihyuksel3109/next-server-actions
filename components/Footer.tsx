import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-xs font-bold text-white">© 2023 Fatih Yuksel. All Rights Reserved</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain mx-auto sm:mx-0"
      />
      <div className="flex items-center gap-6 sm:mx-0">
        <Link href="https://github.com/fatihyuksel3109">
          <Image
            src="./github-mark-white.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href="https://linkedin.com/in/fatihyuksell">
          <Image
            src="./linkedin.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href="https://medium.com/@fatihyuksel3109">
          <Image
            src="./medium.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href="https://instagram.com/byfatihyuksel">
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href="https://twitter.com/fyukseI">
          <Image
            src="./twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
