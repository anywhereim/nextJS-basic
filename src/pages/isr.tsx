import { fetchCatData } from "@/api/catFactsApi";
import { CatFact } from "@/types/catfact-types";
import { GetStaticProps } from "next";

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
      revalidate: 10,
      //revalidate 키워드를 이용해 업데이트 시간을 설정할 수 있다.
    };
  } catch (error) {
    return {
      props: { cat: { fact: "failed to fetchCatData", length: 0 } },
    };
  }
};

export default function isr({ cat }: CatFactProps) {
  return (
    <div className="flex flex-row">
      <h1>ISR</h1>
      <h2>FACT</h2>
      <a>{cat.fact}</a>
      <h2>LENGTH</h2>
      <a> {cat.length}</a>
    </div>
  );
}
