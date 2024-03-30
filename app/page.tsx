import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="w-[95vw] flex justify-around ml-[5vw] mb-[2vw] h-max">
        <img
          src="/icon10.svg"
          alt="icon"
          height={60}
          width={60}
          className="icon1  icons"
        />
        <img
          src="/icon2.svg"
          alt="icon"
          height={70}
          width={70}
          className="icon2 icons"
        />
        <img
          src="/icon3.svg"
          alt="icon"
          height={60}
          width={80}
          className="icon3 icons"
        />
        <img
          src="/icon1.svg"
          alt="icon"
          height={60}
          width={60}
          className="icon4 icons"
        />

        <div>
          <h1 className="font-sans font-bold mt-16">
            The <span className="text-[#FF7426]">Smart</span> <br /> Choice For{" "}
            <span className="text-[#FF7426]">Future </span>{" "}
          </h1>

          <p className="text-[#8A8A8A] my-8">
            Elearn is a global training provider based across the UK that
            specialises in <br /> accredited and bespoke training courses. We
            crush <br />
            the...
          </p>
          <a className="hidden rounded-full bg-[#4D2C5E] px-5 py-2.5 text-sm font-medium  transition  sm:block poppins-bold text-white w-max ">
            Explore Now!
          </a>
        </div>
        <div>
          <Image src="/picElixir.svg" alt="img1" height={750} width={700} />
        </div>
      </div>
      {/* violet  */}
      <div className="w-[80vw] h-[12vw] bg-[#4D2C5E] ml-[9vw] rounded-[10px] flex justify-center items-center ">
        {/* box main  */}
        <div className="w-[70vw] h-[8vw] flex items-center gap-4 mt-3">
          <div className="flex ">
            <div className="w-[5vw] h-[5vw] bg-[#71567E] rounded-[20px] flex justify-center items-center">
              <div>
                <Image src="/pic1v.svg" alt="pic" height={40} width={40} />
              </div>
            </div>
            <div className="text-white ml-2">
              <h2 className="h2">Learn The Latest Skills</h2>
              <p className="p text-[#dfc0ee]">
                Contrary to popular belief, Lorem Ipsum is <br /> not simply
                random text. It has roots in a <br /> BC, making it over 2000
                years old.
              </p>
            </div>
          </div>
          {/* part2 */}
          <div className="flex ">
            <div className="w-[5vw] h-[5vw] bg-[#71567E] rounded-[20px] flex justify-center items-center">
              <div>
                <Image src="/pic2v.svg" alt="pic" height={40} width={40} />
              </div>
            </div>
            <div className="text-white ml-2">
              <h2 className="h2">Get Ready For Carrier</h2>
              <p className="p text-[#dfc0ee]">
                Contrary to popular belief, Lorem Ipsum is <br /> not simply
                random text. It has roots in a <br /> BC, making it over 2000
                years old.
              </p>
            </div>
          </div>
          {/* part3  */}
          <div className="flex ">
            <div className="w-[5vw] h-[5vw] bg-[#71567E] rounded-[20px] flex justify-center items-center">
              <div>
                <Image src="/pic3v.svg" alt="pic" height={40} width={40} />
              </div>
            </div>
            <div className="text-white ml-2">
              <h2 className="h2">Earn a Certificate</h2>
              <p className="p text-[#dfc0ee]">
                Contrary to popular belief, Lorem Ipsum is <br /> not simply
                random text. It has roots in a <br /> BC, making it over 2000
                years old.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* courses  */}
      {/* white box  */}
      <div className="bg-white w-[100vw] p-[2vw] ">
        <Image
          src="/icon11.svg"
          alt="icon"
          height={100}
          width={100}
          className="icons iconb"
        />
        <Image
          src="/icon12.svg"
          alt="icon"
          height={100}
          width={100}
          className="icons icona"
        />

        <h2 className="text-black  text-center font-semibold text-[3vw] mt-5">
          Our Tracks
        </h2>
        <p className="text-[1vw] text-center font-medium text-[#8A8A8A] ">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <div className="w-[90vw] h-[23vw] flex justify-around items-center ml-[2vw]">
          <div className="w-[15vw] h-[18vw] bg-[#ACACAC]"></div>
          <div className="w-[15vw] h-[18vw] bg-[#ACACAC]"></div>
          <div className="w-[15vw] h-[18vw] bg-[#ACACAC]"></div>
        </div>
      </div>

      {/* yellow box  */}
      <div className="bg-[#FDF8EE] h-[30vw] w-[100vw] p-[30px] ">
        <div className="w-[90vw] flex  ">
          <div className="flex self-end w-[50vw] h-[60vw] mt-6">
            <Image
              src="/pic2main.svg"
              alt="pic"
              height={500}
              width={500}
              className="absolute  main2"
            />
          </div>

          <div>
            <h1 className="font-bold text-[3vw]">
              Premium <span className="text-[#FF7426]">Learning</span>
              <br />
              Experience
            </h1>
            {/* part1  */}
            <div className="flex mt-[15px]">
              <div className="w-[5vw] h-[5vw] bg-[#4D2C5E] rounded-[20px] flex justify-center items-center">
                <div>
                  <Image src="/ypic1.svg" alt="pic" height={40} width={40} />
                </div>
              </div>
              <div className="text-white ml-2 ">
                <h2 className="text-black h2">Easily Accessible</h2>
                <p className=" text-[#8A8A8A] mt-[8px]">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>

            {/* part2  */}
            <div className="flex mt-[15px]">
              <div className="w-[5vw] h-[5vw] bg-[#4D2C5E] rounded-[20px] flex justify-center items-center">
                <div>
                  <Image src="/ypic2.svg" alt="pic" height={40} width={40} />
                </div>
              </div>
              <div className="text-white ml-2 ">
                <h2 className="text-black h2">Fun Learning Experience</h2>
                <p className=" text-[#8A8A8A] mt-[8px]">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* white box  */}
      <div className="bg-white h-[40vw] w-[100vw]"></div>
    </main>
  );
}
