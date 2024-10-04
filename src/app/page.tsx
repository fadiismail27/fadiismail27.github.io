import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
        {/* Avatar Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
          <Image
            src={"/headshot.jpeg"}
            alt="Avatar"
            className="rounded-full"
            width={250}
            height={250}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-8 text-black">Hi, my name is Fadi</h1>
          <p className="text-black leading-relaxed">
          Im a sophomore at Cornell University, majoring in Computer Science, with a passion for full-stack software engineering, 
          machine learning, and exploring how technology can enhance healthcare. Ive had the opportunity to work on various projects, 
          from building a chatbot and analyzing population genetics to contributing to a CV model to detect crossbores in the Atlanta area. 
          I also enjoy taking on leadership roles; I serve as an RA and hold positions in organizations that promote diversity and 
          cultural awareness. Im driven by a desire to use technology to make a positive impact, especially in areas like assistive 
          technology, healthcare, and community development.
          </p>
        </div>
      </div>
    </main>
  );
}
