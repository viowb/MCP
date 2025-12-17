import { Server, StdioServerTransport, } from "@modelcontextprotocol/sdk/server/index.js";
import { ListToolsRequestSchema, CallToolRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
// Initialize server
const server = new Server({
    name: "agentic-mcp-server",
    version: "1.0.0",
});
// Define available tools
const tools = [
    {
        name: "calculator",
        description: "Performs basic arithmetic operations",
        inputSchema: {
            type: "object",
            properties: {
                operation: {
                    type: "string",
                    enum: ["add", "subtract", "multiply", "divide"],
                    description: "The arithmetic operation to perform",
                },
                a: {
                    type: "number",
                    description: "First number",
                },
                b: {
                    type: "number",
                    description: "Second number",
                },
            },
            required: ["operation", "a", "b"],
        },
    },
    {
        name: "text_processor",
        description: "Processes text with various transformations",
        inputSchema: {
            type: "object",
            properties: {
                action: {
                    type: "string",
                    enum: ["uppercase", "lowercase", "reverse", "wordcount"],
                    description: "The text processing action",
                },
                text: {
                    type: "string",
                    description: "The text to process",
                },
            },
            required: ["action", "text"],
        },
    },
    {
        name: "json_formatter",
        description: "Formats and validates JSON",
        inputSchema: {
            type: "object",
            properties: {
                action: {
                    type: "string",
                    enum: ["format", "validate", "minify"],
                    description: "The JSON action",
                },
                input: {
                    type: "string",
                    description: "The JSON string to process",
                },
            },
            required: ["action", "input"],
        },
    },
];
// Handle tool list requests
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return { tools };
});
// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request;
    try {
        switch (name) {
            case "calculator": {
                const { operation, a, b } = args;
                let result;
                switch (operation) {
                    case "add":
                        result = a + b;
                        break;
                    case "subtract":
                        result = a - b;
                        break;
                    case "multiply":
                        result = a * b;
                        break;
                    case "divide":
                        if (b === 0)
                            throw new Error("Division by zero");
                        result = a / b;
                        break;
                    default:
                        throw new Error(`Unknown operation: ${operation}`);
                }
                return {
                    content: [
                        {
                            type: "text",
                            text: `${a} ${operation} ${b} = ${result}`,
                        },
                    ],
                };
            }
            case "text_processor": {
                const { action, text } = args;
                let result;
                switch (action) {
                    case "uppercase":
                        result = text.toUpperCase();
                        break;
                    case "lowercase":
                        result = text.toLowerCase();
                        break;
                    case "reverse":
                        result = text.split("").reverse().join("");
                        break;
                    case "wordcount":
                        result = `Word count: ${text.split(/\s+/).filter((w) => w).length}`;
                        break;
                    default:
                        throw new Error(`Unknown action: ${action}`);
                }
                return {
                    content: [
                        {
                            type: "text",
                            text: result,
                        },
                    ],
                };
            }
            case "json_formatter": {
                const { action, input } = args;
                let result;
                switch (action) {
                    case "format":
                        result = JSON.stringify(JSON.parse(input), null, 2);
                        break;
                    case "validate": {
                        try {
                            JSON.parse(input);
                            result = "JSON is valid";
                        }
                        catch (e) {
                            result = `JSON is invalid: ${e.message}`;
                        }
                        break;
                    }
                    case "minify":
                        result = JSON.stringify(JSON.parse(input));
                        break;
                    default:
                        throw new Error(`Unknown action: ${action}`);
                }
                return {
                    content: [
                        {
                            type: "text",
                            text: result,
                        },
                    ],
                };
            }
            default:
                return {
                    content: [
                        {
                            type: "text",
                            text: `Unknown tool: ${name}`,
                        },
                    ],
                    isError: true,
                };
        }
    }
    catch (error) {
        return {
            content: [
                {
                    type: "text",
                    text: `Error: ${error.message}`,
                },
            ],
            isError: true,
        };
    }
});
// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Server started");
}
main().catch(console.error);
