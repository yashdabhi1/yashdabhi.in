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
      }
      .light {
        background-color: #ffffff;
        color: #000000;
      }
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
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

    // Fallback to CSS animation if View Transitions API is not supported
    if (!document.startViewTransition) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId + '-animation';
      styleElement.textContent = `
        .theme-transition {
          transition: background-color ${duration}ms ${easing}, color ${duration}ms ${easing};
        }
      `;
      document.head.appendChild(styleElement);

      setTimeout(() => {
        document.head.removeChild(styleElement);
      }, duration);

      setIsDarkMode(!isDarkMode);
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
      }
      @keyframes circle-expand {
        to {
          clip-path: circle(${maxRadius}px at ${x}px ${y}px);
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
    }, duration);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(globalClassName);
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove(globalClassName);
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, globalClassName]);

  return {
    ref,
    toggleSwitchTheme,
    isDarkMode,
  };
};