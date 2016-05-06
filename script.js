(function( win){

  /**
   * [criteriaTemplate description]
   * @param  {[type]} aCriteria [description]
   * @return {[type]}           [description]
   */
  function criteriaTemplate( aCriteria){
    return function( el){
      return ( ~aCriteria.indexOf( el));
    };
  }

  var aClickDom    = [].slice.call( document.querySelectorAll('.js--click')),
  handleOver,
  handleClick;

  handleOver = win.eventHandler('mouseover', {
    element  : document.body,
    criteria : criteriaTemplate( aClickDom),
    callBack : function(event){

      console.log('hover', event.delegateTarget.dataset.id);

    }

  });


  handleClick = win.eventHandler('click', {
    element  : document.body,
    criteria : criteriaTemplate( aClickDom),
    callBack : function(event){

      console.log('click', event.delegateTarget.dataset.id);
      handleOver.destroy();

    }

  });



})( window);
