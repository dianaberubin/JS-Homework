// 1. If the color is yellow, pink or orange return from the function “light color”.
// 2. If the color is blue, purple, brown return from the function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive

let color = 'bl8ue';

switch(color) {
    case 'yellow' || 'pink' || 'orange':
      console.log('Light Color');
      break;
    case 'blue' || 'purple' || 'brown':
        console.log('Dark Color');
      break;
    default:
        console.log('Unknown Color');
  }