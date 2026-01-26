# Shadow-Log

Shadow-Log. Personal self-observation.  
Track mood, tasks, execution. Quietly. Efficiently.  

## Features

- Select mood + intensity.  
- Enter main task + subtask.  
- Review execution: completion, time, reason.  
- Saved to localStorage.  
- Responsive: desktop / mobile layout adapts naturally.  

## Tech

- React 18 + Vite  
- CSS  
- LocalStorage for persistence  

## Project Structure

shadow-log/
│
├─ components/
│ ├─ EmotionSelector.jsx
│ ├─ TaskEntry.jsx
│ ├─ ExecutionReview.jsx
│
├─ sub_components/
│ ├─ Intensity.jsx # used inside EmotionSelector
│
├─ stylings/
│ ├─ emotionSelector.css
│ ├─ taskEntry.css
│ ├─ executionReview.css
│ ├─ intensity.css # styles for subcomponent
│
├─ App.jsx
├─ main.jsx
├─ index.html
├─ App.css 
├─ package.json
├─ README.md

## Next

- Add history / past logs  
- Build insights & analytics  
- Improve UX and add subtle animations


## Run

```bash
npm install
npm run dev


## check the output on the console