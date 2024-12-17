import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { generateStaticParams as fetchStaticParams } from "@/app/lib/generateStaticParams";
import Spinner from "@/app/components/Spinner";

const CarsTable = dynamic(() => import("@/app/components/CarsTable"), {
  suspense: true,
});

type PageProps = {
  params: {
    makeId: string;
    year: string;
  };
};

type StaticParam = {
  params: {
    makeId: string;
    year: string;
  };
};

export async function generateStaticParams() {
  const params: StaticParam[] = await fetchStaticParams();
  return params.map(({ params }) => ({
    makeId: params.makeId,
    year: params.year,
  }));
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { makeId, year } = params;

  return (
    <div className="flex flex-col justify-center pt-32">
      <Suspense fallback={<Spinner />}>
        <CarsTable makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
};

export default Page;
