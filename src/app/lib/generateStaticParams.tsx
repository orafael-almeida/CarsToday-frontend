import axios from 'axios';

export async function generateStaticParams() {
  const currentYear = new Date().getFullYear();
  const startYear = 2015;
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const url = process.env.NEXT_PUBLIC_VEHICLES_MAKES_API || ""
  const response = await axios.get(url);
  const makes = response.data.Results;

  const params = makes.flatMap((make: { MakeId: number }) =>
    years.map((year) => ({
      params: {
        makeId: make.MakeId.toString(),
        year: year.toString(),
      },
    }))
  );

  return params;
}
