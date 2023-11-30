async function getFeauterProjectData() {
  const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
  const feauterProjectData = await res.json();
  return feauterProjectData;
}
import Image from "next/image";
import Link from "next/link";

const FeauterProject = async () => {
  const feauterProject = await getFeauterProjectData();
  return (
    <div className="bg-green-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-16">
          <div>
            <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
              Featured Project
            </h4>
            <p className="text-xl lg:text-3xl lg:w-2/5 font-semibold text-black leading-10 capitalize">
              We provide the Perfect Solution to your business growth
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="">
                <Image
                  src={feauterProject[0]["image"]}
                  width={603}
                  height={531}
                  alt=""
                  className="object-cover rounded"
                />
                <p className="text-sm text-[#2E3E5C] pt-5">
                  {feauterProject[0]["remark"]} - June 20, 2022
                </p>
                <h3 className="text-2xl font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                  <Link href={feauterProject[0]["live"]} target="_blank">
                    {feauterProject[0]["title"]}
                  </Link>
                </h3>
              </div>
              <div className="">
                <div className="flex flex-col lg:flex-row items-center gap-4 justify-around lg:mb-4">
                  <div>
                    <Image
                      className="object-cover rounded"
                      src={feauterProject[1]["image"]}
                      width={287}
                      height={188}
                      alt="Hero 1"
                      priority={true}
                    />
                    <p className="text-sm text-[#2E3E5C] pt-5">
                      {feauterProject[1]["remark"]} - June 20, 2022
                    </p>
                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                      <Link href={feauterProject[1]["live"]} target="_blank">
                        {feauterProject[1]["title"]}
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <Image
                      className="object-cover rounded"
                      src={feauterProject[2]["image"]}
                      width={287}
                      height={188}
                      alt="Hero 1"
                      priority={true}
                    />
                    <p className="text-sm text-[#2E3E5C] pt-5">
                      {feauterProject[2]["remark"]} - June 20, 2022
                    </p>
                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                      <Link href={feauterProject[3]["live"]} target="_blank">
                        {feauterProject[3]["title"]}
                      </Link>
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 justify-around pt-2 lg:p-0">
                  <div>
                    <Image
                      className="object-cover rounded"
                      src={feauterProject[3]["image"]}
                      width={287}
                      height={188}
                      alt="Hero 1"
                      priority={true}
                    />
                    <p className="text-sm text-[#2E3E5C] pt-5">
                      {feauterProject[3]["remark"]} - June 20, 2022
                    </p>
                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                      <Link href={feauterProject[3]["live"]} target="_blank">
                        {feauterProject[3]["title"]}
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <Image
                      className="object-cover rounded"
                      src={feauterProject[4]["image"]}
                      width={287}
                      height={188}
                      alt="Hero 1"
                      priority={true}
                    />
                    <p className="text-sm text-[#2E3E5C] pt-5">
                      {feauterProject[4]["remark"]} - June 20, 2022
                    </p>
                    <h3 className="text-base font-bold text-[#2E3E5C] pt-2 hover:text-teal-600 hover:underline">
                      <Link href={feauterProject[4]["live"]} target="_blank">
                        {feauterProject[4]["title"]}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeauterProject;