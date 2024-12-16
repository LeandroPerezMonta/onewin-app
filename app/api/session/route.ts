const baseUrlTable = process.env.NEXT_PUBLIC_TABLE_DOMAIN
const tokenTable = process.env.NEXT_PUBLIC_TABLE_TOKEN
const idTable = process.env.NEXT_PUBLIC_TABLE_ID

export async function POST(req: Request) {
  const body = await req.json()
  try {
    const result = await fetch(`${baseUrlTable}/api/v2/tables/${idTable}/records`, {
      method: "POST",
      headers: {
        "xc-token": `${tokenTable}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!result.ok) {
      const response = await result.json()
      return new Response(response.message, { status: response.statusCode, statusText: response.message })
    }

    const response = await result.json()
    return Response.json(response)
  } catch (error) {
    return new Response("Something went wrong: Internal Server Error",{
      status: 500,
      statusText: `Internal Server Error, error: ${error}`
    })
  }
}

export async function GET() {
  return Response.json({
    message: "Hello from Next.js API",
  })
}