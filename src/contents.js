function confirmNavigation(e) {
    const target = e.target;
    const decodedHref = decodeURIComponent(target.href || '');
  
    const containsU2044 = /\u2044/.test(decodedHref);
    const containsU2215 = /\u2215/.test(decodedHref);
    const containsZipWithAt = /@.*\.zip/.test(decodedHref);
    const containsZipAlone = /(^|[^@])\.zip/.test(decodedHref);
    const containsMovWithAt = /@.*\.mov/.test(decodedHref);
    const containsMovAlone = /(^|[^@])\.mov/.test(decodedHref);
  
    const containsTextU2044 = /\u2044/.test(target.textContent);
    const containsTextU2215 = /\u2215/.test(target.textContent);
    const containsTextZipWithAt = /@.*\.zip/.test(target.textContent);
    const containsTextZipAlone = /(^|[^@])\.zip/.test(target.textContent);
    const containsTextMovWithAt = /@.*\.mov/.test(target.textContent);
    const containsTextMovAlone = /(^|[^@])\.mov/.test(target.textContent);
  
    const shouldConfirm =
      containsU2044 || containsU2215 || containsZipWithAt ||
      containsZipAlone || containsMovWithAt || containsMovAlone ||
      containsTextU2044 || containsTextU2215 || containsTextZipWithAt || 
      containsTextZipAlone || containsTextMovWithAt || containsTextMovAlone;
  
    if (shouldConfirm) {
      let message = '';
  
      if (containsU2044 || containsTextU2044) {
        message += `- This link${
          containsTextU2044 ? ' text' : ''
        } contains U+2044 (⁄)\n`;
      }
  
      if (containsU2215 || containsTextU2215) {
        message += `- This link${
          containsTextU2215 ? ' text' : ''
        } contains U+2215 (∕)\n`;
      }
  
      if (containsZipWithAt || containsTextZipWithAt) {
        message += `- This link${
          containsTextZipWithAt ? ' text' : ''
        } contains an @ operator followed by .zip\n`;
      } else if (containsZipAlone || containsTextZipAlone) {
        message += `- This link${
          containsTextZipAlone ? ' text' : ''
        } contains .zip\n`;
      }
  
      if (containsMovWithAt || containsTextMovWithAt) {
        message += `- This link${
          containsTextMovWithAt ? ' text' : ''
        } contains an @ operator followed by .mov\n`;
      } else if (containsMovAlone || containsTextMovAlone) {
        message += `- This link${
          containsTextMovAlone ? ' text' : ''
        } contains .mov\n`;
      }
  
      message += '\nAre you sure you would like to proceed?';
  
      if (!confirm(message)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }
  
  document.addEventListener('click', confirmNavigation, true);