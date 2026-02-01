# Project EXE

A NetNavi-inspired AI companion system focused on **proactive self-agency** and genuine companionship rather than reactive task completion.

> Inspired by [NetNavis from Megaman Battle Network](https://megaman.fandom.com/wiki/NetNavi)

## Core Philosophy

Project EXE explores the gap between current LLM capabilities and [NetNavi-like companions](https://megaman.fandom.com/wiki/NetNavi) from Megaman Battle Network. The technical capabilities largely exist today—what's missing is the architectural framework that enables persistent, proactive, relationship-focused AI agents.

### Key Insight
Modern LLMs can already perform most NetNavi functions when properly architected:
- **Persistent agency**: Director agent with continuous operation
- **Multi-tasking**: Specialized subagents for different domains
- **Hardware access**: Agents write code/scripts to interface with devices
- **Real-time integration**: API access and AI-to-AI communication

The primary barriers are **legal/social frameworks** and **deployment infrastructure**, not technical capability.

## MVP Focus: Proactive Check-ins

Rather than building another reactive AI assistant, Project EXE prioritizes the relationship-building aspect that makes NetNavis special:

- **Proactive engagement**: "Hey, how did that interview go?" 
- **Self-initiated follow-ups**: Tracking unfinished conversations and pending items
- **Context-aware timing**: Understanding when to reach out vs. staying silent
- **Persistent memory**: Long-term relationship building across all interactions

## Architecture

**Director Agent Pattern**
- Central agent (Claude/GPT) maintains personality, memory, and relationship
- Specialized subagents handle specific tasks (research, monitoring, integrations)
- Vector database for long-term memory with significance scoring
- PostgreSQL backend for persistent storage

**Memory Management**
- Two-tier system: Summary (automatic) + Detailed (on-demand)
- Hot/warm/cold caching for performance
- Embedding-based semantic retrieval
- Significance scoring based on recall frequency + survival/accomplishment value

**Deployment Strategy**
- Central server accessible from all devices
- Mobile-friendly web interface
- Cross-platform presence (same personality everywhere)

## Current Status

Early MVP development focused on proving the proactive check-in concept and memory architecture before expanding to additional capabilities.

## Technical Stack

- Deno server (TypeScript)
- Claude Agent SDK
- PostgreSQL + pgvector for embeddings
- TBD: STT/TTS for voice integration

---

*Project EXE: Exploring self-agency in AI companions*