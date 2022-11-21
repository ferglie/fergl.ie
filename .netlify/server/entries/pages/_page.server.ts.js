const API_URL = "http://localhost:5173";
async function load() {
  console.log("+page", "load");
  const response = await fetch(`${API_URL}/api/visit`);
  const r = await response.json();
  console.log("+page", "count", r.body.count);
  return {
    count: r.body.count
  };
}
export {
  load
};
