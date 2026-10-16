export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Star({ className = "" }: { className?: string }) {
  return <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 2v60M2 32h60M11 11l42 42M11 53l42-42" stroke="currentColor" strokeWidth="7" /></svg>;
}
