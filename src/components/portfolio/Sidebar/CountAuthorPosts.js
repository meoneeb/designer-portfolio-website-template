import { portfolioArr } from "@/database/portfolio"; // Import the portfolioArr array

export default function CountAuthorPosts(author) {
  // Filter the portfolioArr to find objects with the same Author value
  const objectsWithSameAuthor = portfolioArr.filter(item => item.Author.Name === author);
  
  // Return the count of objects with the same Author value
  return objectsWithSameAuthor.length;
}
