document.querySelector('.accept-button').addEventListener('click', function() {
  alert('Vous avez accepté les cookies.');
});
document.querySelector('.refuse-button').addEventListener('click', function() {
  alert('Vous avez refusé les cookies.');
});
document.querySelector('.over-button').addEventListener('mouseover', function() {
  alert ('J’ai été survolé');
});
document.querySelector('.title-button').addEventListener('click', function() {
  document.querySelector('h1').style.color='red';
});
// fonctionne aussi comme ça // document.getElementById('id-inséré-dans-le-bouton').addEventListener('click', function() {
//   document.getElementById('id-inséré-dans-le-h1').style.color='red';
// });
document.querySelector('.page-button').addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor='#4dd7a3';
  // OU AUSSI document.body.style.backgroundColor='green';
  // cela marche avec body car il y a toujours un body dans le html
});
document.querySelector('.accept2-button').addEventListener('click', function() {
  alert('Vous avez accepté les cookies.');document.querySelector('.accept2-button').remove();
});
// OU AUSSI alert('Vous avez accepté les cookies.');document.getElementById.('ID-demonbouton').style.display="none";
