import React from "react";
import { useState, useEffect } from "react";
export function useSearch(initial, query) {
  const [filter, setFilter] = useState(initial);

  useEffect(() => {
    const matched = initial.filter((movie) =>
      movie.title.toLowerCase().replace(/\s+/g, "").includes(query)
    );
    setFilter(matched);
  }, [query]);

  return filter;
}
