import { createContext, useContext, useState } from "react";

const ShadowLogContext = createContext();

export function ShadowLogProvider({ children }) {
  const [step, setStep] = useState("idle");

  const [mood, setMood] = useState(null);
  const [task, setTask] = useState(null);
  const [review, setReview] = useState(null);

  const resetDay = () => {
    setMood(null);
    setTask(null);
    setReview(null);
    setStep("idle");
  };

  return (
    <ShadowLogContext.Provider
      value={{
        step,
        setStep,
        mood,
        setMood,
        task,
        setTask,
        review,
        setReview,
        resetDay,
      }}
    >
      {children}
    </ShadowLogContext.Provider>
  );
}

export const useShadowLog = () => useContext(ShadowLogContext);
