
 
export async function GET(req) {
    const type = req.nextUrl.searchParams.get('type');
    console.log('Type'+ type);
 
  return Response.json(
    [
        {title: 'hello'},
        {page: 'second'},
    ]
)
}

export async function POST(req) {
    const received_data = await req.json();
    console.log(received_data)
 
    return Response.json({message: "post success"}
  )
  }