import { useEffect, useState } from "react";

export interface AudioAnalysis {
  frequency: number; // 0-255
  amplitude: number; // 0-1
  isActive: boolean;
}

/**
 * Analyzes real-time microphone input
 * Requires user permission to access microphone
 */
export function useAudioInput(): AudioAnalysis {
  const [audioAnalysis, setAudioAnalysis] = useState<AudioAnalysis>({
    frequency: 0,
    amplitude: 0,
    isActive: false,
  });

  useEffect(() => {
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let dataArray: Uint8Array | null = null;
    let animationId: number | null = null;

    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        dataArray = new Uint8Array(analyser.frequencyBinCount);

        const analyze = () => {
          analyser!.getByteFrequencyData(dataArray!);

          const average =
            dataArray!.reduce((a, b) => a + b) / dataArray!.length;
          const max = Math.max(...dataArray!);

          setAudioAnalysis({
            frequency: max,
            amplitude: average / 255,
            isActive: average > 10,
          });

          animationId = requestAnimationFrame(analyze);
        };

        analyze();
      } catch (error) {
        console.error("Microphone access denied:", error);
      }
    };

    // Uncomment to enable audio input
    // initAudio();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (audioContext) audioContext.close();
    };
  }, []);

  return audioAnalysis;
}
