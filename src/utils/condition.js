export function condition(condition) {
  let icon;
  
  switch (condition) {
    case 'storm':
      icon = {
        name: 'rainy-outline',
        color: '#1ec9ff'
      }
      break;
    case 'clear_day':
      icon = {
        name: 'partly-sunny-outline',
        color: '#FFB300'
      }
      break;
    case 'rain':
      icon = {
        name: 'rainy-outline',
        color: '#1ec9ff'
      }
      break;
    default:
      icon = {
        name: 'cloud-outline',
        color: '#1ec9ff'
      }
      break;
  }

  return icon;
}