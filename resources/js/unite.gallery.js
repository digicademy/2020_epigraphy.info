jQuery(document).ready(function () {
    jQuery("#researchdata").unitegallery({
    lightbox_type: "compact",
				tiles_type:"nested"
			});
			jQuery("#shoes").unitegallery({
				tiles_type:"justified"
			});
    jQuery("#researchdata_alt").unitegallery({
        tile_border_color: "#7a7a7a",
        tile_outline_color: "#8B8B8B",
        tile_enable_shadow: false,
        tile_shadow_color: "#8B8B8B",
        tile_overlay_opacity: 0.5,
        tile_show_link_icon: true,
        tile_image_effect_type: "sepia",
        tile_image_effect_reverse: true,
        tile_enable_textpanel: true,
        tile_link_newpage: true,
        tile_textpanel_always_on: true,
        tile_textpanel_bg_opacity: 1,
        tile_textpanel_bg_color: "#464545",
        lightbox_textpanel_title_color: "e5e5e5",
        tiles_type: "justified",
        tiles_col_width: 230,
        tiles_space_between_cols: 5,
        tiles_justified_row_height: 170
    });
    jQuery("#gallery").unitegallery({
        gallery_theme: "grid",
        grid_num_cols: 1,
        gallery_autoplay: true, //true / false - begin slideshow autoplay on start
        gallery_play_interval: 5000, //play interval of the slideshow
        gallery_pause_on_mouseover: true, //true,false - pause on mouseover when playing slideshow true/false
        theme_panel_position: "right",
        gallery_background_color: "gray",
        slider_textpanel_bg_color: "rgba(0, 0, 0, 0.5)", //textpanel background color
        gridpanel_background_color: "rgba(0, 0, 0, 0.5)"
    });
});