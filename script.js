function scrollToAnchor(aid){
  var $aTag = $(aid);
  $('html,body').animate({scrollTop: $aTag.offset().top - 50},'slow');
}


$(() => {
  const projectTemplate = Handlebars.compile($('#project-template').html())
  fetch('./projects.json', {cache: 'no-store'}).then(data => data.json())
    .then(data => {
      let projects = {
        projects: data.projects
      }
      $('.project-container').append(projectTemplate(projects))
    })
    .catch(error => console.error(error.message))


  $('nav a').click(function(e) {
    e.preventDefault()
    let anchor = this.getAttribute('href')
    scrollToAnchor(anchor)
  })
})
