import ToolsCarousel from "../components/tools_carousel";

export default function Tools() {
  return (
    <div className="dark:bg-default-100/65 bg-default-100 bg-clip-padding px-12 md:px-24 py-12 flex flex-col gap-16">
      <div className=' flex flex-col gap-12'>
        <span className="flex items-center justify-start mt-6 hover:scale-110 transition group">
          <span className="h-0.5 flex-1 bg-linear-to-r from-transparent dark:to-gray-600"></span>
          <span className="shrink-0 px-8 text-gray-400 text-2xl font-semibold">Some <span className='bg-linear-to-r from-[#bc13fe] to-[#DE89FF] bg-clip-text text-transparent'>Tools</span> I use to build my projects</span>
          <span className="h-0.5 flex-1 bg-linear-to-l from-transparent dark:to-gray-600"></span>
        </span>
      </div>
      <ToolsCarousel />
    </div>
  );
}
