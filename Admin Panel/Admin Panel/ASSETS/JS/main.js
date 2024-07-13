$(document).ready(function(){
  $(".toggle").click(function(){
    $(".header").toggleClass("newheader");
    $(".sidebar").toggleClass("newsidebar");
    $(".content").toggleClass("newcontent");
 })
});