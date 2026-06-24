/**
 * Triggers download of CV.pdf from public directory
 * Production-ready utility with proper error handling
 */
const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
export const downloadCV = (): void => {
  try {
    const link = document.createElement('a');
    link.href = `${basePath}/CV.pdf`;
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
