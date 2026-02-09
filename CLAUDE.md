# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Express-based server for hosting GraphAI agents. Provides HTTP endpoints for running GraphAI agents remotely.

## Commands

```bash
yarn lint       # Run ESLint on src/
yarn format     # Format with Prettier
yarn server     # Start the agent server (ts-node)
```

## Architecture

- `src/index.ts` - Express server entry point
- `src/config.ts` - Server configuration
- `src/sample_agent.ts` - Sample agent implementation
- `tests/` - Test clients
