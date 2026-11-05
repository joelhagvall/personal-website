# Projects by Joel Hägvall

> Personal and academic projects: web apps, mobile apps and open-source work.

## Jarvis Panel

A 7-inch touch screen in my bookshelf with its own voice assistant. Say "Hey Jarvis" and it books the laundry room, adds events to my iCloud calendar and plays music, and at a glance it shows the metro, the weather and what is going on at home.

- Status: Runs at home daily · Code on request
- Technologies: ESP32-P4, C++, ESPHome, LVGL, Python, Home Assistant, Claude, Raspberry Pi

**Problem:** I wanted a screen at home as fast and responsive as the one in a Tesla, that I can talk to, without a Big Tech speaker or trackers. Neither the laundry booking site nor my gym has an open API, and no product on sale did what I wanted.

**Built:** I built the firmware for an ESP32-P4 board in C++ with ESPHome and LVGL, a Home Assistant integration, and a Python server on a Raspberry Pi 5 where a Claude agent answers with tools for the calendar, the laundry room, SL, the weather and Spotify. The wake word runs locally on the screen, and the server has no ports open to the internet.

## Data Wipe Mailer

A privacy-focused web app that helps Swedish citizens send General Data Protection Regulation (GDPR) Article 17 deletion requests.

- Technologies: TypeScript, Next.js, Tailwind CSS, shadcn/ui
- Source: https://github.com/joelhagvall/data-wipe-mailer

**Problem:** Requesting deletion from several data brokers requires finding each process and writing repetitive requests.

**Built:** I built a client-side Next.js app that prepares each request without sending personal data to a server.

## Under Stockholm

The whole Stockholm metro in the browser: walk the platforms and ride the trains through all 100 stations.

- Status: Live · Open source
- Technologies: TypeScript, three.js, Rapier, WebGL, Vite, Bun
- Source: https://github.com/joelhagvall/under-stockholm

**Problem:** A metro you can explore in the browser needs to feel like the real one, stay shared between visitors, and still load fast on a phone.

**Built:** I built it with TypeScript, three.js and Rapier and no game engine. Stations, textures and sounds are generated, and trains follow a shared timetable or SL's live metro data.

## Maskera

Local redaction of Swedish personally identifiable information for browser, Node.js, edge, and AI workflows.

- Status: Live · Open source
- Technologies: TypeScript, ONNX, Transformers.js, WebGPU, Hugging Face, PyTorch
- Source: https://github.com/joelhagvall/maskera

**Problem:** Teams risk sending names, Swedish personal identity numbers, and addresses to LLMs, logs, and analytics.

**Built:** I combined deterministic rules with an approximately 43 MB quantized ONNX model that runs locally through Transformers.js with WebGPU or WASM.

## ResiliaAI

An AI-powered resilience and crisis preparedness platform for housing associations and organizations.

- Status: Part-time, pre-launch venture
- Technologies: React, TypeScript, TanStack, Supabase, PostgreSQL, Vercel AI SDK, OpenRouter, Berget AI, Hugging Face, RAG, AI Agents

**Problem:** A three-person venture needed one engineer to turn the product concept into a testable pre-launch platform.

**Built:** I own the React and TypeScript product, APIs, PostgreSQL data layer, and AI orchestration. I also own workflow automation, tests, continuous integration, delivery, and hosted development environments.

## J.A.R.V.I.S

A private macOS assistant that connects local AI with personal notes, tools, and everyday workflows.

- Technologies: SwiftUI, Ollama, MCP
- Source: https://github.com/joelhagvall/jarvis-chat

**Problem:** Personal notes and everyday tools live in separate apps. A cloud assistant would also expose private context.

**Built:** I built the app with SwiftUI, Ollama, and Model Context Protocol servers for iCloud Notes and Stockholm public transit.

## Tor Onion Site Scraper

A Python crawler and analysis pipeline developed for my bachelor thesis at Stockholm University.

- Technologies: Python, Tor, matplotlib, pandas, beautifulsoup
- Source: https://github.com/joelhagvall/tor-onion-site-scraper

**Problem:** The thesis needed repeatable data collection from cybercrime services hosted on Tor onion sites.

**Built:** I built a crawler that retrieves pages, extracts structured data, exports CSV files, and supports analysis with pandas and matplotlib.

## Carspotter

A student-built social app where car enthusiasts can log sightings, map cars, earn achievements, and browse profiles.

- Technologies: Flutter, Google Maps API, Plate Recognizer API, Firebase
- Source: https://github.com/joelhagvall/PVT15-Project

## Spotify Playlist Generator

A Python desktop app that creates randomized playlists through the Spotify API.

- Technologies: Python, PySimpleGUI, Spotify API
- Source: https://github.com/joelhagvall/spotify-random-playlist-generator

---

Part of [Joel Hägvall](https://joelhagvall.com/) · [All pages](https://joelhagvall.com/llms.txt) · Contact: work@joelhagvall.com
