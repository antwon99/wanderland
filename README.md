# Wanderland: The GeoJSON Land Finder

**Find land not for comfort — but for sovereignty.**\
No realtors. No granite countertops. Just maps. This tool lets you explore land in Canada by stacking and filtering raw geographic data in real time.

---

## What It Does (In Plain English)

1. You (the dev) **gather public GeoJSON datasets**: rivers, lakes, mineral deposits, tax zones, zoning maps—whatever you can find.

2. Wanderland loads **all the GeoJSONs** and overlays them on a single interactive map of Canada.

3. Users apply **filters** ("show me places near water," "exclude high-tax zones," etc.).

4. The map updates in real time to display only the regions that match. That's it.

No ETL pipelines. No fancy AI. Just clean maps, simple filters, and transparent data.

---

## Key Principles

- **GeoJSON In, GeoJSON Out**: Every dataset is stored as a GeoJSON. The entire project runs on this single, universal format.
- **Overlay-First UI**: The map *is* the interface. Filters change the visual layers.
- **Real-Time Filtering**: Users interact with filters, not data files.
- **No Data Cleaning at Runtime**: All data should be pre-cleaned into valid GeoJSONs before use.

---

## Tech Stack

| Area      | Tool                                        |
| --------- | ------------------------------------------- |
| Backend   | Python (optional for scoring)               |
| Frontend  | React + MapboxGL or Leaflet                 |
| Data      | GeoJSON files (any source)                  |
| Dev Tools | Prettier, ESLint, GitHub Actions (optional) |

---

## How To Use (For Developers)

### 1. Gather Datasets

- Download any public GeoJSON datasets relevant to land selection (hydrography, minerals, taxes, etc.).
- Save them into `/data/geojson/`

### 2. Run the App

- The app automatically loads **all GeoJSONs** in `/data/geojson/`
- Filters are applied live to these datasets.

### 3. Add Filters (Optional)

- Each filter is just a simple rule: e.g., "exclude where property X > Y".
- Filters can stack: multiple criteria can be combined.

---

## Example Filters (Human-Readable)

- Near freshwater bodies
- Outside of mining claims
- In low-tax zones
- Inside firearm-friendly regions

All of these are driven by simple GeoJSON properties.

---

## Project Structure (Simplified)

```
wanderland/
├── data/
│   └── geojson/       # All datasets live here (pre-converted to GeoJSON)
├── src/
│   └── filters/       # Filtering functions
├── public/
│   └── index.html     # Interactive map
└── README.md
```

---

## MVP Goal

-

---

## Contributing

Want to help map freedom?

- Fork the repo
- Stick to GeoJSONs
- Submit small, modular pull requests

---

## Disclaimer

This is not legal, investment, or survival advice. It’s just a map. Validate everything independently.

---

## Built By

**Anthony**

A Canadian who just wants to know where he can breathe free.

