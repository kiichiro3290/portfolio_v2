import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  const user = {
    name: "kai",
    age: "23",
  };
  return json({ user });
};

export default function Article() {
  const { user } = useLoaderData<typeof loader>();
  return <div>{user.name}</div>;
}
