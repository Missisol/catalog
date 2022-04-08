const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.theme-toggle__control');

function setupSwitcher() {
  const savedScheme = getSavedScheme();

  if (savedScheme !== null) {
    const currentRadio = document.querySelector(`.theme-toggle__control[value=${savedScheme}]`);
    currentRadio.checked = true;
  }

  [...switcherRadios].forEach((radio) => {
    radio.addEventListener('change', (event) => {
      toggleTheme(event.target.value);
    });
  });
}

function setupTheme() {
  const savedScheme = getSavedScheme();
  const systemScheme = getSystemScheme();

  if (savedScheme === null) return;

  if (savedScheme !== systemScheme) {
    toggleTheme(savedScheme);
  }
}

function toggleTheme(theme) {
  switchMedia(theme);

  if(theme === 'auto') {
    clearScheme();
  } else {
    setCurrentTheme(theme);
  }
}

function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme === 'auto') {
    lightMedia = '(prefers-color-scheme: light)';
    darkMedia = '(prefers-color-scheme: dark)';
  } else {
    lightMedia = (scheme === 'light') ? 'all' : 'not all';
    darkMedia = (scheme === 'dark') ? 'all' : 'not all';
  }

  [...lightStyles].forEach((link) => {
    link.media = lightMedia;
  });

  [...darkStyles].forEach((link) => {
    link.media = darkMedia;
  });
}

function getSystemScheme() {
  const darkScheme = darkSchemeMedia.matches;

  return darkScheme ? 'dark' : 'light';
}


function getSavedScheme() {
  return localStorage.getItem('color-scheme');
}


function clearScheme() {
  localStorage.removeItem('color-scheme');
}

//
function hasStoredTheme() {
  return localStorage.getItem('color-scheme');
}

function getCurrentTheme() {
  const storedTheme = localStorage.getItem('color-scheme')
  return storedTheme || 'auto'
}

function setCurrentTheme(theme) {
  localStorage.setItem('color-scheme', theme);
}


setupSwitcher();
setupTheme();
