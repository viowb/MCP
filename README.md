# MCP Server Tools

A Model Context Protocol (MCP) server with integrated tools for various operations.

## Features

- **Calculator Tool**: Basic arithmetic operations (add, subtract, multiply, divide)
- **Text Processor Tool**: Text transformations (uppercase, lowercase, reverse, wordcount)
- **JSON Formatter Tool**: JSON processing (format, validate, minify)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Watch mode:
```bash
npm run watch
```

## Building

```bash
npm run build
```

## Running

```bash
npm start
```

## Available Tools

### Calculator
Performs arithmetic operations.

**Parameters:**
- `operation`: "add" | "subtract" | "multiply" | "divide"
- `a`: number
- `b`: number

### Text Processor
Processes and transforms text.

**Parameters:**
- `action`: "uppercase" | "lowercase" | "reverse" | "wordcount"
- `text`: string to process

### JSON Formatter
Validates and formats JSON.

**Parameters:**
- `action`: "format" | "validate" | "minify"
- `input`: JSON string

## Architecture

- Built with TypeScript
- Uses MCP SDK for server implementation
- Stdio-based transport for communication
