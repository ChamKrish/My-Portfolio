// Utility function to scroll to an element by ID
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.history.pushState(null, '', `#${elementId}`);
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  } else {
    console.warn(`Element with id "${elementId}" not found`);
  }
};

export const openGoogleDriveDocument = (fileId: string) => {
  const url = `https://drive.google.com/file/d/${fileId}/view`
  window.open(url, '_blank')
}