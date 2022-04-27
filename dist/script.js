const getAnswer = (data) => {
  const q = data.d.i.q;
  let answer = [];
  let isTableQuestion = false;
  if (data.d.i.ii) {
    isTableQuestion = data.d.i.ii.indexOf("Complete the table.") != -1;
  }
  q.forEach((el1) => {
    el1.al.forEach((el2) => {
      // Câu hỏi dạng kéo thả 2 cột
      if (isTableQuestion) {
        el2.a.forEach((item) => answer.push(item.txt));
        return;
      }

      if (el2.a.length > 1) {
        // Câu hỏi dạng chọn nhiều đáp án, kéo thả, điền  nhiều chữ
        const tmp = el2.a.filter((item) => item.c == "1");
        if (tmp.length) tmp.forEach((item) => answer.push(item.txt));
        else answer.push(el2.a[1].txt);
        return;
      }

      // Câu hỏi dạng chọn đáp án, điền chữ
      answer.push(el2.a[0].txt + " id = " + el2.id);
    });
  });
  let output = String(answer);
  output = output.split(",").join("\n");
  alert(output);
};

const getAnswerURL = (url) => {
  const change = [
    {
      old: "viewMode=2",
      new: "viewMode=46",
    },
    {
      old: "inTest=true",
      new: "inTest=false",
    },
  ];
  let awsURL = url;
  change.forEach((item) => (awsURL = awsURL.replace(item.old, item.new)));
  return awsURL;
};

$.ajaxSetup({
  complete: function () {
    const url = getAnswerURL(this.url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => getAnswer(data))
      .catch((e) => console.log(e));
  },
});
