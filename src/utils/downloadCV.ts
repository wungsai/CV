/**
 * Triggers download of CV.pdf from public directory
 * Production-ready utility with proper error handling
 */
export const downloadCV = (): void => {
  try {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Wungsailor_Vangchay_CV.pdf';
    link.rel = 'noopener noreferrer';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to download CV:', error);
    // Fallback: open in new tab
    window.open('/CV.pdf', '_blank');
  }
};
