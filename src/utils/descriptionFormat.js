export const descriptionFormat = (description) => {
 const descriptionLength = description.length;
 if (descriptionLength > 100) {
  return `${description.slice(0, 100)}...`;
 }
 return description;
}