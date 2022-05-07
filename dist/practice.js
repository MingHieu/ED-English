const url = "https://ed.engdis.com/WebApi/Progress/SetProgressPerTask";
const baseURL = "https://ed.engdis.com/EDOServices/PMService.svc/GetItem";
$.ajaxSetup({
  complete: function () {
    if (this.url.indexOf(baseURL) == -1) return;
    const params = new URLSearchParams(this.url);
    const ItemId = params.values().next().value;
    const CourseId = localStorage.getItem("TLcourseID");
    const data = {
      CourseId,
      ItemId,
    };
    $.ajax({
      url: url,
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      statusCode: {
        201: function () {
          $("#learning__nextItem").click();
        },
      },
    });
  },
});
