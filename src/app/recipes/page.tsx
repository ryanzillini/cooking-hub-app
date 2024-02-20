"use client";

import { use, useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(true);

  const onSubmit = (input: string) => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.body);
        console.log({ data: data, input: search });
      })

      .catch((err) => {
        <h1>Error: {err}</h1>;
      });

    return <h1>{recipe}</h1>;
  };

  return (
    <>
      {loading && (
        <>
          <input
            name="recipesearch"
            className="h-10 w-1/4 rounded-md border-2 p-2 "
            placeholder="Enter ingredients"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="border-2 bg-red-500 p-2 text-lg font-bold"
            onClick={() => {
              onSubmit(search);
              setLoading(false);
            }}
          >
            Submit
          </button>
        </>
      )}
      ,{!loading && <h1>{recipe}</h1>}
    </>
  );
}
