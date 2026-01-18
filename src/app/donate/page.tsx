import type { Metadata } from 'next';
import Image from "next/image";

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
            Your contributions are greatly appreciated!

            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <div className="md:col-span-1">
            <Image
                src="/assets/blog/donate/btc-donate-address.jpg"
                alt="BTC Donation Adddres"
                width={400}
                height={400}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center">
                Donate BTC: <br />
                bc1q0wn7qf5m6u7sy7gkp6nl30l8f2kel3ucn5fkzq
            </p>
            </div>
            <div className="md:col-span-1">
            <Image
                src="/assets/blog/donate/btc-donate-address.jpg"
                alt="BTC Donation Adddres"
                width={400}
                height={400}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center">
                Donate ETH: <br />
                0x16bf976cA6EAb9e9Cb01EBD14977cBc10E371831
            </p>
            </div>

        </div>
      </div>
  );
}