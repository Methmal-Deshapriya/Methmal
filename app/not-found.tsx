import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex justify-center w-full h-screen  items-center ">
      <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] rounded-xl h-[30vh] overflow-hidden bg-[#121212] shadow-xl shadow-black-100">
        <div className="w-full flex justify-start p-5 items-center ">
          <div className="w-3 h-3 rounded-full ml-1 bg-[#7214ff] shadow-md shadow-black/[0.5]"></div>
          <div className="w-3 h-3 rounded-full ml-1 bg-[#883bfc] shadow-md shadow-black/[0.5]"></div>
          <div className="w-3 h-3 rounded-full ml-1 bg-[#ad77fd] shadow-md shadow-black/[0.5]"></div>
        </div>
        <div className=" mt-2 text-2xl text-center text-slate-200 font-funnel">
          404
        </div>
        <div className="  text-center text-lg text-slate-400 font-funnel">
          Methmal say's Page not found
        </div>
        <div className=" flex  justify-center  mt-14 ">
          <Link href="/">
            <button className="rounded-lg hover:bg-purple bg-purple-100 font-funnel px-6 py-2">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
