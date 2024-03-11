import { fetchCatData } from "@/api/catFactsApi";
import { CatFact } from "@/types/catfact-types";
import { GetStaticProps } from "next";

// GetStaticProps 타입을 사용하면 typescript의 타입체킹 기능을 활용할 수 있다.

interface CatFactProps {
  cat: CatFact;
}

export const getStaticProps: GetStaticProps<CatFactProps> = async () => {
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

export default function ssg({ cat }: CatFactProps) {
  return (
    <div className="flex flex-row">
      <h1>SSG</h1>
      <h2>FACT</h2>
      <a>{cat.fact}</a>
      <h2>LENGTH</h2>
      <a> {cat.length}</a>
    </div>
  );
}
