jQuery(document).ready(function(){
    jQuery('.catalog-menu ul li.has_children').click(function(){
        if(!jQuery(this).hasClass( 'active')){
            jQuery('.has_children').removeClass('active');
            jQuery(this).children('.sub-menu').fadeIn(400).css('display', 'grid');
            jQuery(this).addClass('active');
        }else{
            jQuery('.sub-menu').hide();
            
        }
        
    })
    jQuery('.header-menu').trigger('mouseleave',function(){
        jQuery('.sub-menu').fadeOut(0);
    })
})