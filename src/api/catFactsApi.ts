export const fetchCatData = async () => {
  const res = await fetch("https://catfact.ninja/fact");

  if (!res) {
    throw new Error("failed to fetch data");
    // throw 키워드는 사용자 정의 예외를 발생시킬 때 사용
    //  throw로 예외를 발생시키면, 실행 흐름은 즉시 현재의 함수 실행을 멈추고,
    // 가장 가까운 catch블록으로 이동하는데
    //catch블록이 없다면 에러메시지와 함께 종료된다.
  }
  return res.json();
};
