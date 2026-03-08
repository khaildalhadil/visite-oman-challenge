      
export default function loading() {
  return (
    <div>
      <div className="p-4 space-y-3 mt-3">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-9 bg-gray-300 rounded w-24 mt-4"></div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[1fr_1fr] mt-10 gap-3 h-125 relative">
        <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse w-full">
          <div className="h-48 bg-gray-300 w-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse w-full">
          <div className="h-48 bg-gray-300 w-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse w-full">
          <div className="h-48 bg-gray-300 w-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse w-full">
          <div className="h-48 bg-gray-300 w-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse w-full">
          <div className="h-48 bg-gray-300 w-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse w-full">
          <div className="h-48 bg-gray-300 w-full"></div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-9 bg-gray-300 rounded w-24 mt-4"></div>
      </div>
    </div>
  );
}
      
      
      