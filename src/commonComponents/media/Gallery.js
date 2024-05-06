import { useState, useEffect } from "react";
import ImagewithPreview from "./ImagewithPreview";

export default function Gallery({ images, itemsPerPage }) {
  const [filter, setFilter] = useState("all");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories from images when component mounts
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(images.map((image) => image.category)),
    ];
    setCategories(["all", ...uniqueCategories]); // Include 'all' category and unique categories
  }, [images]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

  // Get current page of images
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = filteredImages.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const activePageStyle = { background: "var(--primary)" };

  return (
    <div>
      {/* Filter buttons */}
      <div className="d-flex justify-content-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleFilterChange(category)}
            className="d-flex py-2 px-4"
            style={{ border: "none" }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
            {/* Capitalize first letter of category */}
          </button>
        ))}
      </div>

      {/* Gallery images */}
      <div className="d-flex justify-content-center align-items-start flex-row flex-wrap py-4 gap-2">
        {currentImages.map((image, index) => (
          <ImagewithPreview key={index} src={image.url} height={200} />
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === currentPage ? "paginationActive" : ""}
              style={{
                border: "none",
                width: 24,
                height: 24,
                borderRadius: 100,
              
              }}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
}
