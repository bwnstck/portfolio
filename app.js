$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$(function () {
  $('[data-toggle="popover"]').popover();
});
$(".popover-dismiss").popover({
  trigger: "focus",
});

// GSAP
const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from("h1", { opacity: 0, duration: 1, y: -150 })
  .from("p.lead", { opacity: 0, duration: 1, y: -150 })
  .from(".navbar-brand", {
    opacity: 0,
    duration: 1,
    x: -50,
  });
