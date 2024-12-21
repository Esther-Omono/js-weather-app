export function updateTheme(description) {
    if (!description) {
      console.error('No weather description provided for theming!');
      return;
    }
    
    const normalizedDescription = description.toLowerCase();
    let background;
  
    if (normalizedDescription.includes('clear')) {
      background = 'linear-gradient(135deg, #6dd5ed, #2193b0)'; // Sunny
    } else if (normalizedDescription.includes('cloud')) {
      background = 'linear-gradient(135deg, gray, #bbbbbb)'; // Cloudy
    } else if (normalizedDescription.includes('rain')) {
      background = 'linear-gradient(135deg, #005c97, #363795)'; // Rainy
    } else if (normalizedDescription.includes('snow')) {
      background = 'linear-gradient(135deg, #83a4d4, #b6fbff)'; // Snowy
    } else {
      background = 'linear-gradient(135deg, #ff7e5f, #feb47b)'; // Default
    }
  
    document.body.style.background = background;
}
  