if (import.meta.main) {
  Deno.serve((_req) => {
    return new Response("Hello World", { status: 200 });
  });
}
