import Link from "next/link";
import React from "react";

type BreadCrumpPropsType = {
  route: string;
};

// Map paths to display names
const pathNameMap: Record<string, string> = {
  "product": "فروشگاه",
};

function BreadCrump({ route }: BreadCrumpPropsType) {
  // Split the route into parts
  const segments = route.split("/").filter(Boolean);

  // Construct breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    const name = pathNameMap[segment] || decodeURIComponent(segment); // Use mapping or default to the segment
    return { name, path };
  });

  return (
    <ol className="flex items-center whitespace-nowrap px-12 mt-8 mobile:px-4 desktop:mt-0">
      {/* Home Link */}
      <li className="inline-flex items-center">
        <Link
          className="flex items-center text-xs text-zinc-500/70 hover:text-gray-500"
          href="/"
        >
          صفحه اصلی
        </Link>
        {segments.length > 0 && (
          <svg
            className="shrink-0 mx-2 size-4 text-zinc-500/70 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        )}
      </li>

      {/* Dynamic Breadcrumb Links */}
      {breadcrumbItems.map((item, index) => (
        <li key={item.path} className="inline-flex items-center">
          {index !== breadcrumbItems.length - 1 ? (
            <>
              <Link
                className="flex items-center text-xs text-zinc-500/70 hover:text-gray-500"
                href={item.path}
              >
                {item.name}
              </Link>
              <svg
                className="shrink-0 mx-2 size-4 text-zinc-500/70 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </>
          ) : (
            // Non-clickable last breadcrumb
            <span
              className="inline-flex items-center text-xs font-semibold text-zinc-500/70 truncate"
              aria-current="page"
            >
              {item.name}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default BreadCrump;
