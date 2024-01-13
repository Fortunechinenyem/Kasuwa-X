export const fetchData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it where fetchData is called
  }
};
