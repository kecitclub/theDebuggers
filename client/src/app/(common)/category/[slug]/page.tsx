


const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    return <>
    <div className="p-8 px-4">{slug}</div>
    </>;
  };
  
  export default page;
  
  