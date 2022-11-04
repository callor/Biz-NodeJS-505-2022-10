/**
 * table 에 click event 가 발생하면
 * 실제 선택된 td(target) 정보를 가져와서
 * td 에 설정된 dataset.st_num 로 부터 학번을 getter 하고
 * 학번을 가지고 서버에 detail 요청을 하는 코드
 * 문제점
 * 학생정보의 td 가 여러개가 있는데 어떤 td를 클릭해도
 * 같은 코드가 실행되도록 하려면
 * 모든 td 에 dataset 을 설정해야 한다
 * 즉, 같은 코드가 중복되는 현상이 발생한다
 */
const tdClickHandlerV1 = (tag) => {
  const target = tag.target;
  if (target.tagName === "TD") {
    // tag 의 data-st_num 로 설정된 항목의 값을
    // 가져오는 코드
    const st_num = target.dataset.st_num;

    // alert(`클릭된 TD, ${st_num}`);
    document.location.href = `/student/detail/${st_num}`;
  }
};
const tdClickHandlerV2 = (tag) => {
  const target = tag.target; // TD 요소 getter
  // 선택된 td 를 감싸고 있는 tr tag 요소를 다시 getter
  const parentTR = target.closest("TR");
  // tr 에 설정된 data-st_num 값 getter
  const st_num = parentTR.dataset.st_num;
  // alert(st_num);
  document.location.href = `/student/${st_num}/detail`;
};

document.addEventListener("DOMContentLoaded", () => {
  const stTable = document.querySelector("table.student.list");
  /*
    이벤트 버블링을 이용한 event handling 의 간소화
    원하는 것은 학생정보List 중에서 한 학생의 row 를 클릭했을때
    반응하는 event 를 만들고자 한다
    이때 각 row 들에게 event 를 부여하면 너무 많은 event 설정이 
    생성된다. 많은 비용이 소요된다
    그래서 row 들을 감싸고 있는 한개의 box 를 지정하여
    그 box 에 event 핸들링을 설정하고
    이벤트 버블링을 활용하여 어떤 row 가 클릭되었는지를
    알아내서 연산을 수행할 것이다
    */
  stTable?.addEventListener("click", tdClickHandlerV2);
});
