document.addEventListener("DOMContentLoaded", () => {
  const btnInput = document.querySelector("button.today.input");
  btnInput?.addEventListener("click", () => {
    const todayInputs = document.querySelectorAll("input");
    console.log(todayInputs);

    /**
     * for of
     * ES6 에서 추가된 새로운 반복문
     * 기존에는 배열을 반복할때 다음의 코드를 사용했다
     *      for(let i =  0 ; i < 배열.length ; i++) : 코드가 다소 번거롭다
     *      배열.forEach() : 동기화 오류를 가끔범한다
     *
     * 다음 코드에서 결과는 1 + 2 + 3 + 4 + 5 가 출력될것으로 기대한다
     * 그런데 간혹 동기화 문제로 forEach() 완성되기 전에
     * console 출력이 먼저 실행되어 엉뚱한 결과를 내기도 한다
     * 이러한 문제를 동기화 문제라고 한다.
     * 동기화 문제를 일으키지 않도록 하기 위하여 전통적 for() 사용한다
     * 하지만 전통적 for()는 다소 코드가 번거롭다
     * const 배열 = [1,2,3,4,5]
     * let 합계 = 0
     * 배열.forEach( 요소=>{
     *      합계 += 요소
     * })
     * console.log(합계)
     *
     * 그래서 ES6 에서 탄생한 새로운 for() 명령문이다
     *      for(요소 of 배열) {}
     */
    for (let tag of todayInputs) {
      const value = tag.value;
      if (!value) {
        alert(`값을 입력해주세요\n"${tag.title}"`);
        tag.select(); // tag.focus() 를 포함한다
        return false;
      }
    } // end for

    // 유효성 검사가 끝나면 server 로 데이터를 전송하기
    document.querySelector("form.today").submit();
  });
});
