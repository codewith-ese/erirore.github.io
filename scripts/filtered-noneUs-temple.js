export function filterByLocation(imageData, location) {
    return imageData.filter((image) => image.location === location);
  }