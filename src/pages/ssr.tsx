import { fetchCatData } from "@/api/catFactsApi";
import { CatFact } from "@/types/catfact-types";
import { GetServerSideProps } from "next";

interface CatFactProps {
  cat: CatFact;
}

export const getServerSideProps: GetServerSideProps<
  CatFactProps
> = async () => {
  try {
    const catFact = await fetchCatData();
    return {
      props: {
        cat: catFact,
      },
    };
  } catch (error) {
    return {
      props: { cat: { fact: "failed to fetchCatData", length: 0 } },
    };
  }
};

export default function ssr({ cat }: CatFactProps) {
  return (
    <div className="flex flex-row">
      <h1>SSR</h1>
      <h2>FACT</h2>
      <a>{cat.fact}</a>
      <h2>LENGTH</h2>
      <a> {cat.length}</a>
    </div>
  );
}
