import { query } from "@anthropic-ai/claude-agent-sdk";

if (import.meta.main) {
  const currentDateTime = new Date(Date.now());
  Deno.serve(async (_req) => {
    const queryJob = query({
      prompt: "Hello, Claude! How are you today? And what time is it?",
      options: {
        model: "claude-sonnet-4-5",
        sandbox: {
          enabled: true,
          autoAllowBashIfSandboxed: true,
        },
        allowedTools: ["Bash", "Bash(time)"],
        systemPrompt: {
          type: "preset",
          preset: "claude_code",
          append: `\n The current time is ${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}.`,
        }
      },
    });
    for await (const message of queryJob) {
      console.log(message);
      if ("result" in message) {
        return new Response(`Claude responded: ${message.result}`, {
          status: 200,
        });
      }
    }
    return new Response("No response.", { status: 200 });
  });
}
