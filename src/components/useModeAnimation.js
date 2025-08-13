import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const isBrowser = typeof window !== 'undefined';

const injectBaseStyles = (styleId) => {
  if (isBrowser && !document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .dark {
        background-color: #1a1a1a;
        color: #ffffff;
        transition: background-color 750ms ease-in-out, color 750ms ease-in-out;
      }
      .light {
        background-color: #ffffff;
        color: #000000;
        transition: background-color 750ms ease-in-out, color 750ms ease-in-out;
      }
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
      }
      body {
        transition: background-color 750ms ease-in-out;
      }
      .theme-pulse::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
  }
};

export const ThemeAnimationType = {
  CIRCLE: 'circle',
  BLUR_CIRCLE: 'blur-circle',
};

export const useModeAnimation = ({
  duration = 750,
  easing = 'ease-in-out',
  pseudoElement = '::view-transition-new(root)',
  globalClassName = 'dark',
  animationType = ThemeAnimationType.CIRCLE,
  blurAmount = 2,
  styleId = 'theme-switch-style',
  isDarkMode: externalDarkMode,
  onDarkModeChange,
} = {}) => {
  const [internalDarkMode, setInternalDarkMode] = useState(
    isBrowser ? localStorage.getItem('theme') === 'dark' : false
  );

  const isDarkMode = externalDarkMode ?? internalDarkMode;
  const setIsDarkMode = (value) => {
    const newValue = typeof value === 'function' ? value(isDarkMode) : value;
    if (onDarkModeChange) {
      onDarkModeChange(newValue);
    } else {
      setInternalDarkMode(newValue);
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    injectBaseStyles(styleId);
  }, [styleId]);

  const toggleSwitchTheme = async () => {
    if (!ref.current) {
      setIsDarkMode(!isDarkMode);
      return;
    }

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    // Apply pulse effect
    const pulseElement = document.createElement('div');
    pulseElement.className = 'theme-pulse';
    document.body.appendChild(pulseElement);

    // Fallback to CSS animation if View Transitions API is not supported
    if (!document.startViewTransition) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId + '-animation';
      styleElement.textContent = `
        .theme-transition {
          transition: background-color ${duration}ms ${easing}, color ${duration}ms ${easing};
        }
        body {
          transition: background-color ${duration}ms ${easing};
        }
        .theme-pulse::before {
          content: '';
          position: fixed;
          top: ${y}px;
          left: ${x}px;
          width: 0;
          height: 0;
          background: radial-gradient(circle, ${isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}, transparent);
          transform: translate(-50%, -50%);
          animation: pulse-expand ${duration}ms ${easing} forwards;
          opacity: 1;
        }
        @keyframes pulse-expand {
          to {
            width: ${Math.max(window.innerWidth, window.innerHeight) * 2}px;
            height: ${Math.max(window.innerWidth, window.innerHeight) * 2}px;
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(styleElement);

      document.body.classList.add('theme-transition');
      setIsDarkMode(!isDarkMode);

      setTimeout(() => {
        document.head.removeChild(styleElement);
        document.body.classList.remove('theme-transition');
        document.body.removeChild(pulseElement);
      }, duration);
      return;
    }

    // View Transitions API implementation
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = `
      ::view-transition-group(root) {
        animation-duration: ${duration}ms;
        animation-timing-function: ${easing};
      }
      ${pseudoElement} {
        clip-path: circle(0px at ${x}px ${y}px);
        animation: circle-expand ${duration}ms ${easing} forwards;
        background-color: ${isDarkMode ? '#ffffff' : '#1a1a1a'};
      }
      @keyframes circle-expand {
        to {
          clip-path: circle(${maxRadius}px at ${x}px ${y}px);
        }
      }
      body {
        transition: background-color ${duration}ms ${easing};
      }
      .theme-pulse::before {
        content: '';
        position: fixed;
        top: ${y}px;
        left: ${x}px;
        width: 0;
        height: 0;
        background: radial-gradient(circle, ${isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}, transparent);
        transform: translate(-50%, -50%);
        animation: pulse-expand ${duration}ms ${easing} forwards;
        opacity: 1;
      }
      @keyframes pulse-expand {
        to {
          width: ${Math.max(window.innerWidth, window.innerHeight) * 2}px;
          height: ${Math.max(window.innerWidth, window.innerHeight) * 2}px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleElement);

    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(!isDarkMode);
      });
    }).ready;

    setTimeout(() => {
      styleElement.remove();
      document.body.removeChild(pulseElement);
    }, duration);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(globalClassName);
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = '#1a1a1a';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove(globalClassName);
      document.documentElement.classList.add('light');
      document.body.style.backgroundColor = '#ffffff';
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, globalClassName]);

  return {
    ref,
    toggleSwitchTheme,
    isDarkMode,
  };
};