import PageTitle from "@/utility/PageTitle";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Breadcums = ({ pageName }: any) => {
  return (
    <>
      <div className="w-full h-96 bg-slate-50 relative">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="py-40">
              <h1 className="text-3xl font-bold text-gray-900">
                <PageTitle pagetitle={pageName} />
              </h1>

              <div className="flex items-center space-x-2 mt-4">
                <Link href={"/"} className="text-gray-900 hover:text-teal-600">
                  Home
                </Link>
                <span className="text-gray-900">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="bg-transparent text-sm"
                  />
                </span>
                <span className="text-green-500">
                  {pageName === "Team"
                    ? "Team"
                    : pageName === "Testimonials"
                    ? "Testimonials"
                    : pageName === "Service"
                    ? "Service"
                    : pageName === "Projects"
                    ? "Projects"
                    : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-40 right-0 opacity-40 blur-md bg-emerald-100 h-96 w-40 rounded-l-full"></div>
    </>
  );
};

export default Breadcums;