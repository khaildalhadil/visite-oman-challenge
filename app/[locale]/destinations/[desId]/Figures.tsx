import Image from 'next/image'

export default function Figures() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[1fr_1fr] mt-10 gap-3 h-125 relative">
      <figure className="overflow-hidden bg-red-200 row-start-1 row-end-3 col-start-1 col-end-2 relative">
        <Image
          src={`https://images.unsplash.com/photo-1597679389353-b57a3503ca1b?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="place"
          fill
          className="rounded object-cover hover:scale-110 transition duration-200"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
      </figure>

      <figure className="overflow-hidden bg-red-200 row-start-1 row-end-2 col-start-2 col-end-3 relative">
        <Image
          src={`https://images.unsplash.com/photo-1579783398506-cb73a55deb39?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="place"
          fill
          className="rounded object-cover hover:scale-110 transition duration-200"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
      </figure>

      <figure className="overflow-hidden bg-red-200 row-start-2 row-end-3 col-start-2 col-end-3 relative">
        <Image
          src={`https://images.unsplash.com/photo-1606813332135-228593b6e201?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="place"
          fill
          className="rounded object-cover hover:scale-110 transition duration-200"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
      </figure>

      <figure className="overflow-hidden bg-red-200 row-start-2 row-end-3 col-start-3 col-end-4 relative">
        <Image
          src={`https://images.unsplash.com/photo-1700919816978-82de9d9474f4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="place"
          fill
          className="rounded object-cover hover:scale-110 transition duration-200"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
      </figure>

      <figure className="overflow-hidden bg-red-200 row-start-1 row-end-2 col-start-3 col-end-4 relative">
        <Image
          src={`https://images.unsplash.com/photo-1623680904963-5580d963e18e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="place"
          fill
          className="rounded object-cover hover:scale-110 transition duration-200"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
      </figure>
    </div>
  );
}
