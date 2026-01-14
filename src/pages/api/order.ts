export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      message: "这是个 GET 请求！",
    }),
    {
      status: 200
    }
  );
}

export async function POST({ params, request }) {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      message: "订单创建成功",
      order: body,
    }),
  );
}