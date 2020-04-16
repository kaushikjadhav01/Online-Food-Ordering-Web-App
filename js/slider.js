 //JavaScript Document



   
//Main Slider Home 
     var revapi;
		revapi = jQuery("#rev_slider").revolution({
			sliderType:"standard",
			sliderLayout:"fullscreen",
			scrollbarDrag:"true",
			delay:9000,
			fullScreen:"on",
			gridwidth:1170,
			navigation: {
				arrows:{enable:true},
				touch:{
						  touchenabled:"on",
						  swipe_threshold: 75,
						  swipe_min_touches: 1,
						  swipe_direction: "horizontal",
						  drag_block_vertical: false
					 }
			},
			gridwidth:1170,
			gridheight:640		
		});		


             //  TABS Slider
				 var tpj=jQuery;					
					var revapi34;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_34_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_34_1");
						}else{
							revapi34 = tpj("#rev_slider_34_1").show().revolution({
								sliderType:"standard",
								sliderLayout:"fullscreen",
								fullScreen:"on",
								delay:9000,
								gridwidth:1170,
                                //gridheight:640,
								navigation: {
									keyboardNavigation:"on",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									onHoverStop:"on",
									touch:{
										touchenabled:"on",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
									,
									arrows: {
										style:"gyges",
										enable:true,
										hide_onmobile:false,
										hide_over:778,
										hide_onleave:false,
										tmp:'',
										left: {
											h_align:"right",
											v_align:"bottom",
											h_offset:40,
											v_offset:0
										},
										right: {
											h_align:"right",
											v_align:"bottom",
											h_offset:0,
											v_offset:0
										}
									}
									,
									tabs: {
										style:"hesperiden",
										enable:true,
										width:383,
										height:110,
										min_width:250,
										wrapper_padding:0,
										wrapper_color:"transparent",
										wrapper_opacity:"0",
										tmp:'<div class="tp-tab-title">{{title}}</div><div class="tp-tab-desc">{{description}}</div>',
										visibleAmount: 3,
										hide_onmobile: true,
										hide_under:778,
										hide_onleave:false,
										hide_delay:200,
										direction:"horizontal",
										span:false,
										position:"inner",
										space:10,
										h_align:"bottom",
										v_align:"bottom",
										h_offset:30,
										v_offset:0
									}
								},
								viewPort: {
									enable:true,
									outof:"pause",
									visible_area:"80%"
								},
								
								
								shadow:0,
								spinner:"off",
								stopLoop:"off",
								stopAfterLoops:-1,
								stopAtSlide:-1,
								shuffle:"off",
								autoHeight:"off",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
						}
					});	/*ready*/
					
		
		
		

					
								
					