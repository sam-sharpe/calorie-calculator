$("body").on("keydown", ".fruit input", function(e){
  const current_input = e.target;
  const $current_input = $(e.target);

  let calories = $current_input.data("calories");

  calories = parseInt(calories);

  let user_count = $current_input.val();

  user_count = parseFloat(user_count);

  const answer = user_count * calories;

  console.log(answer);
});
