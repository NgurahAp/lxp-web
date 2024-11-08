// Breadcrumb.tsx
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string | undefined;
  path?: string | undefined;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div
      className={`bg-white w-full h-14 flex items-center pl-5 rounded-xl `}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index === 0 && (
            <img
              src="/pelatihanku/home.png"
              className="md:w-6 w-5 -mt-1"
              alt="Home"
            />
          )}
          {item.path ? (
            <Link to={item.path} className="flex items-center">
              <span
                className={`${
                  index === 0 ? "md:pl-5 pl-3" : ""
                } text-blue-500 md:text-base text-sm font-semibold`}
              >
                {item.label}
              </span>
            </Link>
          ) : (
            <span
              className={`${
                index === 0 ? "md:pl-5 pl-3" : ""
              } text-gray-400 md:text-base text-sm font-semibold`}
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <FaChevronRight className="text-gray-300 mx-4" />
          )}
        </div>
      ))}
    </div>
  );
};