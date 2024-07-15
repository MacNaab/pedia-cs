import Image from "next/image";
import Form from "./form";
export default function Home() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          <a
            href="https://www.ihscoring.com/fr/"
            className="group"
            target="_blank"
          >
            <span
              style={{ verticalAlign: "-webkit-baseline-middle" }}
              className="text-red-900 group-hover:underline"
            >
              IH
            </span>
            <span
              style={{ verticalAlign: "-webkit-baseline-middle" }}
              className="text-blue-950 group-hover:underline"
            >
              ReS
            </span>
          </a>
        </h1>
        <div className="text-3xl font-bold ml-2">
          <div className="text-red-900">Infantile Hemangioma</div>
          <div className="text-blue-950">Referral Score</div>
        </div>
      </div>
      <div className="flex justify-around align-middle">
        <Form />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/illustration_ihres.png"
          alt="Illustration IHRES"
          width={557}
          height={427}
          priority
        />
      </div>
    </>
  );
}
