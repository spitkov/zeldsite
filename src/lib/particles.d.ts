declare module 'particles.js' {
  const content: any;
  export default content;
}

interface Window {
  particlesJS: (id: string, config: any) => void;
} 