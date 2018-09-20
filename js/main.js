
$('#filter').keyup(function(){
      $('.list li').addClass('disabled');
      let val = this.value.toLowerCase();
      $('.list li').each(function(){
        let page = $(this).text().toLowerCase();
        let expression = new RegExp(page);
        if(page.match(val)){
          $(this).removeClass('disabled');
        }
      })
})
