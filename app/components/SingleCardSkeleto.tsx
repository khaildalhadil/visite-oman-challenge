
export default function SingleCardSkeleto() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse w-full">
      <div className="h-48 bg-gray-300 w-full"></div>
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-9 bg-gray-300 rounded w-24 mt-4"></div>
      </div>
    </div>
  );
}
