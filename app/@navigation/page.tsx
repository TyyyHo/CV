import Link from "next/link";

const list = Object.freeze([
  {
    id: 0,
    name: "Home",
    path: "/",
  },
  {
    id: 1,
    name: "profile",
    path: "/profile",
  },
  {
    id: 2,
    name: "Contact",
    path: "/contact",
  },
]);

export default function Page() {
  return (
    <div>
      {list.map((item) => (
        <Link key={item.id} href={item.path}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
