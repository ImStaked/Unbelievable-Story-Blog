import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | My Unbelievable Story",
  description: "Donate to the author of My Unbelievable Story.",
  alternates: {
    canonical: "/about",
  },
};

export default function Donate() {
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 text-center">
        Donate
      </h1>
        <div className="md:col-span-2">
            <p className="text-lg leading-relaxed mb-4 text-center">
            Donations help support the ongoing development and maintenance of this blog and other projects. 
            <br />
            I am currently living in a homeless shelter because that is what happens when the goverment is trying to destroy your life. 
            <br />
            Next week I will be doing this from the sidewalk because I have used up all of my time in the homeless shelter. 
            <br />
            It is very difficult to work while being attacked wth the energy weapons they use to torture me daily but I do the best I can with what is available. 
            <br />
            If anyone needs computing services such a web site design or development, consulting, or anything else please <Link href="/contact" className="underline hover:text-blue-600 transition-colors">contact me</Link> to discuss.
            <br />
            Your contributions are greatly appreciated!

            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <div className="md:col-span-1 flex flex-col items-center">
            <Image
                src="/assets/blog/donate/btc-donate-address.jpg"
                alt="BTC Donation Adddres"
                width={300}
                height={300}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center break-all">
                Donate BTC: <br />
                bc1q0wn7qf5m6u7sy7gkp6nl30l8f2kel3ucn5fkzq
            </p>
            </div>
            <div className="md:col-span-1 flex flex-col items-center">
            <Image
                src="/assets/blog/donate/ethereum-donate-address.jpg"
                alt="ETH Donation Adddres"
                width={300}
                height={300}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center break-all">
                Donate ETH: <br />
                0x16bf976cA6EAb9e9Cb01EBD14977cBc10E371831
            </p>
            </div>
           <div className="md:col-span-1 flex flex-col items-center">
            <Image
                src="/assets/blog/donate/monero.jpg"
                alt="Monero Donation Adddres"
                width={300}
                height={300}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center break-all">
                For added Privacy Donate XMR: <br />
                438M4rs5aEJZW6YTPhWyjmYppMEmUNLJbDdDpdy5BacZDaummyv7Ru86RFFGmi7vFAXNT5grswnFdJf4NgA2EcXAQFc1KRu
            </p>
            </div>
         <div className="md:col-span-1 flex flex-col items-center">
            <Image
                src="/assets/blog/donate/cashapp.svg"
                alt="Cash App Donation"
                width={300}
                height={300}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center break-all">
                CashApp - Cashtag: <br />
                $jasonrpersonal
            </p>
            </div>

        </div>
      </div>
  );
}