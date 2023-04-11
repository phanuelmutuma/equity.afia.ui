const mutationDeleteFetcher = async (
  url: string,
  { arg }: { arg: { data: any } }
) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(arg),
  });
  const result = await res.json();
  return result;
};

export default mutationDeleteFetcher;
