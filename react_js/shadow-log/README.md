# Shadow-Log

Shadow-Log — personal self-observation.  
A minimal daily log system focused on awareness, not noise.

---

## Features

- Select mood with intensity  
- Enter main task and subtasks  
- Review execution (completion, time spent, reason)  
- Data persists using `localStorage`  
- Responsive layout (desktop & mobile)

---

## Tech Stack

- React 18 (Vite)
- CSS
- LocalStorage (no backend)

---

## Project Structure

shadow-log/
│
├─ src/
│  ├─ components/
│  │  ├─ Analytics.jsx
│  │  ├─ Home.jsx
│  │  ├─ Navbar.jsx
│  |  └─ utils/
│  │     ├─ getLogs.js
│  │     ├─ getIntensity.js
│  │     ├─ generateMonthHeatmapGrid.js
│  │     └─ mapLogsToDates.js
│  |
│  │
│  ├─ context/
│  │  └─ ShadowLogContext.jsx
│  │
│  ├─ sub_components/
│  │  ├─ Intensity.jsx
|  |  ├─ EmotionSelector.jsx
│  │  ├─ TaskEntry.jsx
│  │  └─ ExecutionReview.jsx
│  │
│  ├─ stylings/
│  │  ├─ analytics.css
│  │  ├─ home.css
│  │  ├─ navbar.css
│  │  ├─ emotionSelector.css
│  │  ├─ taskEntry.css
│  │  ├─ executionReview.css
│  │  └─ intensity.css
│  │
│  ├─ App.jsx
|  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
│
├─ index.html
├─ package.json
├─ README.md
└─ vite.config.js


---

## upcoming/resolve
- one entry per day
- task entry placeholder correction 

---

## Console Output

On successful startup, Vite will show:

VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
