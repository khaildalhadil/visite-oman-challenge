'use client'


export default async function page(props: { desId: string }) {

  const id = await props.desId;
   console.log(id);

  return (
    <div  >
      <h1 className="text-2xl">
        {id}
      </h1>
    </div>
  )
}
