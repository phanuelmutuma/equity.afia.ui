const mutationPutFetcher = async (
  url: string,
  { arg }: { arg: { data: any } }
) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(arg),
  });
  const result = await res.json();
  return result;
};

export default mutationPutFetcher;
