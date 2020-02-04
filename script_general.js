(function(){
	var script = {
 "vrPolyfillScale": 0.5,
 "paddingRight": 0,
 "minHeight": 20,
 "class": "Player",
 "children": [
  "this.MainViewer",
  "this.IconButton_5E980F6E_4744_015D_41CA_F26202DB4858",
  "this.IconButton_5DC48291_473C_03C7_4191_D77FA2913C64",
  "this.MapViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarColor": "#000000",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_5E980F6E_4744_015D_41CA_F26202DB4858], 'cardboardAvailable'); this.playList_77F1437A_67FD_1E70_41B6_A5745A2A111E.set('selectedIndex', 0)",
 "borderRadius": 0,
 "minWidth": 20,
 "scrollBarWidth": 10,
 "gap": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "overflow": "hidden",
 "definitions": [{
 "id": "panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "sales office interior",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401",
   "yaw": -111.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 152.62,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_63FA5DAC_47C4_01DD_41A5_8EFD098B8AD8",
  "this.panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_tcap0"
 ]
},
{
 "id": "panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_camera",
 "initialSequence": "this.sequence_0A574A96_4744_03CD_41C8_97A70E0D6018",
 "initialPosition": {
  "yaw": 19.53,
  "class": "PanoramaCameraPosition",
  "pitch": -6.59
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_5E980F6E_4744_015D_41CA_F26202DB4858",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "id": "panorama_7216749F_47C4_07FB_41D1_496FECE7805B_camera",
 "initialSequence": "this.sequence_7212B813_47C4_0ECB_416E_C65F391D732C",
 "initialPosition": {
  "yaw": 154.08,
  "class": "PanoramaCameraPosition",
  "pitch": -2.58
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3",
 "label": "center stage enterance",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_0169CA1C_47C4_02FD_41CE_FDEFE1B584A3",
  "this.overlay_0FF9A211_47C4_02C7_41C7_21CA0610021D",
  "this.overlay_0CDF2E62_473C_0345_41D0_EFED06F7505B",
  "this.overlay_7018AFEA_61C7_CAB7_41D1_D1BB8C886E4B",
  "this.overlay_7E912837_6C3F_FF3E_41D9_F90017FF414A",
  "this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 5092.86,
   "angle": -153.74,
   "y": 915.83,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7",
   "yaw": 116.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 154.01,
   "distance": 1
  },
  {
   "panorama": "this.panorama_7216749F_47C4_07FB_41D1_496FECE7805B",
   "yaw": 151.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -46.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347",
   "yaw": -15.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.37,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "camera_7730349C_67FD_1AB0_41D6_F87647C664E8",
 "initialSequence": "this.sequence_7730249C_67FD_1AB0_41C9_75266337BB34",
 "initialPosition": {
  "yaw": 68.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77B7D3E0_67FD_1E90_41D3_887F00B0EC49",
 "initialPosition": {
  "yaw": -12.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "restaurant 5",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0",
   "yaw": -49.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 116.84,
   "distance": 1
  },
  {
   "panorama": "this.panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1",
   "yaw": -73.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.84,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_485322A6_4744_03CD_41C8_CDD5EE66A095",
  "this.overlay_493229D4_4744_014D_41A7_90DBFC23F88A",
  "this.overlay_48C8320B_4744_02DB_41B6_D96F104132BC",
  "this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_tcap0"
 ]
},
{
 "id": "camera_76F78749_67FD_0790_41D2_ABBD3BEE3751",
 "initialSequence": "this.sequence_76F7B749_67FD_0790_4192_A93FEBD522ED",
 "initialPosition": {
  "yaw": 139.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_091933A6_4744_01CD_41CF_4BBA8756EF22",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "title sponsor 1",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7",
   "yaw": -16.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -89.25,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_17F3CB8B_4744_01DB_41BE_4CA009C767A5",
  "this.panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_tcap0"
 ]
},
{
 "id": "panorama_576D64C0_474E_EACD_418F_5627A63D5320_camera",
 "initialSequence": "this.sequence_57687AD8_474D_BEFD_41BB_0F14612BB9D7",
 "initialPosition": {
  "yaw": -25.96,
  "class": "PanoramaCameraPosition",
  "pitch": -15.68
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_76E2E758_67FD_07B0_41D8_7F12F33C3396",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -172.81,
    "easing": "cubic_in_out",
    "path": "shortest",
    "pitchSpeed": 17.05,
    "yawSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -33.12
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 106.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_76FE8505_67FD_1B93_41BC_9D29F27F9296",
 "initialPosition": {
  "yaw": -32.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "playList_77FD1369_67FD_1F90_41D6_D18B6001989C",
 "items": [
  {
   "player": "this.viewer_uid77FED366_67FD_1F90_41CB_6F88A0BFAECCVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid77FED366_67FD_1F90_41CB_6F88A0BFAECCVideoPlayer)",
   "start": "this.viewer_uid77FED366_67FD_1F90_41CB_6F88A0BFAECCVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_77FD1369_67FD_1F90_41D6_D18B6001989C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_77FD1369_67FD_1F90_41D6_D18B6001989C, 0)",
   "class": "VideoPlayListItem",
   "media": "this.video_CFB0F536_DD2D_D373_41EA_E8F34A7DC1A0"
  }
 ],
 "class": "PlayList"
},
{
 "id": "video_CFB0F536_DD2D_D373_41EA_E8F34A7DC1A0",
 "height": 1080,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "SSW & FiNA 2019 Official Video",
 "width": 1920,
 "thumbnailUrl": "media/video_CFB0F536_DD2D_D373_41EA_E8F34A7DC1A0_t.jpg",
 "video": {
  "width": 1920,
  "mp4Url": "media/video_CFB0F536_DD2D_D373_41EA_E8F34A7DC1A0.mp4",
  "class": "VideoResource",
  "height": 1080
 },
 "class": "Video"
},
{
 "id": "panorama_72160A3E_47C4_033D_41C2_85C3093DC483",
 "label": "center stage 1",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_7A418047_47C4_3F4B_41CE_C4DC46B5F933",
  "this.overlay_2BE5FDAB_474C_01DB_417A_27EDE0E9F11D",
  "this.overlay_6E1F57FD_61C6_5A8D_41BA_ABBE055F666D",
  "this.panorama_72160A3E_47C4_033D_41C2_85C3093DC483_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 5089.79,
   "angle": 27.03,
   "y": 621.29,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7216749F_47C4_07FB_41D1_496FECE7805B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_7216749F_47C4_07FB_41D1_496FECE7805B",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "center stage 2",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_72160A3E_47C4_033D_41C2_85C3093DC483"
  },
  {
   "panorama": "this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3",
   "yaw": -46.89,
   "class": "AdjacentPanorama",
   "backwardYaw": 151.94,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_79A1D8CF_47CC_0F5B_41AF_E2049334C0A1",
  "this.overlay_7838A2D1_47CC_0347_41AA_5E3967D58B7A",
  "this.panorama_7216749F_47C4_07FB_41D1_496FECE7805B_tcap0"
 ]
},
{
 "id": "camera_776E143F_67FD_19F0_41D2_FE16DA70BE3C",
 "initialSequence": "this.sequence_776E043F_67FD_19F0_41D6_C8111A12F36C",
 "initialPosition": {
  "yaw": -27.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "press room interior",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D",
   "yaw": -5.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 148.85,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_709802A3_47C4_03CB_41B8_5895C278BA1F",
  "this.panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_tcap0"
 ]
},
{
 "id": "camera_7757B45F_67FD_19B0_41C1_47DAF12CCACD",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -172.81,
    "easing": "cubic_in_out",
    "path": "shortest",
    "pitchSpeed": 17.05,
    "yawSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -33.12
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 130.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_camera",
 "initialPosition": {
  "yaw": -176.15,
  "class": "PanoramaCameraPosition",
  "pitch": 1.31
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5D305176_47C4_014D_41D1_200520CB552E_camera",
 "initialSequence": "this.sequence_5D312ADE_47C4_037D_41CB_2E043C4C33A6",
 "initialPosition": {
  "yaw": 147.36,
  "class": "PanoramaCameraPosition",
  "pitch": -6.21
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64",
 "hideEasing": "cubic_out",
 "popupDistance": 100,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "popupMaxWidth": "50%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682,
    "url": "media/popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64_0_3.jpg"
   }
  ]
 },
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationX": 0,
 "hfov": 5.49,
 "showDuration": 500,
 "pitch": 10.3,
 "popupMaxHeight": "50%",
 "yaw": 67.21
},
{
 "id": "panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6",
 "label": "supply side garden",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_6C66A09A_47CC_FFC5_41C4_C5268900CFAB",
  "this.overlay_6AC6A7AC_47CC_01DD_41C7_88553F3790A9",
  "this.overlay_204DF94F_4744_015B_41C2_4896AC91C5AB",
  "this.overlay_6E1325FA_61C1_BE97_41C6_305008269E5C",
  "this.overlay_715DB2A3_61C1_BAB5_41D0_64F0FAB2366F",
  "this.overlay_6EE0D11C_61C2_D793_41D6_936DCC871F9C",
  "this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 5409.05,
   "angle": 296.17,
   "y": 1983.73,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401",
   "yaw": -142.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -117.57,
   "distance": 1
  },
  {
   "panorama": "this.panorama_6974B7DF_47C4_017B_41D0_46B196447485",
   "yaw": 71.56,
   "class": "AdjacentPanorama",
   "backwardYaw": -94.74,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4",
   "yaw": -83.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 150.72,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401",
 "label": "sales office entrance",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_63AEC244_47C4_034D_41C0_AE7D7A361085",
  "this.overlay_2FD5F18C_4744_01DD_41BD_67BCDA82386C",
  "this.overlay_2D266854_4744_0F4D_41CF_9E8A84E385F3",
  "this.overlay_6E00ED5D_61CF_CF8D_419B_FE52A88FD613",
  "this.overlay_7FFF5146_70B2_F8D1_41C7_FEC5D0F6D4E0",
  "this.panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 4608.95,
   "angle": 113.5,
   "y": 2582.2,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816",
   "yaw": 152.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -111.35,
   "distance": 1
  },
  {
   "panorama": "this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6",
   "yaw": -117.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -142.06,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "camera_76A00586_67FD_1A90_4180_F9D00765ADC4",
 "initialPosition": {
  "yaw": -118.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_6974B7DF_47C4_017B_41D0_46B196447485",
 "label": "tasting bar",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_68C8B23E_47C4_033D_41B9_B1EE59EFFFC8",
  "this.overlay_74343107_47FC_1ECB_41BB_8692581980F2",
  "this.overlay_7F90F1F3_70B3_FBB7_41D9_BE28F2769804",
  "this.overlay_7E3324DC_70B2_B9F2_41CD_A9DC3B36204E",
  "this.panorama_6974B7DF_47C4_017B_41D0_46B196447485_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 5472.36,
   "angle": -47.43,
   "y": 1306.56,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6",
   "yaw": -94.74,
   "class": "AdjacentPanorama",
   "backwardYaw": 71.56,
   "distance": 1
  },
  {
   "panorama": "this.panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347",
   "yaw": 11.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 152.5,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "LGBTQ+ 2",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5",
   "yaw": 141.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 149.76,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_5F8882CC_474C_035D_41C9_36E7D560C824",
  "this.panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_tcap0"
 ]
},
{
 "id": "camera_777D3699_67FD_06B0_419E_9A07386AD7DB",
 "initialSequence": "this.sequence_7772D699_67FD_06B0_41D0_36440DC06D8E",
 "initialPosition": {
  "yaw": 133.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_7792F66D_67FD_1990_41CD_7CF27761E4D1",
 "initialSequence": "this.sequence_7792966D_67FD_1990_41C1_FDFB95010D5E",
 "initialPosition": {
  "yaw": -38.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77D73605_67FD_1990_41C9_5E7A68ED409A",
 "initialSequence": "this.sequence_77D72605_67FD_1990_41A4_84A16BC4B29D",
 "initialPosition": {
  "yaw": -31.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_76925595_67FD_1AB0_4183_27E304BEC6E3",
 "initialSequence": "this.sequence_76924595_67FD_1AB0_41D9_9A10005CED0F",
 "initialPosition": {
  "yaw": -12.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_camera",
 "initialPosition": {
  "yaw": -31.29,
  "class": "PanoramaCameraPosition",
  "pitch": -21.05
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_774816D5_67FD_06B0_4191_AA8B02D042C1",
 "initialSequence": "this.sequence_774836D5_67FD_06B0_41BA_3ADC247B796B",
 "initialPosition": {
  "yaw": 54.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_camera",
 "initialSequence": "this.sequence_5BC0E6CD_47CC_035F_41BD_40C5A8795C6B",
 "initialPosition": {
  "yaw": 135.25,
  "class": "PanoramaCameraPosition",
  "pitch": -4.22
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_camera",
 "initialPosition": {
  "yaw": -172.81,
  "class": "PanoramaCameraPosition",
  "pitch": -33.12
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_775C36C6_67FD_0690_41D1_AA9F4B65FBE0",
 "initialSequence": "this.sequence_775C26C6_67FD_0690_41D6_D8F92188D65F",
 "initialPosition": {
  "yaw": -34.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77C84614_67FD_19B0_41D4_4F31AC38AED9",
 "initialSequence": "this.sequence_77C87614_67FD_19B0_41C7_6C7F450BBC1D",
 "initialPosition": {
  "yaw": -63.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77D1F5F6_67FD_1A70_41C8_81FB06A1B06E",
 "initialSequence": "this.sequence_77D1E5F6_67FD_1A70_41B0_5C2C5789267D",
 "initialPosition": {
  "yaw": -41.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7",
 "label": "title sponsor entrance",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_15F57E95_473C_03CF_41BA_8E42873B55A1",
  "this.overlay_0BFE879C_473C_01FD_41D1_1441A534E5A2",
  "this.overlay_0B65F7D2_473C_0145_4198_6FA2CAB9F4C6",
  "this.overlay_71E9A105_61C2_B77D_41D8_6CE9C67EB32B",
  "this.overlay_7FDA6801_6C39_5ED2_41D5_CB18BCD99B38",
  "this.overlay_7E648B52_70BE_A8F1_4186_A632EC104CEE",
  "this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 3961.51,
   "angle": 296.79,
   "y": 765.73,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_091933A6_4744_01CD_41CF_4BBA8756EF22",
   "yaw": -89.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.77,
   "distance": 1
  },
  {
   "panorama": "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35",
   "yaw": -10.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.94,
   "distance": 1
  },
  {
   "panorama": "this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3",
   "yaw": 154.01,
   "class": "AdjacentPanorama",
   "backwardYaw": 116.23,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_camera",
 "initialSequence": "this.sequence_57685AD7_474D_BEF3_41CF_55796CD70677",
 "initialPosition": {
  "yaw": 13.9,
  "class": "PanoramaCameraPosition",
  "pitch": -2.8
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D",
 "label": "press room entrance",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_7F99BEC6_47C4_034D_41BA_6F36E3299603",
  "this.overlay_7E6B1013_47C4_1ECB_41C3_D6C18D325281",
  "this.overlay_2E57E5C2_4744_0145_41C0_13D881195FC5",
  "this.overlay_70E9D433_61C1_BD95_41D2_0E883889A0D9",
  "this.overlay_295609F8_2482_A4B9_41B7_13E2494486AF",
  "this.panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 3716.07,
   "angle": 120.18,
   "y": 1398.05,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4"
  },
  {
   "panorama": "this.panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0",
   "yaw": 148.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.73,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "sponsor wall",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE",
   "yaw": -125.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -61.13,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209"
  }
 ],
 "thumbnailUrl": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_5F6D1147_475C_014B_41C9_E4F93AA570C0",
  "this.overlay_6FCC0465_6143_C095_41D6_B88FB46B334C",
  "this.overlay_7E2EA60A_70B6_9851_41D9_C80230A071A4",
  "this.panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_tcap0"
 ]
},
{
 "minHeight": 1,
 "paddingRight": 0,
 "class": "IconButton",
 "right": "49.03%",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "width": 35,
 "iconURL": "skin/IconButton_5E980F6E_4744_015D_41CA_F26202DB4858.png",
 "id": "IconButton_5E980F6E_4744_015D_41CA_F26202DB4858",
 "mode": "push",
 "height": 23,
 "shadow": false,
 "paddingBottom": 0,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "maxWidth": 35,
 "propagateClick": false,
 "maxHeight": 23,
 "data": {
  "name": "IconButton4710"
 },
 "top": "46.51%",
 "backgroundOpacity": 0,
 "cursor": "hand",
 "borderSize": 0
},
{
 "id": "panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4",
 "label": "featured products",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_5BDCEB87_47C4_01CB_41C3_94012C521644",
  "this.overlay_58799589_47C4_01C7_41CC_0ACF161D1569",
  "this.overlay_66AC903C_47C4_1F3D_4176_A9AFE7296C13",
  "this.overlay_7E7988F1_70B6_A9B3_41CD_7A87F26B5441",
  "this.overlay_7E17674F_70B1_B8EF_41C6_4E04132B0F7C",
  "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_tcap0",
  "this.overlay_E16AF6A4_F0A4_81FC_41E8_04F0CA5F8547",
  "this.popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 4583.37,
   "angle": -55.7,
   "y": 2080.4,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6",
   "yaw": 150.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.35,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5D305176_47C4_014D_41D1_200520CB552E",
   "yaw": -34.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 129.47,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D",
   "yaw": 39.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 75.75,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_5DC48291_473C_03C7_4191_D77FA2913C64_pressed.png",
 "minHeight": 0,
 "class": "IconButton",
 "right": "3.44%",
 "borderRadius": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "width": 40,
 "iconURL": "skin/IconButton_5DC48291_473C_03C7_4191_D77FA2913C64.png",
 "rollOverIconURL": "skin/IconButton_5DC48291_473C_03C7_4191_D77FA2913C64_rollover.png",
 "id": "IconButton_5DC48291_473C_03C7_4191_D77FA2913C64",
 "mode": "push",
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "propagateClick": false,
 "data": {
  "name": "Button8705"
 },
 "top": "4.2%",
 "backgroundOpacity": 0,
 "cursor": "hand",
 "borderSize": 0
},
{
 "id": "panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "vip 1",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE",
   "yaw": 145.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 158.19,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D",
   "yaw": -21.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.54,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_63B7B2EB_47C4_035B_4199_AFFE99DAB85C",
  "this.overlay_63115B94_47C4_01CD_41C8_AC03723E32BE",
  "this.panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_tcap0"
 ]
},
{
 "id": "panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209",
 "label": "#SSW 2",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_629301A8_6C19_51D2_41C1_4736E4610265",
  "this.overlay_629AB07D_6C19_AF32_41C8_C11EA7DFFD81",
  "this.overlay_62189BBC_6C19_D132_41D5_56500FF1B247",
  "this.overlay_621CE477_6C19_773E_41C4_ACD4381EC735",
  "this.overlay_6219C3B5_6C1A_D132_41D5_F936FF20911E",
  "this.overlay_62020513_6C1B_76F6_41CC_66DD95815718",
  "this.overlay_6207531D_6C19_52F2_41D5_B06C914E5811",
  "this.overlay_7D586699_70B1_7873_41C6_43F7693AF9A8",
  "this.overlay_D3938D67_DD25_D311_41DB_B6F6196E93F8",
  "this.overlay_D38C3B50_DD25_770F_41E2_32A4D770C537",
  "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_tcap0",
  "this.overlay_CDDACAF1_DD2F_36F1_41CF_45948A6A55CA",
  "this.popup_CF6894D2_DD2F_D133_41E7_A8A5EB7525BE",
  "this.overlay_E2978965_ECCA_76FF_41E3_56C5445E760C",
  "this.overlay_FC4F75F8_ECD6_99D5_41CF_10F9D725C384",
  "this.overlay_FC6FB9F8_ECD5_A9D5_41E6_9B42ECDF451A",
  "this.overlay_FC87B384_ECD6_BA3D_41A8_086DFA383925"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 4190.76,
   "angle": 295.45,
   "y": 1744.57,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_495109AE_46CE_BB55_41CA_C9DE0D856651"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_559439B6_477C_01CD_41C6_310910C20AF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_576D64C0_474E_EACD_418F_5627A63D5320"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_6974B7DF_47C4_017B_41D0_46B196447485_camera",
 "initialPosition": {
  "yaw": -126.74,
  "class": "PanoramaCameraPosition",
  "pitch": -9.86
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_camera",
 "initialPosition": {
  "yaw": -169.91,
  "class": "PanoramaCameraPosition",
  "pitch": -2.42
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_camera",
 "initialSequence": "this.sequence_5BC90C8C_47CC_07DD_41CD_A14BF3D73274",
 "initialPosition": {
  "yaw": 133.1,
  "class": "PanoramaCameraPosition",
  "pitch": -4.94
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_camera",
 "initialSequence": "this.sequence_5BF9206A_47C4_3F45_41C5_41993E7B750B",
 "initialPosition": {
  "yaw": -143.62,
  "class": "PanoramaCameraPosition",
  "pitch": -12.14
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_camera",
 "initialSequence": "this.sequence_576FDAD8_474D_BEFD_41C6_F06DCF175987",
 "initialPosition": {
  "yaw": 31.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0.04
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_778B667C_67FD_0671_41C9_A92BD49A94BA",
 "initialSequence": "this.sequence_778B167D_67FD_0670_41C6_A562B06E72AF",
 "initialPosition": {
  "yaw": 90.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "MapViewerMapPlayer",
 "viewerArea": "this.MapViewer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "id": "panorama_7216FE44_47C4_034D_41CF_4876F81C852B",
 "label": "supplier stage",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_1DEC3592_475C_01C5_41C2_002A240A2101",
  "this.panorama_7216FE44_47C4_034D_41CF_4876F81C852B_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 1013.64,
   "angle": -156.54,
   "y": 435.08,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA",
   "yaw": -11.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 57.42,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "camera_770C872C_67FD_0790_417A_D10D64146378",
 "initialSequence": "this.sequence_770CB72C_67FD_0790_41CC_3DD141A8F8F7",
 "initialPosition": {
  "yaw": -21.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7216FE44_47C4_034D_41CF_4876F81C852B_camera",
 "initialSequence": "this.sequence_72120814_47C4_0ECD_41C6_DE3B0BBA442B",
 "initialPosition": {
  "yaw": 155.07,
  "class": "PanoramaCameraPosition",
  "pitch": 1.13
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "main path 1",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6974B7DF_47C4_017B_41D0_46B196447485",
   "yaw": 152.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 11.15,
   "distance": 1
  },
  {
   "panorama": "this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3",
   "yaw": 61.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -15.26,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4"
  }
 ],
 "thumbnailUrl": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_78DF9BE4_47CC_014D_4198_6E8960D545FB",
  "this.overlay_06BE3649_47CC_0347_41CA_58A6DA1114C1",
  "this.overlay_0435A6C1_47C4_0347_41D0_09165FB903F8",
  "this.overlay_70E3CF8A_61C6_4B77_41D2_8A907E715CC4",
  "this.overlay_70B2F6A5_61C1_FABD_41D4_E91EE476D82E",
  "this.overlay_7E7AA3D1_6C3E_B172_41B3_88AD61CAED20",
  "this.panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_tcap0"
 ]
},
{
 "id": "camera_77251710_67FD_07B0_41D3_068907F15B10",
 "initialSequence": "this.sequence_77250710_67FD_07B0_41CB_1A9F0BF8B07C",
 "initialPosition": {
  "yaw": -50.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_camera",
 "initialSequence": "this.sequence_5BF9006A_47C4_3F45_41C1_7DA3F3E6058C",
 "initialPosition": {
  "yaw": 137.96,
  "class": "PanoramaCameraPosition",
  "pitch": -10.38
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_camera",
 "initialSequence": "this.sequence_7BEFB632_47C4_02C5_41CC_DFB247D4F7C0",
 "initialPosition": {
  "yaw": -126.49,
  "class": "PanoramaCameraPosition",
  "pitch": 10.11
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "mainPlayList",
 "items": [
  "this.PanoramaPlayListItem_77F4B37F_67FD_1E70_41D6_80C10BE325F8",
  "this.PanoramaPlayListItem_77F7A380_67FD_1E90_41D0_EEB477F93310",
  "this.PanoramaPlayListItem_77F71381_67FD_1E90_4137_00FF79DB7AD0",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB"
  },
  "this.PanoramaPlayListItem_77EB0383_67FD_1E90_41D6_AB9E60C72ABF",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_5D305176_47C4_014D_41D1_200520CB552E_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5D305176_47C4_014D_41D1_200520CB552E"
  },
  "this.PanoramaPlayListItem_77E85384_67FD_1E90_41C2_D0C65A9CF557",
  "this.PanoramaPlayListItem_77E80384_67FD_1E90_4181_1BF6F6F05568",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE"
  },
  "this.PanoramaPlayListItem_77E91386_67FD_1E90_41CD_5B8A9595EC13",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816"
  },
  "this.PanoramaPlayListItem_77EE5386_67FD_1E90_41CD_4BD073421F01",
  "this.PanoramaPlayListItem_77EE0387_67FD_1E90_41D4_624E6174C81F",
  "this.PanoramaPlayListItem_77EFE387_67FD_1E90_41D2_4BA540EDD50B",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0"
  },
  "this.PanoramaPlayListItem_77EF3388_67FD_1E90_41CE_2FBE7C22269C",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_7216749F_47C4_07FB_41D1_496FECE7805B_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7216749F_47C4_07FB_41D1_496FECE7805B"
  },
  "this.PanoramaPlayListItem_77ECA389_67FD_1E90_41D9_FC45507ED921",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347"
  },
  "this.PanoramaPlayListItem_77EDB38A_67FD_1E90_4173_F7522EA561C6",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_091933A6_4744_01CD_41CF_4BBA8756EF22"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_1925243B_474C_073B_41C5_503370A08964_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1925243B_474C_073B_41C5_503370A08964"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA"
  },
  "this.PanoramaPlayListItem_77E3E38C_67FD_1E90_41D4_0849BF651C16",
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_576D64C0_474E_EACD_418F_5627A63D5320_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_576D64C0_474E_EACD_418F_5627A63D5320"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 0)",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 34, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 34)",
   "class": "VideoPlayListItem",
   "media": "this.video_CFB0F536_DD2D_D373_41EA_E8F34A7DC1A0"
  }
 ],
 "class": "PlayList"
},
{
 "id": "camera_7710A71E_67FD_07B0_41CE_01363AA54BEC",
 "initialSequence": "this.sequence_7710571E_67FD_07B0_41D2_E8D9480ED6DD",
 "initialPosition": {
  "yaw": -104.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77AC63F1_67FD_1E70_41C0_FA5C9CAD5999",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 151.71,
    "easing": "cubic_in_out",
    "path": "shortest",
    "pitchSpeed": 17.05,
    "yawSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -17.32
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -63.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_7767D6B7_67FD_06F0_41CC_13E59908D6A0",
 "initialSequence": "this.sequence_7767C6B7_67FD_06F0_41D1_48041A45E8A4",
 "initialPosition": {
  "yaw": -30.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_7682E5A4_67FD_1A90_41A6_9A3B64116EA9",
 "initialSequence": "this.sequence_768295A4_67FD_1A90_41BB_3557FCB2B308",
 "initialPosition": {
  "yaw": 157.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "restaurant 7",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0",
   "yaw": -168.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -40.64,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209"
  },
  {
   "panorama": "this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B",
   "yaw": 161.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -73.23,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_48A13D4D_4744_015E_41AA_9043EFE62052",
  "this.overlay_57950088_4744_1FC5_416C_694BD0EE333C",
  "this.overlay_249E853B_48C4_013B_41BB_C8FD3EDAD2C8",
  "this.overlay_7FBA2D53_70B1_68F7_41D2_FE1BAD915D9B",
  "this.panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_tcap0"
 ]
},
{
 "id": "panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_camera",
 "initialSequence": "this.sequence_55865D4E_477C_015D_41C2_B5EC6E245961",
 "initialPosition": {
  "yaw": 155.19,
  "class": "PanoramaCameraPosition",
  "pitch": -14.86
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "vrPointerSelectionTime": 2000,
 "minHeight": 50,
 "toolTipBorderSize": 1,
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "progressBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "borderRadius": 0,
 "playbackBarOpacity": 1,
 "minWidth": 100,
 "firstTransitionDuration": 0,
 "playbackBarHeadOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressRight": 0,
 "playbackBarBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontSize": "12px",
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "transitionMode": "blending",
 "toolTipShadowColor": "#333333",
 "progressHeight": 10,
 "progressBottom": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarBorderSize": 0,
 "shadow": false,
 "toolTipOpacity": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadBorderRadius": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingLeft": 6,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadHeight": 15,
 "progressBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingBottom": 4,
 "progressBorderColor": "#000000",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadWidth": 6,
 "playbackBarBottom": 5,
 "progressLeft": 0,
 "progressOpacity": 1,
 "toolTipPaddingRight": 6,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "playbackBarHeight": 10,
 "toolTipFontColor": "#FFFFFF",
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "id": "MainViewer",
 "toolTipFontStyle": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "propagateClick": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "progressBarOpacity": 1
},
{
 "id": "camera_77290701_67FD_0790_41CA_4BF46957D5B8",
 "initialPosition": {
  "yaw": 96.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77C2B624_67FD_1990_41D4_B34FE0150729",
 "initialSequence": "this.sequence_77C2A625_67FD_1990_41B2_329A31FC5938",
 "initialPosition": {
  "yaw": -18.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_camera",
 "initialPosition": {
  "yaw": -32.35,
  "class": "PanoramaCameraPosition",
  "pitch": -0.76
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_camera",
 "initialPosition": {
  "yaw": 151.71,
  "class": "PanoramaCameraPosition",
  "pitch": -17.32
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "restaurant 2",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_576D64C0_474E_EACD_418F_5627A63D5320",
   "yaw": 138.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -26.11,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B"
  }
 ],
 "thumbnailUrl": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_4B85CA76_473C_034D_41A9_56A289BC5DE7",
  "this.overlay_73EAD657_617E_40B5_41C6_79C820A9C539",
  "this.panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_tcap0"
 ]
},
{
 "id": "panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_camera",
 "initialPosition": {
  "yaw": -46.91,
  "class": "PanoramaCameraPosition",
  "pitch": 5.3
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_camera",
 "initialSequence": "this.sequence_576FFAD8_474D_BEFD_417F_DB551430B6C3",
 "initialPosition": {
  "yaw": 168.01,
  "class": "PanoramaCameraPosition",
  "pitch": -22.65
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_76D4B55A_67FD_1BB0_419B_49A2E844062B",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 151.71,
    "easing": "cubic_in_out",
    "path": "shortest",
    "pitchSpeed": 17.05,
    "yawSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -17.32
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 164.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77B813CF_67FD_1E90_41C2_C667CF2DCB1A",
 "initialSequence": "this.sequence_77B803CF_67FD_1E90_41BE_CCD0278E5B56",
 "initialPosition": {
  "yaw": 163.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_559439B6_477C_01CD_41C6_310910C20AF6_camera",
 "initialPosition": {
  "yaw": 58.35,
  "class": "PanoramaCameraPosition",
  "pitch": -5.63
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_770F24ED_67FD_1A90_41C4_1F0318E08C15",
 "initialSequence": "this.sequence_770CD4ED_67FD_1A90_41D5_2EAB96E4F425",
 "initialPosition": {
  "yaw": 168.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D",
 "label": "vip entrance",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_629939A2_47C4_01C5_41B1_B77D54BE628C",
  "this.overlay_6318EE6E_47C4_035D_41D1_A0FF8858DB0C",
  "this.overlay_6EAB4288_61CE_7573_41D5_D93E7CBAB0DD",
  "this.panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 4602.31,
   "angle": 116.68,
   "y": 1734.53,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3",
   "yaw": 161.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -21.59,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4",
   "yaw": 75.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 39.7,
   "distance": 1
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "LGBTQ+ 1",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207",
   "yaw": 149.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 141.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209"
  }
 ],
 "thumbnailUrl": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_5ED46158_4744_0145_41CE_E49FEC47BF0D",
  "this.overlay_5ED76956_474C_014D_41C1_9FB3184FC4B1",
  "this.overlay_7F50B599_70B3_9873_41CE_751F89477363",
  "this.panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_tcap0"
 ]
},
{
 "id": "camera_767C85B3_67FD_1AF0_4153_10A41963244E",
 "initialSequence": "this.sequence_767CB5B3_67FD_1AF7_41D6_EF62B190CE16",
 "initialPosition": {
  "yaw": 158.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_1925243B_474C_073B_41C5_503370A08964",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "FINA Theater",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4"
  }
 ],
 "thumbnailUrl": "media/panorama_1925243B_474C_073B_41C5_503370A08964_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1925243B_474C_073B_41C5_503370A08964_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_1C3A5B67_474C_014B_41C6_1A557DF8B5CA",
  "this.overlay_2C250036_4744_1ECD_41CC_8415C012978E",
  "this.overlay_70850E21_61DE_4DB5_41D7_B918E406DDE8",
  "this.overlay_29553D02_2482_7D49_41BE_D4A2B41CBAFE",
  "this.panorama_1925243B_474C_073B_41C5_503370A08964_tcap0"
 ]
},
{
 "id": "panorama_7BECC041_47C4_1F47_41CB_209499F0CD35",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "FINA",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7",
   "yaw": 167.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -10.18,
   "distance": 1
  },
  {
   "panorama": "this.panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF",
   "yaw": -142.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.37,
   "distance": 1
  },
  {
   "panorama": "this.panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA",
   "yaw": -38.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.75,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_1EBD4CC0_4744_0745_41C8_F4A11B189680",
  "this.overlay_1F19922E_4744_02DD_4183_DB994FA1E02F",
  "this.overlay_2B1A7D93_4744_01CB_41D1_F3905DB549C4",
  "this.overlay_718AE58F_61C2_5E8D_41A2_8251B6882AA9",
  "this.overlay_68C77831_67F5_09F0_41AF_49C0B8EC8F64",
  "this.overlay_29634CC3_2483_DCCF_41A4_61AF78D2481D",
  "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_tcap0"
 ]
},
{
 "id": "panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_camera",
 "initialPosition": {
  "yaw": 25.65,
  "class": "PanoramaCameraPosition",
  "pitch": -11.58
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_76B6E578_67FD_1A70_41D4_0E648BB5DFA2",
 "initialSequence": "this.sequence_76B68578_67FD_1A70_41D9_C81712AE673F",
 "initialPosition": {
  "yaw": 169.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "borderSize": 0,
 "minHeight": 20,
 "class": "Window",
 "scrollBarColor": "#000000",
 "titleFontFamily": "Arial",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "titlePaddingLeft": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingBottom": 5,
 "borderRadius": 5,
 "minWidth": 20,
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundOpacity": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyPaddingLeft": 0,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "backgroundColorRatios": [],
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundColor": [],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilOpacity": 0.4,
 "closeButtonRollOverIconColor": "#666666",
 "shadowSpread": 1,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "children": [
  "this.viewer_uid77FED366_67FD_1F90_41CB_6F88A0BFAECC"
 ],
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "closeButtonPressedBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBorderColor": "#000000",
 "layout": "vertical",
 "paddingRight": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBorderColor": "#000000",
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBorderSize": 0,
 "shadowColor": "#000000",
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "scrollBarWidth": 10,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "overflow": "scroll",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "headerPaddingBottom": 5,
 "headerPaddingTop": 10,
 "bodyBackgroundColorDirection": "vertical",
 "shadowBlurRadius": 6,
 "closeButtonBorderRadius": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingLeft": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "id": "window_6E2AD1DA_67F3_1AB0_41D2_2FE86995DB1D",
 "footerHeight": 5,
 "closeButtonBorderSize": 0,
 "titlePaddingRight": 5,
 "bodyPaddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "bodyPaddingBottom": 0,
 "closeButtonIconHeight": 20,
 "shadowOpacity": 0.5,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "propagateClick": false,
 "bodyPaddingRight": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "headerPaddingRight": 0,
 "scrollBarMargin": 2,
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "Window273"
 },
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "closeButtonPaddingTop": 5,
 "shadowHorizontalLength": 3,
 "scrollBarVisible": "rollOver",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonRollOverIconLineWidth": 5,
 "closeButtonPressedIconLineWidth": 5
},
{
 "id": "panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_camera",
 "initialSequence": "this.sequence_72129814_47C4_0ECD_41AE_C886426FF98C",
 "initialPosition": {
  "yaw": 121.86,
  "class": "PanoramaCameraPosition",
  "pitch": -20.44
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_camera",
 "initialSequence": "this.sequence_55867D4E_477C_015D_41BF_E38477EC9E14",
 "initialPosition": {
  "yaw": 163.93,
  "class": "PanoramaCameraPosition",
  "pitch": -11.35
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "popup_CF6894D2_DD2F_D133_41E7_A8A5EB7525BE",
 "hideEasing": "cubic_out",
 "popupDistance": 100,
 "rotationZ": 0,
 "rotationY": 0,
 "autoplay": true,
 "popupMaxWidth": "50%",
 "video": {
  "width": 1920,
  "mp4Url": "media/video_CFB0F536_DD2D_D373_41EA_E8F34A7DC1A0.mp4",
  "class": "VideoResource",
  "height": 1080
 },
 "hideDuration": 500,
 "loop": false,
 "rotationX": 0,
 "showEasing": "cubic_in",
 "hfov": 10.17,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "pitch": -8.59,
 "popupMaxHeight": "50%",
 "yaw": 77.4
},
{
 "id": "panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "FINA pirate ship",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35",
   "yaw": 61.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -142.54,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1925243B_474C_073B_41C5_503370A08964"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D"
  }
 ],
 "thumbnailUrl": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_2EDC1BF0_4744_0145_4163_9FD792383890",
  "this.overlay_2B0ED8A7_4744_0FCB_41CA_990924A11C22",
  "this.overlay_296D2D11_473C_06C7_41D0_B2ABDA779DF6",
  "this.overlay_702C4E27_61DF_CDBD_41A5_FF7B9EF4E573",
  "this.overlay_7F2F700E_70BE_9851_41CB_A57D71C19043",
  "this.overlay_7E49C09D_70B1_9873_41A3_CB838006ABAC",
  "this.panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_tcap0"
 ]
},
{
 "id": "camera_7786068B_67FD_0690_41A8_20351E8D7A0A",
 "initialSequence": "this.sequence_7786368B_67FD_0690_41C7_7B8005F8796B",
 "initialPosition": {
  "yaw": -25.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_76D59774_67FD_0670_419E_92E6D2E3C7D4",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 151.71,
    "easing": "cubic_in_out",
    "path": "shortest",
    "pitchSpeed": 17.05,
    "yawSpeed": 33.25,
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -17.32
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -28.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "main path 2",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35",
   "yaw": 167.75,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.98,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4"
  },
  {
   "panorama": "this.panorama_7216FE44_47C4_034D_41CF_4876F81C852B",
   "yaw": 57.42,
   "class": "AdjacentPanorama",
   "backwardYaw": -11.68,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_1DEBD3EB_475C_015B_41CF_07783048E354",
  "this.overlay_1BAD18D9_475C_0F47_41C2_A105CA595DA1",
  "this.overlay_1B17BF10_474C_02C5_41B4_349472046BA8",
  "this.overlay_70C05E52_61C2_4D97_41BF_249B122E6F91",
  "this.overlay_7158B4D6_61C2_5E9F_41C8_C330B6F185F0",
  "this.overlay_290D9A52_2482_E7C9_4155_4E811A4365FC",
  "this.panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_tcap0"
 ]
},
{
 "id": "panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_camera",
 "initialSequence": "this.sequence_5BC92C8C_47CC_07DD_41D0_CB2471ED5FD5",
 "initialPosition": {
  "yaw": 141.37,
  "class": "PanoramaCameraPosition",
  "pitch": -1.89
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_771C94CE_67FD_1A90_41D8_F75AAB26B210",
 "initialPosition": {
  "yaw": 141.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "ImageResource_E5A18CB4_F0E4_81DC_41D8_CB671A04576F",
 "levels": [
  {
   "width": 5616,
   "class": "ImageResourceLevel",
   "height": 3744,
   "url": "media/popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64_0_0.jpg"
  },
  {
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730,
   "url": "media/popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64_0_1.jpg"
  },
  {
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365,
   "url": "media/popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64_0_2.jpg"
  },
  {
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682,
   "url": "media/popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64_0_3.jpg"
  },
  {
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341,
   "url": "media/popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64_0_4.jpg"
  }
 ],
 "class": "ImageResource"
},
{
 "id": "panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "restaurant 6",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1",
   "yaw": -40.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.63,
   "distance": 1
  },
  {
   "panorama": "this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B",
   "yaw": 116.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -49.82,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_486E5429_4744_06C7_41B4_2CC8E86CE93C",
  "this.overlay_487E26B1_4744_03C7_41C7_3FC06EC89554",
  "this.panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_tcap0"
 ]
},
{
 "id": "panorama_559439B6_477C_01CD_41C6_310910C20AF6",
 "label": "expo entrance",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_51968C2C_475C_06DD_4195_9B4FBAE3C55B",
  "this.overlay_5FEA86A9_475C_03C7_4139_4335BC1B658E",
  "this.overlay_71BD3315_61C1_FB9D_41D6_2783EB694B4A",
  "this.overlay_7F820B4F_70B7_A8EF_41D4_ECFB4D3B3F92",
  "this.panorama_559439B6_477C_01CD_41C6_310910C20AF6_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 4206.63,
   "angle": -67.63,
   "y": 2077.32,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5D305176_47C4_014D_41D1_200520CB552E",
   "yaw": 147.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -22.16,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "id": "camera_76BC178F_67FD_0690_41AC_6F63047A70B9",
 "initialSequence": "this.sequence_76BC078F_67FD_0690_41C2_FF1510F89A08",
 "initialPosition": {
  "yaw": -122.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77C5A634_67FD_19F0_41BF_85EF56743150",
 "initialSequence": "this.sequence_77C55634_67FD_19F0_41D6_1A41F53D3DAC",
 "initialPosition": {
  "yaw": 118.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_772D14B5_67FD_1AF0_41C2_038EC5179D77",
 "initialPosition": {
  "yaw": 37.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77B32643_67FD_1990_41CC_0BCC7F84A374",
 "initialSequence": "this.sequence_77B0D643_67FD_1990_41C3_AF0685964011",
 "initialPosition": {
  "yaw": 62.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77801420_67FD_1990_41D4_3D1569F3E2FE",
 "initialSequence": "this.sequence_77800420_67FD_1990_41C3_BF422FD6875C",
 "initialPosition": {
  "yaw": -27.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "vip 2",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3",
   "yaw": 158.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 145.22,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB",
   "yaw": -61.13,
   "class": "AdjacentPanorama",
   "backwardYaw": -125.06,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_24637F8D_48C4_01DF_41CC_8D1AEEB40EF1",
  "this.overlay_73658D41_6142_408D_41C5_4C7F5931E905",
  "this.overlay_7E19D9C1_6C3B_7152_41C7_0C346484A829",
  "this.panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_tcap0"
 ]
},
{
 "id": "panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_camera",
 "initialSequence": "this.sequence_5BC0C6CC_47CC_035D_41AE_6877DF5E15A0",
 "initialPosition": {
  "yaw": 9,
  "class": "PanoramaCameraPosition",
  "pitch": -25.65
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_76FBD73B_67FD_07F0_41A9_D258A7E4749C",
 "initialSequence": "this.sequence_76FBC73B_67FD_07F0_41C6_5831E1CF08B2",
 "initialPosition": {
  "yaw": -18.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_776B16A8_67FD_0690_41A1_18F64B6A0004",
 "initialSequence": "this.sequence_776B06A8_67FD_0690_41AE_289EC3BCB1BB",
 "initialPosition": {
  "yaw": -118.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77A84651_67FD_19B3_41C2_F7ACB3B5A398",
 "initialPosition": {
  "yaw": 85.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_766FC5C1_67FD_1A90_41BA_E0F02DDEA13E",
 "initialPosition": {
  "yaw": -140.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_camera",
 "initialSequence": "this.sequence_7BEE3631_47C4_02C7_41C4_0BF0FCD07FF9",
 "initialPosition": {
  "yaw": 65.9,
  "class": "PanoramaCameraPosition",
  "pitch": -0.57
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_camera",
 "initialSequence": "this.sequence_7BE8A634_47C4_02CD_41CB_0D9C8C499BD1",
 "initialPosition": {
  "yaw": 105.54,
  "class": "PanoramaCameraPosition",
  "pitch": -20.62
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_5D305176_47C4_014D_41D1_200520CB552E",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "expo inside",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_559439B6_477C_01CD_41C6_310910C20AF6",
   "yaw": -22.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.12,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4",
   "yaw": 129.47,
   "class": "AdjacentPanorama",
   "backwardYaw": -34.88,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_5C2E0C0C_47C4_06DD_41C2_52329A50DF78",
  "this.overlay_5B75A6D7_47C4_034B_41BA_19FF1A7061EE",
  "this.overlay_6EB2BC90_61C3_CE93_419B_305D87BF7821",
  "this.panorama_5D305176_47C4_014D_41D1_200520CB552E_tcap0"
 ]
},
{
 "id": "camera_76DA053B_67FD_1BF0_41C1_2BD6BBD72955",
 "initialPosition": {
  "yaw": -168.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_72160A3E_47C4_033D_41C2_85C3093DC483_camera",
 "initialPosition": {
  "yaw": -19.78,
  "class": "PanoramaCameraPosition",
  "pitch": -71.62
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "map_D062F067_DD62_0885_41E4_9834BACA0E6D",
 "fieldOfViewOverlayInsideColor": "#FFFF33",
 "height": 3393,
 "label": "map outline white",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_t.png",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_D0C5729A_DD62_098F_41E1_BF5C923E1FA8",
  "this.overlay_CD37C41E_DD6E_0887_41E5_1239F4B30893",
  "this.overlay_CDAF1CC5_DD6E_1985_41E5_6FED3162F92D",
  "this.overlay_CC713233_DD62_089D_41D3_3FC3E3423E82",
  "this.overlay_CF9E9087_DDA6_0985_41DC_71993C828476",
  "this.overlay_CED9381E_DDA6_7887_41E3_BD0B569D70D3",
  "this.overlay_CF91A3C9_DDA2_0F8D_41DD_12D8628E37D5",
  "this.overlay_CECB63DC_DDA2_0F8B_41BA_4331D7839F31",
  "this.overlay_CE40686A_DDA2_388F_41E1_709257C3FF08",
  "this.overlay_C9A2F6FE_DDA2_0987_41A9_2D7029051828",
  "this.overlay_E6F77091_EB8C_C0A4_41CA_96CDC978E301",
  "this.overlay_E5BEFB81_EB8C_40A4_41D8_08B3393F1B42",
  "this.overlay_E5317620_EB8C_C3E4_41D6_43836FC63094",
  "this.overlay_E4F4FFCE_EB8D_C0BC_41D6_8E20C60B2908",
  "this.overlay_E42A1CE3_EB8C_C064_41D7_E44DD86AD942",
  "this.overlay_FBFC292E_EB94_41FC_41DA_2CE67F8664D3",
  "this.overlay_FBA09A10_EB94_C3A4_41DF_634CE3166B2E"
 ],
 "fieldOfViewOverlayRadiusScale": 0.06,
 "initialZoomFactor": 1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1809,
    "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D.png"
   },
   {
    "width": 340,
    "class": "ImageResourceLevel",
    "height": 193,
    "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_lq.png",
    "tags": "preload"
   }
  ]
 },
 "width": 6000,
 "maximumZoomFactor": 1.2
},
{
 "id": "camera_76E85523_67FD_1B90_41D3_1C2BBC771229",
 "initialPosition": {
  "yaw": 145.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_777DE42F_67FD_1990_41D1_09A9CC51E4B9",
 "initialPosition": {
  "yaw": -108.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "vrPointerSelectionTime": 2000,
 "minHeight": 1,
 "toolTipBorderSize": 1,
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "progressBackgroundOpacity": 1,
 "left": "0.52%",
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "borderRadius": 0,
 "playbackBarRight": 0,
 "minWidth": 1,
 "firstTransitionDuration": 0,
 "playbackBarHeadOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "playbackBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressRight": 0,
 "playbackBarBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "transitionMode": "blending",
 "toolTipShadowColor": "#333333",
 "progressHeight": 10,
 "progressBottom": 2,
 "progressBarBorderColor": "#000000",
 "playbackBarBorderSize": 0,
 "shadow": false,
 "toolTipOpacity": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadBorderRadius": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "top": "0.95%",
 "paddingRight": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadHeight": 15,
 "progressBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingLeft": 6,
 "progressBorderColor": "#000000",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadWidth": 6,
 "playbackBarBottom": 0,
 "progressLeft": 0,
 "progressOpacity": 1,
 "toolTipPaddingRight": 6,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "playbackBarHeight": 10,
 "toolTipFontColor": "#606060",
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "25.689%",
 "playbackBarHeadBorderColor": "#000000",
 "height": "23.138%",
 "id": "MapViewer",
 "toolTipFontStyle": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "propagateClick": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "MapViewer"
 },
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "progressBarOpacity": 1
},
{
 "id": "panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_camera",
 "initialSequence": "this.sequence_55889D4B_477C_015B_41C5_3A26BDEFBCCB",
 "initialPosition": {
  "yaw": -23.85,
  "class": "PanoramaCameraPosition",
  "pitch": -2.27
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_77A7F65F_67FD_19B0_41B9_909C72B57272",
 "initialPosition": {
  "yaw": -29.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_7732A6F2_67FD_0670_41D6_4EDC50199AEE",
 "initialSequence": "this.sequence_773256F2_67FD_0670_41C0_EF38BD4C9DC8",
 "initialPosition": {
  "yaw": 174.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_495109AE_46CE_BB55_41CA_C9DE0D856651",
 "label": "badge pickup",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_53F3059F_4744_01FB_41D0_FB4C556FDB90",
  "this.overlay_70A79B89_61CE_CB75_41A8_A5FFBF24DF65",
  "this.panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 4028.54,
   "angle": -118.22,
   "y": 2817.16,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_576D64C0_474E_EACD_418F_5627A63D5320",
 "hfovMax": 130,
 "hfovMin": "135%",
 "vfov": 180,
 "hfov": 360,
 "label": "restaurant 1",
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209"
  },
  {
   "panorama": "this.panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0",
   "yaw": -26.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 138.63,
   "distance": 1
  }
 ],
 "thumbnailUrl": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_t.jpg",
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "overlays": [
  "this.overlay_56414E2D_474B_D957_41AB_36A4D5A3D184",
  "this.overlay_24DB51FB_48C4_013B_41C3_C0E73CE60816",
  "this.overlay_7E746EAF_70B2_A9AF_41C8_9A119E37E325",
  "this.panorama_576D64C0_474E_EACD_418F_5627A63D5320_tcap0"
 ]
},
{
 "id": "playList_77F1437A_67FD_1E70_41B6_A5745A2A111E",
 "items": [
  {
   "media": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "class": "PlayList"
},
{
 "id": "camera_77959411_67FD_19B0_41B3_9D81EE721282",
 "initialSequence": "this.sequence_7795B411_67FD_19B0_41D6_D6B567F0B53F",
 "initialPosition": {
  "yaw": 153.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_774726E3_67FD_0690_41CB_A0725CDC5A4A",
 "initialPosition": {
  "yaw": 37.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "camera_775A544F_67FD_1990_41CE_6B5B47108F9F",
 "initialSequence": "this.sequence_775A444F_67FD_1990_41D1_3DDCEC583775",
 "initialPosition": {
  "yaw": 11.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942",
 "label": "outside",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_56932E34_474C_02CD_41C6_D08F2205CFCF",
  "this.panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0"
 ],
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "135%",
 "mapLocations": [
  {
   "x": 3368.63,
   "angle": -62.54,
   "y": 3009.52,
   "class": "PanoramaMapLocation",
   "map": "this.map_D062F067_DD62_0885_41E4_9834BACA0E6D"
  }
 ],
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_495109AE_46CE_BB55_41CA_C9DE0D856651"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "rowCount": 5,
      "colCount": 60,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_0/0/{row}_{column}.jpg"
     },
     {
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3,
      "colCount": 36,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_0/1/{row}_{column}.jpg"
     },
     {
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2,
      "colCount": 24,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_0/2/{row}_{column}.jpg"
     },
     {
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1,
      "colCount": 12,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ]
},
{
 "id": "panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_camera",
 "initialPosition": {
  "yaw": -155.94,
  "class": "PanoramaCameraPosition",
  "pitch": -8.56
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "panorama_1925243B_474C_073B_41C5_503370A08964_camera",
 "initialSequence": "this.sequence_1D722455_474C_074F_41CB_319E3246343E",
 "initialPosition": {
  "yaw": 155.42,
  "class": "PanoramaCameraPosition",
  "pitch": -13.02
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "paddingRight": 0,
 "minHeight": 0,
 "class": "UIComponent",
 "left": 0,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "data": {
  "name": "UIComponent3364"
 },
 "top": 0,
 "backgroundOpacity": 0.55,
 "bottom": 0,
 "borderSize": 0
},
{
 "paddingRight": 0,
 "minHeight": 0,
 "class": "ZoomImage",
 "left": 0,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "scaleMode": "custom",
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "backgroundColor": [],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage3365"
 },
 "top": 0,
 "backgroundOpacity": 1,
 "bottom": 0,
 "borderSize": 0
},
{
 "fontSize": "1.29vmin",
 "minHeight": 0,
 "paddingRight": 5,
 "class": "CloseButton",
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "iconLineWidth": 5,
 "paddingLeft": 5,
 "horizontalAlign": "center",
 "paddingTop": 5,
 "gap": 5,
 "shadowBlurRadius": 6,
 "fontColor": "#FFFFFF",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "id": "closeButtonPopupPanorama",
 "mode": "push",
 "pressedIconColor": "#888888",
 "shadowSpread": 1,
 "iconColor": "#000000",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 5,
 "verticalAlign": "middle",
 "label": "",
 "visible": false,
 "rollOverIconColor": "#666666",
 "propagateClick": false,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "iconHeight": 20,
 "iconWidth": 20,
 "data": {
  "name": "CloseButton3366"
 },
 "top": 10,
 "borderColor": "#000000",
 "backgroundOpacity": 0.3,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "borderSize": 0,
 "layout": "horizontal"
},
{
 "id": "overlay_63FA5DAC_47C4_01DD_41A5_8EFD098B8AD8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -111.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.03
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.03,
   "yaw": -111.35,
   "hfov": 8.77,
   "image": "this.AnimatedImageResource_FC84A451_ECCE_BED7_41BC_150CEED032CF",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401, this.camera_77801420_67FD_1990_41D4_3D1569F3E2FE); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_0A574A96_4744_03CD_41C8_97A70E0D6018",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_7212B813_47C4_0ECB_416E_C65F391D732C",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_0169CA1C_47C4_02FD_41CE_FDEFE1B584A3",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 151.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.37,
   "yaw": 151.94,
   "hfov": 8.85,
   "image": "this.AnimatedImageResource_FC805456_ECCE_BEDD_41CC_59452A0A72D6",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7216749F_47C4_07FB_41D1_496FECE7805B, this.camera_777D3699_67FD_06B0_419E_9A07386AD7DB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_0FF9A211_47C4_02C7_41C7_21CA0610021D",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -15.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.83
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.83,
   "yaw": -15.26,
   "hfov": 8.67,
   "image": "this.AnimatedImageResource_FC81C456_ECCE_BEDD_41E9_6FDC993E2F31",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347, this.camera_776B16A8_67FD_0690_41A1_18F64B6A0004); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_0CDF2E62_473C_0345_41D0_EFED06F7505B",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "hfov": 8.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "yaw": 116.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.95,
   "yaw": 116.23,
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_FC818456_ECCE_BEDD_41E0_F3C557A0EAE7",
   "distance": 50
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7, this.camera_7786068B_67FD_0690_41A8_20351E8D7A0A); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7018AFEA_61C7_CAB7_41D1_D1BB8C886E4B",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": 123.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.6
  }
 ],
 "items": [
  {
   "hfov": 34.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 820,
      "class": "ImageResourceLevel",
      "height": 354,
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_6_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -24.6,
   "yaw": 123.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E912837_6C3F_FF3E_41D9_F90017FF414A",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 33.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 15,
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_7_0_0_map.gif"
     }
    ]
   },
   "yaw": 153.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.25
  }
 ],
 "items": [
  {
   "hfov": 33.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 758,
      "class": "ImageResourceLevel",
      "height": 239,
      "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_7_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -17.25,
   "yaw": 153.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_7730249C_67FD_1AB0_41C9_75266337BB34",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_485322A6_4744_03CD_41C8_CDD5EE66A095",
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 100.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.9
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.9,
   "yaw": 100.63,
   "hfov": 7.85,
   "image": "this.AnimatedImageResource_FCBE945F_ECCE_BECB_41E1_71A36B37B369",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57863E08_474E_B95D_41CD_C8A2AFFC8553, this.camera_733E57BB_6146_4FFD_41B3_FA2BEA5718CE)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_493229D4_4744_014D_41A7_90DBFC23F88A",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -49.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.15,
   "yaw": -49.82,
   "hfov": 7.98,
   "image": "this.AnimatedImageResource_FCBEA460_ECCE_BEF5_41D0_C1581DF00BCC",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0, this.camera_77C84614_67FD_19B0_41D4_4F31AC38AED9); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_48C8320B_4744_02DB_41B6_D96F104132BC",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 03 Right"
 },
 "maps": [
  {
   "hfov": 6.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": -73.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.3
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 23.3,
   "yaw": -73.23,
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_FCBE4460_ECCE_BEF5_41E4_CA754AB28DE8",
   "distance": 50
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1, this.camera_77C2B624_67FD_1990_41D4_B34FE0150729); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_76F7B749_67FD_0790_4192_A93FEBD522ED",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_17F3CB8B_4744_01DB_41BE_4CA009C767A5",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -16.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.83
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.83,
   "yaw": -16.77,
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_FC837459_ECCE_BED7_41C5_B5A927B329FA",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7, this.camera_778B667C_67FD_0671_41C9_A92BD49A94BA); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_57687AD8_474D_BEFD_41BB_0F14612BB9D7",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "viewer_uid77FED366_67FD_1F90_41CB_6F88A0BFAECCVideoPlayer",
 "viewerArea": "this.viewer_uid77FED366_67FD_1F90_41CB_6F88A0BFAECC",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "id": "overlay_7A418047_47C4_3F4B_41CE_C4DC46B5F933",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 150.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.73,
   "yaw": 150.06,
   "hfov": 8.27,
   "image": "this.AnimatedImageResource_FC81A455_ECCE_BEDF_41CA_02A849BE45F1",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_2BE5FDAB_474C_01DB_417A_27EDE0E9F11D",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -117.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.25,
   "yaw": -117.58,
   "hfov": 8.56,
   "image": "this.AnimatedImageResource_FC817455_ECCE_BEDF_41E2_C6AACC75B27E",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6E1F57FD_61C6_5A8D_41BA_ABBE055F666D",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "yaw": -117.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.12
  }
 ],
 "items": [
  {
   "hfov": 32.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 763,
      "class": "ImageResourceLevel",
      "height": 448,
      "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0_HS_3_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -24.12,
   "yaw": -117.16
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_72160A3E_47C4_033D_41C2_85C3093DC483_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_79A1D8CF_47CC_0F5B_41AF_E2049334C0A1",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 150.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.73,
   "yaw": 150.06,
   "hfov": 8.27,
   "image": "this.AnimatedImageResource_FC80D455_ECCE_BEDF_41E4_6BEC178F30AB",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7838A2D1_47CC_0347_41AA_5E3967D58B7A",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -46.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.01
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.01,
   "yaw": -46.89,
   "hfov": 7.92,
   "image": "this.AnimatedImageResource_FC80F455_ECCE_BEDF_41ED_64AAD8B6E9DB",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3, this.camera_76D59774_67FD_0670_419E_92E6D2E3C7D4); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_7216749F_47C4_07FB_41D1_496FECE7805B_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_776E043F_67FD_19F0_41D6_C8111A12F36C",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_709802A3_47C4_03CB_41B8_5895C278BA1F",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -5.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.41,
   "yaw": -5.73,
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_FC81C454_ECCE_BEDD_41EC_09DABA8789CD",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D, this.camera_77D73605_67FD_1990_41C9_5E7A68ED409A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_5D312ADE_47C4_037D_41CB_2E043C4C33A6",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_6C66A09A_47CC_FFC5_41C4_C5268900CFAB",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -83.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.93,
   "yaw": -83.35,
   "hfov": 8.2,
   "image": "this.AnimatedImageResource_FC841451_ECCE_BED7_41ED_18E577067237",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4, this.camera_77A7F65F_67FD_19B0_41B9_909C72B57272); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6AC6A7AC_47CC_01DD_41C7_88553F3790A9",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 71.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.06
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.06,
   "yaw": 71.56,
   "hfov": 8.7,
   "image": "this.AnimatedImageResource_FC842452_ECCE_BED5_41DC_D2AF57A25D9E",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6974B7DF_47C4_017B_41D0_46B196447485, this.camera_77A84651_67FD_19B3_41C2_F7ACB3B5A398); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_204DF94F_4744_015B_41C2_4896AC91C5AB",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": -142.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.49,
   "yaw": -142.06,
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_FC87C452_ECCE_BED5_41DC_2731E430D84A",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401, this.camera_77B32643_67FD_1990_41CC_0BCC7F84A374); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6E1325FA_61C1_BE97_41C6_305008269E5C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 35.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": 72.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.86
  }
 ],
 "items": [
  {
   "hfov": 35.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 831,
      "class": "ImageResourceLevel",
      "height": 378,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_6_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -22.86,
   "yaw": 72.75
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_715DB2A3_61C1_BAB5_41D0_64F0FAB2366F",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 33.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_7_0_0_map.gif"
     }
    ]
   },
   "yaw": -83.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.54
  }
 ],
 "items": [
  {
   "hfov": 33.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 849,
      "class": "ImageResourceLevel",
      "height": 403,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_7_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -31.54,
   "yaw": -83.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6EE0D11C_61C2_D793_41D6_936DCC871F9C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 30.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_8_0_0_map.gif"
     }
    ]
   },
   "yaw": -140.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.13
  }
 ],
 "items": [
  {
   "hfov": 30.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 791,
      "class": "ImageResourceLevel",
      "height": 340,
      "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_8_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -34.13,
   "yaw": -140.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_63AEC244_47C4_034D_41C0_AE7D7A361085",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 152.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.35,
   "yaw": 152.62,
   "hfov": 7.89,
   "image": "this.AnimatedImageResource_FC857450_ECCE_BED5_41E8_8755024CC4BC",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816, this.camera_7730349C_67FD_1AB0_41D6_F87647C664E8); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_2FD5F18C_4744_01DD_41BD_67BCDA82386C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 63.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.66,
   "yaw": 63.56,
   "hfov": 8.71,
   "image": "this.AnimatedImageResource_FC851450_ECCE_BED5_41E9_57430C88E65E",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_2D266854_4744_0F4D_41CF_9E8A84E385F3",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": -117.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.94
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.94,
   "yaw": -117.57,
   "hfov": 8.32,
   "image": "this.AnimatedImageResource_FC853451_ECCE_BED7_41DE_367A2E73E5A5",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6, this.camera_772D14B5_67FD_1AF0_41C2_038EC5179D77); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6E00ED5D_61CF_CF8D_419B_FE52A88FD613",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_5_0_0_map.gif"
     }
    ]
   },
   "yaw": 63.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.26
  }
 ],
 "items": [
  {
   "hfov": 34.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 783,
      "class": "ImageResourceLevel",
      "height": 366,
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_5_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -20.26,
   "yaw": 63.9
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7FFF5146_70B2_F8D1_41C7_FEC5D0F6D4E0",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 33.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_7_0_0_map.gif"
     }
    ]
   },
   "yaw": -117.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.28
  }
 ],
 "items": [
  {
   "hfov": 33.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 839,
      "class": "ImageResourceLevel",
      "height": 466,
      "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_7_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -30.28,
   "yaw": -117.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_68C8B23E_47C4_033D_41B9_B1EE59EFFFC8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -94.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.56,
   "yaw": -94.74,
   "hfov": 8.45,
   "image": "this.AnimatedImageResource_FC877452_ECCE_BED5_41E0_DB7C78B25AB8",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6, this.camera_777DE42F_67FD_1990_41D1_09A9CC51E4B9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_74343107_47FC_1ECB_41BB_8692581980F2",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": 11.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.27,
   "yaw": 11.15,
   "hfov": 8.36,
   "image": "this.AnimatedImageResource_FC871453_ECCE_BEDB_41EA_E052D6047F9F",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347, this.camera_776E143F_67FD_19F0_41D2_FE16DA70BE3C); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7F90F1F3_70B3_FBB7_41D9_BE28F2769804",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": -94.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.75
  }
 ],
 "items": [
  {
   "hfov": 32.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 784,
      "class": "ImageResourceLevel",
      "height": 390,
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_6_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -26.75,
   "yaw": -94.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E3324DC_70B2_B9F2_41CD_A9DC3B36204E",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_7_0_0_map.gif"
     }
    ]
   },
   "yaw": 10.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.08
  }
 ],
 "items": [
  {
   "hfov": 32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 789,
      "class": "ImageResourceLevel",
      "height": 307,
      "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_7_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -30.08,
   "yaw": 10.56
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_6974B7DF_47C4_017B_41D0_46B196447485_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_5F8882CC_474C_035D_41C9_36E7D560C824",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 141.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.56,
   "yaw": 141.03,
   "hfov": 7.29,
   "image": "this.AnimatedImageResource_FCBE945E_ECCE_BECD_41E6_38A247224099",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5, this.camera_7767D6B7_67FD_06F0_41CC_13E59908D6A0); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_7772D699_67FD_06B0_41D0_36440DC06D8E",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_7792966D_67FD_1990_41C1_FDFB95010D5E",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77D72605_67FD_1990_41A4_84A16BC4B29D",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_76924595_67FD_1AB0_41D9_9A10005CED0F",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_774836D5_67FD_06B0_41BA_3ADC247B796B",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_5BC0E6CD_47CC_035F_41BD_40C5A8795C6B",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_775C26C6_67FD_0690_41D6_D8F92188D65F",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77C87614_67FD_19B0_41C7_6C7F450BBC1D",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77D1E5F6_67FD_1A70_41B0_5C2C5789267D",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_15F57E95_473C_03CF_41BA_8E42873B55A1",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 154.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.34
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.34,
   "yaw": 154.01,
   "hfov": 7.58,
   "image": "this.AnimatedImageResource_FC800458_ECCE_BED5_41A5_3C45732086C9",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3, this.camera_77AC63F1_67FD_1E70_41C0_FA5C9CAD5999); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_0BFE879C_473C_01FD_41D1_1441A534E5A2",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -89.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.31,
   "yaw": -89.25,
   "hfov": 8.04,
   "image": "this.AnimatedImageResource_FC802458_ECCE_BED5_41C2_FEF111F552B0",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_091933A6_4744_01CD_41CF_4BBA8756EF22, this.camera_77B813CF_67FD_1E90_41C2_C667CF2DCB1A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_0B65F7D2_473C_0145_4198_6FA2CAB9F4C6",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": -10.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.64,
   "yaw": -10.18,
   "hfov": 8.67,
   "image": "this.AnimatedImageResource_FC83C458_ECCE_BED5_41D6_1E4244549829",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35, this.camera_77B7D3E0_67FD_1E90_41D3_887F00B0EC49); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_71E9A105_61C2_B77D_41D8_6CE9C67EB32B",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 29.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": -88.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.28
  }
 ],
 "items": [
  {
   "hfov": 29.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 744,
      "class": "ImageResourceLevel",
      "height": 321,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_6_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -33.28,
   "yaw": -88.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7FDA6801_6C39_5ED2_41D5_CB18BCD99B38",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 35.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_9_0_0_map.gif"
     }
    ]
   },
   "yaw": 154.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.81
  }
 ],
 "items": [
  {
   "hfov": 35.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 1007,
      "class": "ImageResourceLevel",
      "height": 446,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_9_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -41.81,
   "yaw": 154.1
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E648B52_70BE_A8F1_4186_A632EC104CEE",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 35.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_10_0_0_map.gif"
     }
    ]
   },
   "yaw": -8.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.66
  }
 ],
 "items": [
  {
   "hfov": 35.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 829,
      "class": "ImageResourceLevel",
      "height": 350,
      "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_10_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -22.66,
   "yaw": -8.67
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_57685AD7_474D_BEF3_41CF_55796CD70677",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_7F99BEC6_47C4_034D_41BA_6F36E3299603",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 148.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.09,
   "yaw": 148.85,
   "hfov": 8.25,
   "image": "this.AnimatedImageResource_FC869453_ECCE_BEDB_41BF_171C6BCCEE21",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0, this.camera_7732A6F2_67FD_0670_41D6_4EDC50199AEE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E6B1013_47C4_1ECB_41C3_D6C18D325281",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 57.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.14,
   "yaw": 57.9,
   "hfov": 8.47,
   "image": "this.AnimatedImageResource_FC865453_ECCE_BEDB_41EA_C9B74AD341AE",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_2E57E5C2_4744_0145_41C0_13D881195FC5",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "yaw": -126.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.14,
   "yaw": -126.62,
   "hfov": 8.47,
   "image": "this.AnimatedImageResource_FC867454_ECCE_BEDD_41D4_6732AEA45691",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_70E9D433_61C1_BD95_41D2_0E883889A0D9",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": 58.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.53
  }
 ],
 "items": [
  {
   "hfov": 34.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 824,
      "class": "ImageResourceLevel",
      "height": 419,
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_6_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -26.53,
   "yaw": 58.88
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_295609F8_2482_A4B9_41B7_13E2494486AF",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 37.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_8_0_0_map.gif"
     }
    ]
   },
   "yaw": -126.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.77
  }
 ],
 "items": [
  {
   "hfov": 37.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 956,
      "class": "ImageResourceLevel",
      "height": 505,
      "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_8_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -32.77,
   "yaw": -126.47
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_5F6D1147_475C_014B_41C9_E4F93AA570C0",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "maps": [
  {
   "hfov": 10.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 26.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12,
   "yaw": 26.09,
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_FC8BC44B_ECCE_BECB_41EC_5F7E2CB3D636",
   "distance": 50
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6FCC0465_6143_C095_41D6_B88FB46B334C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -125.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.31,
   "yaw": -125.06,
   "hfov": 7.97,
   "image": "this.AnimatedImageResource_FC8BF44B_ECCE_BECB_41EA_F2DBA623C2B4",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE, this.camera_77C5A634_67FD_19F0_41BF_85EF56743150); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E2EA60A_70B6_9851_41D9_C80230A071A4",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 15,
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": -125.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.96
  }
 ],
 "items": [
  {
   "hfov": 34.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 917,
      "class": "ImageResourceLevel",
      "height": 374,
      "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0_HS_4_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -35.96,
   "yaw": -125.18
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_5BDCEB87_47C4_01CB_41C3_94012C521644",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -34.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.19
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.19,
   "yaw": -34.88,
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_FC8A144D_ECCE_BECF_41E5_B4B0FA1864E1",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D305176_47C4_014D_41D1_200520CB552E, this.camera_77251710_67FD_07B0_41D3_068907F15B10); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_58799589_47C4_01C7_41CC_0ACF161D1569",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 39.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.33
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.33,
   "yaw": 39.7,
   "hfov": 8.35,
   "image": "this.AnimatedImageResource_FC8A344D_ECCE_BECF_41C7_4269A812F28D",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D, this.camera_7710A71E_67FD_07B0_41CE_01363AA54BEC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_66AC903C_47C4_1F3D_4176_A9AFE7296C13",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_5_0_0_map.gif"
     }
    ]
   },
   "yaw": 150.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.17,
   "yaw": 150.72,
   "hfov": 8.73,
   "image": "this.AnimatedImageResource_FC85D44D_ECCE_BECF_41E8_825DBACAB66A",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6, this.camera_77290701_67FD_0790_41CA_4BF46957D5B8); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E7988F1_70B6_A9B3_41CD_7A87F26B5441",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 35.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 15,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_11_0_0_map.gif"
     }
    ]
   },
   "yaw": 39.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.79
  }
 ],
 "items": [
  {
   "hfov": 35.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 863,
      "class": "ImageResourceLevel",
      "height": 428,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_11_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -29.79,
   "yaw": 39.34
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E17674F_70B1_B8EF_41C6_4E04132B0F7C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 38.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_12_0_0_map.gif"
     }
    ]
   },
   "yaw": 151.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.54
  }
 ],
 "items": [
  {
   "hfov": 38.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 880,
      "class": "ImageResourceLevel",
      "height": 411,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_12_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -22.54,
   "yaw": 151.07
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_E16AF6A4_F0A4_81FC_41E8_04F0CA5F8547",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 5.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_14_0_0_map.gif"
     }
    ]
   },
   "yaw": 67.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.3
  }
 ],
 "items": [
  {
   "hfov": 5.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119,
      "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_14_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 10.3,
   "yaw": 67.21
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E10CB57A_F0EC_8354_41D2_B31C20E51C64, {'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'paddingLeft':5,'iconColor':'#000000','pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'paddingBottom':5,'rollOverIconColor':'#666666','rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'iconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'borderColor':'#000000','rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'paddingTop':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_E5A18CB4_F0E4_81DC_41D8_CB671A04576F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_63B7B2EB_47C4_035B_4199_AFFE99DAB85C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -21.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.31,
   "yaw": -21.59,
   "hfov": 8.69,
   "image": "this.AnimatedImageResource_FC8A444F_ECCE_BECB_41B5_B5A4B86A2D46",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D, this.camera_76FBD73B_67FD_07F0_41A9_D258A7E4749C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_63115B94_47C4_01CD_41C8_AC03723E32BE",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 145.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.36
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.36,
   "yaw": 145.22,
   "hfov": 8.72,
   "image": "this.AnimatedImageResource_FC8A644F_ECCE_BECB_41C4_F0B5046AF571",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE, this.camera_770C872C_67FD_0790_417A_D10D64146378); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_629301A8_6C19_51D2_41C1_4736E4610265",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -118.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.13
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.13,
   "yaw": -118.24,
   "hfov": 8.85,
   "image": "this.AnimatedImageResource_FC8E5448_ECCE_BE35_41EB_2CFF886E8928",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_629AB07D_6C19_AF32_41C8_C11EA7DFFD81",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -118.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.38
  }
 ],
 "items": [
  {
   "hfov": 32.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 712,
      "class": "ImageResourceLevel",
      "height": 306,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_1_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -16.38,
   "yaw": -118.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_62189BBC_6C19_D132_41D5_56500FF1B247",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": -56.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9,
   "yaw": -56.43,
   "hfov": 8.86,
   "image": "this.AnimatedImageResource_FC8E0448_ECCE_BE35_41E5_94C4E6F5B80E",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_621CE477_6C19_773E_41C4_ACD4381EC735",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "yaw": -58.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.88
  }
 ],
 "items": [
  {
   "hfov": 32.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 728,
      "class": "ImageResourceLevel",
      "height": 244,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_3_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -17.88,
   "yaw": -58.85
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6219C3B5_6C1A_D132_41D5_F936FF20911E",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": -15.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.5
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -8.5,
   "yaw": -15.64,
   "hfov": 8.87,
   "image": "this.AnimatedImageResource_FC89D448_ECCE_BE35_41DD_5D45010D752F",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_62020513_6C1B_76F6_41CC_66DD95815718",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": 25.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.18,
   "yaw": 25.39,
   "hfov": 8.85,
   "image": "this.AnimatedImageResource_FC89E448_ECCE_BE35_41EC_38B4CE8BD380",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6207531D_6C19_52F2_41D5_B06C914E5811",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "maps": [
  {
   "hfov": 10.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_8_0_0_map.gif"
     }
    ]
   },
   "yaw": 66.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.67,
   "yaw": 66.57,
   "hfov": 10.33,
   "image": "this.AnimatedImageResource_FC898448_ECCE_BE35_41D4_FD0018B125F6",
   "distance": 50
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7D586699_70B1_7873_41C6_43F7693AF9A8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 30.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_10_0_0_map.gif"
     }
    ]
   },
   "yaw": 62.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.71
  }
 ],
 "items": [
  {
   "hfov": 30.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 676,
      "class": "ImageResourceLevel",
      "height": 265,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_10_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -18.71,
   "yaw": 62.78
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_D3938D67_DD25_D311_41DB_B6F6196E93F8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_11_0_0_map.gif"
     }
    ]
   },
   "yaw": 25.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.01
  }
 ],
 "items": [
  {
   "hfov": 34.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 765,
      "class": "ImageResourceLevel",
      "height": 340,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_11_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -17.01,
   "yaw": 25.88
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_D38C3B50_DD25_770F_41E2_32A4D770C537",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 30.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_12_0_0_map.gif"
     }
    ]
   },
   "yaw": -15.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.75
  }
 ],
 "items": [
  {
   "hfov": 30.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 682,
      "class": "ImageResourceLevel",
      "height": 307,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_12_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -16.75,
   "yaw": -15.29
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_CDDACAF1_DD2F_36F1_41CF_45948A6A55CA",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_13_0_0_map.gif"
     }
    ]
   },
   "yaw": 77.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.59
  }
 ],
 "items": [
  {
   "hfov": 10.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 219,
      "class": "ImageResourceLevel",
      "height": 211,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_13_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -8.59,
   "yaw": 77.4
  }
 ],
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_CF6894D2_DD2F_D133_41E7_A8A5EB7525BE, {'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'paddingLeft':5,'iconColor':'#000000','pressedIconHeight':20,'pressedIconColor':'#888888','iconHeight':20,'paddingBottom':5,'rollOverIconColor':'#666666','rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'iconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconWidth':20,'borderColor':'#000000','rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'backgroundOpacity':0.3,'paddingTop':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_6E2AD1DA_67F3_1AB0_41D2_2FE86995DB1D, this.video_CFB0F536_DD2D_D373_41EA_E8F34A7DC1A0, this.playList_77FD1369_67FD_1F90_41D6_D18B6001989C, '50%', '50%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_E2978965_ECCA_76FF_41E3_56C5445E760C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_14_0_0_map.gif"
     }
    ]
   },
   "yaw": 145.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.12
  }
 ],
 "items": [
  {
   "hfov": 4.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 123,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_14_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -45.12,
   "yaw": 145.98
  }
 ],
 "areas": [
  {
   "click": "this.openLink('files/file_FC5584A7_ECCE_BE7B_4175_D1B8D40D5089.pdf', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_FC4F75F8_ECD6_99D5_41CF_10F9D725C384",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 4.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_16_0_0_map.gif"
     }
    ]
   },
   "yaw": -174.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.74
  }
 ],
 "items": [
  {
   "hfov": 4.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 123,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_16_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -39.74,
   "yaw": -174.04
  }
 ],
 "areas": [
  {
   "click": "this.openLink('files/file_FC5594A8_ECCE_BE75_41AB_A377176E0C1B.pdf', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_FC6FB9F8_ECD5_A9D5_41E6_9B42ECDF451A",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 21.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_18_0_0_map.gif"
     }
    ]
   },
   "yaw": 146.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -55.12
  }
 ],
 "items": [
  {
   "hfov": 21.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 784,
      "class": "ImageResourceLevel",
      "height": 312,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_18_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -55.12,
   "yaw": 146.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_FC87B384_ECD6_BA3D_41A8_086DFA383925",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 24.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_19_0_0_map.gif"
     }
    ]
   },
   "yaw": -173.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.08
  }
 ],
 "items": [
  {
   "hfov": 24.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 825,
      "class": "ImageResourceLevel",
      "height": 319,
      "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_19_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -51.08,
   "yaw": -173.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "sequence_5BC90C8C_47CC_07DD_41CD_A14BF3D73274",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_5BF9206A_47C4_3F45_41C5_41993E7B750B",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_576FDAD8_474D_BEFD_41C6_F06DCF175987",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_778B167D_67FD_0670_41C6_A562B06E72AF",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_1DEC3592_475C_01C5_41C2_002A240A2101",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -11.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.11
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.11,
   "yaw": -11.68,
   "hfov": 8.25,
   "image": "this.AnimatedImageResource_FCBF845D_ECCE_BECF_41D4_FD333F71384C",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA, this.camera_76BC178F_67FD_0690_41AC_6F63047A70B9); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_7216FE44_47C4_034D_41CF_4876F81C852B_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_770CB72C_67FD_0790_41CC_3DD141A8F8F7",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_72120814_47C4_0ECD_41C6_DE3B0BBA442B",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_78DF9BE4_47CC_014D_4198_6E8960D545FB",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 152.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.71,
   "yaw": 152.5,
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_FC810457_ECCE_BEDB_41B7_718E2DC4CC5F",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6974B7DF_47C4_017B_41D0_46B196447485, this.camera_76DA053B_67FD_1BF0_41C1_2BD6BBD72955); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_06BE3649_47CC_0347_41CA_58A6DA1114C1",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 61.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.97,
   "yaw": 61.37,
   "hfov": 8.48,
   "image": "this.AnimatedImageResource_FC812457_ECCE_BEDB_41B2_B518BB4E544C",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3, this.camera_76D4B55A_67FD_1BB0_419B_49A2E844062B); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_0435A6C1_47C4_0347_41D0_09165FB903F8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": -99.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.38
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.38,
   "yaw": -99.05,
   "hfov": 8.76,
   "image": "this.AnimatedImageResource_FC80E457_ECCE_BEDB_41AC_E04723EF2162",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_70E3CF8A_61C6_4B77_41D2_8A907E715CC4",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_7_0_0_map.gif"
     }
    ]
   },
   "yaw": -98.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.68
  }
 ],
 "items": [
  {
   "hfov": 32.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 725,
      "class": "ImageResourceLevel",
      "height": 440,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_7_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -19.68,
   "yaw": -98.74
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_70B2F6A5_61C1_FABD_41D4_E91EE476D82E",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 36.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_8_0_0_map.gif"
     }
    ]
   },
   "yaw": 153.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.75
  }
 ],
 "items": [
  {
   "hfov": 36.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 853,
      "class": "ImageResourceLevel",
      "height": 475,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_8_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -24.75,
   "yaw": 153.51
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E7AA3D1_6C3E_B172_41B3_88AD61CAED20",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 35.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_9_0_0_map.gif"
     }
    ]
   },
   "yaw": 62.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.97
  }
 ],
 "items": [
  {
   "hfov": 35.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 847,
      "class": "ImageResourceLevel",
      "height": 265,
      "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_9_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -27.97,
   "yaw": 62.14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_77250710_67FD_07B0_41CB_1A9F0BF8B07C",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_5BF9006A_47C4_3F45_41C1_7DA3F3E6058C",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_7BEFB632_47C4_02C5_41CC_DFB247D4F7C0",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "PanoramaPlayListItem_77F4B37F_67FD_1E70_41D6_80C10BE325F8",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77F4B37F_67FD_1E70_41D6_80C10BE325F8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "camera": "this.panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942"
},
{
 "id": "PanoramaPlayListItem_77F7A380_67FD_1E90_41D0_EEB477F93310",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77F7A380_67FD_1E90_41D0_EEB477F93310, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "camera": "this.panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_495109AE_46CE_BB55_41CA_C9DE0D856651"
},
{
 "id": "PanoramaPlayListItem_77F71381_67FD_1E90_4137_00FF79DB7AD0",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77F71381_67FD_1E90_4137_00FF79DB7AD0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "camera": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209"
},
{
 "id": "PanoramaPlayListItem_77EB0383_67FD_1E90_41D6_AB9E60C72ABF",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77EB0383_67FD_1E90_41D6_AB9E60C72ABF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "camera": "this.panorama_559439B6_477C_01CD_41C6_310910C20AF6_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_559439B6_477C_01CD_41C6_310910C20AF6"
},
{
 "id": "PanoramaPlayListItem_77E85384_67FD_1E90_41C2_D0C65A9CF557",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77E85384_67FD_1E90_41C2_D0C65A9CF557, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "camera": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4"
},
{
 "id": "PanoramaPlayListItem_77E80384_67FD_1E90_4181_1BF6F6F05568",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77E80384_67FD_1E90_4181_1BF6F6F05568, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "camera": "this.panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D"
},
{
 "id": "PanoramaPlayListItem_77E91386_67FD_1E90_41CD_5B8A9595EC13",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77E91386_67FD_1E90_41CD_5B8A9595EC13, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "camera": "this.panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401"
},
{
 "id": "PanoramaPlayListItem_77EE5386_67FD_1E90_41CD_4BD073421F01",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77EE5386_67FD_1E90_41CD_4BD073421F01, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "camera": "this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6"
},
{
 "id": "PanoramaPlayListItem_77EE0387_67FD_1E90_41D4_624E6174C81F",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77EE0387_67FD_1E90_41D4_624E6174C81F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "camera": "this.panorama_6974B7DF_47C4_017B_41D0_46B196447485_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_6974B7DF_47C4_017B_41D0_46B196447485"
},
{
 "id": "PanoramaPlayListItem_77EFE387_67FD_1E90_41D2_4BA540EDD50B",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77EFE387_67FD_1E90_41D2_4BA540EDD50B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "camera": "this.panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D"
},
{
 "id": "PanoramaPlayListItem_77EF3388_67FD_1E90_41CE_2FBE7C22269C",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77EF3388_67FD_1E90_41CE_2FBE7C22269C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
 "camera": "this.panorama_72160A3E_47C4_033D_41C2_85C3093DC483_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_72160A3E_47C4_033D_41C2_85C3093DC483"
},
{
 "id": "PanoramaPlayListItem_77ECA389_67FD_1E90_41D9_FC45507ED921",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77ECA389_67FD_1E90_41D9_FC45507ED921, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
 "camera": "this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3"
},
{
 "id": "PanoramaPlayListItem_77EDB38A_67FD_1E90_4173_F7522EA561C6",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77EDB38A_67FD_1E90_4173_F7522EA561C6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
 "camera": "this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7"
},
{
 "id": "PanoramaPlayListItem_77E3E38C_67FD_1E90_41D4_0849BF651C16",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_77E3E38C_67FD_1E90_41D4_0849BF651C16, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27)",
 "camera": "this.panorama_7216FE44_47C4_034D_41CF_4876F81C852B_camera",
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_7216FE44_47C4_034D_41CF_4876F81C852B"
},
{
 "id": "sequence_7710571E_67FD_07B0_41D2_E8D9480ED6DD",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_7767C6B7_67FD_06F0_41D1_48041A45E8A4",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_768295A4_67FD_1A90_41BB_3557FCB2B308",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_48A13D4D_4744_015E_41AA_9043EFE62052",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02a"
 },
 "maps": [
  {
   "hfov": 8.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 161.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.12
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.12,
   "yaw": 161.84,
   "hfov": 8.01,
   "image": "this.AnimatedImageResource_FCB9A461_ECCE_BEF7_41DC_B7F7F7C08DEE",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B, this.camera_76E2E758_67FD_07B0_41D8_7F12F33C3396); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_57950088_4744_1FC5_416C_694BD0EE333C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02a"
 },
 "maps": [
  {
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -168.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.16,
   "yaw": -168.63,
   "hfov": 8.25,
   "image": "this.AnimatedImageResource_FCB94461_ECCE_BEF7_41D3_5478A31B6DCF",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0, this.camera_76F78749_67FD_0790_41D2_ABBD3BEE3751); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_249E853B_48C4_013B_41BB_C8FD3EDAD2C8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": 80.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.84,
   "yaw": 80.27,
   "hfov": 8.43,
   "image": "this.AnimatedImageResource_FCB96461_ECCE_BEF7_41E0_1D197EF04FC7",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7FBA2D53_70B1_68F7_41D2_FE1BAD915D9B",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_5_0_0_map.gif"
     }
    ]
   },
   "yaw": 80.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.85
  }
 ],
 "items": [
  {
   "hfov": 32.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 784,
      "class": "ImageResourceLevel",
      "height": 421,
      "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_5_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -27.85,
   "yaw": 80.81
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_55865D4E_477C_015D_41C2_B5EC6E245961",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77C2A625_67FD_1990_41B2_329A31FC5938",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_4B85CA76_473C_034D_41A9_56A289BC5DE7",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 138.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.24
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.24,
   "yaw": 138.63,
   "hfov": 7.82,
   "image": "this.AnimatedImageResource_FCBF745F_ECCE_BECB_41E0_312522016554",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_576D64C0_474E_EACD_418F_5627A63D5320, this.camera_77959411_67FD_19B0_41B3_9D81EE721282); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_73EAD657_617E_40B5_41C6_79C820A9C539",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "yaw": 24.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.97,
   "yaw": 24.78,
   "hfov": 8.25,
   "image": "this.AnimatedImageResource_FCBF145F_ECCE_BECB_41ED_2CD9BB22BFA4",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_576FFAD8_474D_BEFD_417F_DB551430B6C3",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77B803CF_67FD_1E90_41BE_CCD0278E5B56",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_770CD4ED_67FD_1A90_41D5_2EAB96E4F425",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_629939A2_47C4_01C5_41B1_B77D54BE628C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 161.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.55
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.55,
   "yaw": 161.54,
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_FC85544E_ECCE_BECD_41EB_74181526D046",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3, this.camera_767C85B3_67FD_1AF0_4153_10A41963244E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6318EE6E_47C4_035D_41D1_A0FF8858DB0C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 75.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.99
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.99,
   "yaw": 75.75,
   "hfov": 8.19,
   "image": "this.AnimatedImageResource_FC8AC44E_ECCE_BECD_41A0_3A0CDD94A24C",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4, this.camera_766FC5C1_67FD_1A90_41BA_E0F02DDEA13E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6EAB4288_61CE_7573_41D5_D93E7CBAB0DD",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "yaw": 76.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.06
  }
 ],
 "items": [
  {
   "hfov": 32.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 808,
      "class": "ImageResourceLevel",
      "height": 333,
      "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0_HS_3_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -31.06,
   "yaw": 76.63
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_5ED46158_4744_0145_41CE_E49FEC47BF0D",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 149.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.41,
   "yaw": 149.76,
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_FCBF645D_ECCE_BECF_416A_7618F7DD5728",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207, this.camera_7792F66D_67FD_1990_41CD_7CF27761E4D1); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_5ED76956_474C_014D_41C1_9FB3184FC4B1",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": 36.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.71,
   "yaw": 36.47,
   "hfov": 8.33,
   "image": "this.AnimatedImageResource_FCBF045D_ECCE_BECF_41E6_076068E6F5C4",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7F50B599_70B3_9873_41CE_751F89477363",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": 36.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.24
  }
 ],
 "items": [
  {
   "hfov": 32.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 784,
      "class": "ImageResourceLevel",
      "height": 421,
      "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0_HS_4_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -28.24,
   "yaw": 36.91
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_767CB5B3_67FD_1AF7_41D6_EF62B190CE16",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_1C3A5B67_474C_014B_41C6_1A557DF8B5CA",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 38.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.27,
   "yaw": 38.21,
   "hfov": 8.56,
   "image": "this.AnimatedImageResource_FCBD745B_ECCE_BECB_4172_755AA0482D9C",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_2C250036_4744_1ECD_41CC_8415C012978E",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": -113.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.58,
   "yaw": -113.35,
   "hfov": 8.64,
   "image": "this.AnimatedImageResource_FCBD345B_ECCE_BECB_41BF_56E7F2C14BFB",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_70850E21_61DE_4DB5_41D7_B918E406DDE8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 35.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_5_0_0_map.gif"
     }
    ]
   },
   "yaw": -112.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.86
  }
 ],
 "items": [
  {
   "hfov": 35.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 832,
      "class": "ImageResourceLevel",
      "height": 370,
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_5_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -22.86,
   "yaw": -112.63
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_29553D02_2482_7D49_41BE_D4A2B41CBAFE",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 39.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_7_0_0_map.gif"
     }
    ]
   },
   "yaw": 39.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.17
  }
 ],
 "items": [
  {
   "hfov": 39.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 947,
      "class": "ImageResourceLevel",
      "height": 376,
      "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_7_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -27.17,
   "yaw": 39.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_1925243B_474C_073B_41C5_503370A08964_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_1EBD4CC0_4744_0745_41C8_F4A11B189680",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 167.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.21,
   "yaw": 167.94,
   "hfov": 8.52,
   "image": "this.AnimatedImageResource_FC832459_ECCE_BED7_41A2_8B195D589144",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7, this.camera_76B6E578_67FD_1A70_41D4_0E648BB5DFA2); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_1F19922E_4744_02DD_4183_DB994FA1E02F",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -38.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.6,
   "yaw": -38.98,
   "hfov": 8.34,
   "image": "this.AnimatedImageResource_FC82C459_ECCE_BED7_41DD_8C835814898C",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA, this.camera_76925595_67FD_1AB0_4183_27E304BEC6E3); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_2B1A7D93_4744_01CB_41D1_F3905DB549C4",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_8_0_0_map.gif"
     }
    ]
   },
   "yaw": -142.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.77,
   "yaw": -142.54,
   "hfov": 8.33,
   "image": "this.AnimatedImageResource_68028359_67FD_1FB0_41D8_8DBD9EF1E5E3",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF, this.camera_76A00586_67FD_1A90_4180_F9D00765ADC4); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_718AE58F_61C2_5E8D_41A2_8251B6882AA9",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 15,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_10_0_0_map.gif"
     }
    ]
   },
   "yaw": -37.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.64
  }
 ],
 "items": [
  {
   "hfov": 32.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 802,
      "class": "ImageResourceLevel",
      "height": 322,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_10_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -29.64,
   "yaw": -37.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_68C77831_67F5_09F0_41AF_49C0B8EC8F64",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 31.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_15_0_0_map.gif"
     }
    ]
   },
   "yaw": 168.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.9
  }
 ],
 "items": [
  {
   "hfov": 31.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 746,
      "class": "ImageResourceLevel",
      "height": 360,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_15_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -25.9,
   "yaw": 168.94
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_29634CC3_2483_DCCF_41A4_61AF78D2481D",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 33.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_14_0_0_map.gif"
     }
    ]
   },
   "yaw": -149.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.51
  }
 ],
 "items": [
  {
   "hfov": 33.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 851,
      "class": "ImageResourceLevel",
      "height": 378,
      "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_14_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -32.51,
   "yaw": -149.08
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_76B68578_67FD_1A70_41D9_C81712AE673F",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "vrPointerSelectionTime": 2000,
 "minHeight": 50,
 "toolTipBorderSize": 1,
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "progressBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "borderRadius": 0,
 "playbackBarOpacity": 1,
 "minWidth": 100,
 "firstTransitionDuration": 0,
 "playbackBarHeadOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressRight": 0,
 "playbackBarBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "transitionMode": "blending",
 "toolTipShadowColor": "#333333",
 "progressHeight": 10,
 "progressBottom": 2,
 "progressBarBorderColor": "#000000",
 "playbackBarBorderSize": 0,
 "shadow": false,
 "toolTipOpacity": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadBorderRadius": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingLeft": 6,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadHeight": 15,
 "progressBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "toolTipPaddingBottom": 4,
 "progressBorderColor": "#000000",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadWidth": 6,
 "playbackBarBottom": 0,
 "progressLeft": 0,
 "progressOpacity": 1,
 "toolTipPaddingRight": 6,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "playbackBarHeight": 10,
 "toolTipFontColor": "#606060",
 "toolTipShadowOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "id": "viewer_uid77FED366_67FD_1F90_41CB_6F88A0BFAECC",
 "toolTipFontStyle": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "propagateClick": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "ViewerArea3363"
 },
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "progressBarOpacity": 1
},
{
 "id": "sequence_72129814_47C4_0ECD_41AE_C886426FF98C",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_55867D4E_477C_015D_41BF_E38477EC9E14",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_2EDC1BF0_4744_0145_4163_9FD792383890",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 144.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.78
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.78,
   "yaw": 144.59,
   "hfov": 8.49,
   "image": "this.AnimatedImageResource_FC82145A_ECCE_BED5_41D4_FD50267ABD18",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_2B0ED8A7_4744_0FCB_41CA_990924A11C22",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": -122.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.59,
   "yaw": -122.02,
   "hfov": 8.5,
   "image": "this.AnimatedImageResource_FC82345A_ECCE_BED5_41E4_D32AC7F289F9",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_296D2D11_473C_06C7_41D0_B2ABDA779DF6",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": 61.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.65,
   "yaw": 61.37,
   "hfov": 8.54,
   "image": "this.AnimatedImageResource_FCBDC45B_ECCE_BECB_41D0_3AA8EFA77475",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35, this.camera_774726E3_67FD_0690_41CB_A0725CDC5A4A); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_702C4E27_61DF_CDBD_41A5_FF7B9EF4E573",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_8_0_0_map.gif"
     }
    ]
   },
   "yaw": -121.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.89
  }
 ],
 "items": [
  {
   "hfov": 34.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 832,
      "class": "ImageResourceLevel",
      "height": 311,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_8_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -26.89,
   "yaw": -121.89
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7F2F700E_70BE_9851_41CB_A57D71C19043",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 35.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_9_0_0_map.gif"
     }
    ]
   },
   "yaw": 144.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.92
  }
 ],
 "items": [
  {
   "hfov": 35.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 855,
      "class": "ImageResourceLevel",
      "height": 399,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_9_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -27.92,
   "yaw": 144.99
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E49C09D_70B1_9873_41A3_CB838006ABAC",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_10_0_0_map.gif"
     }
    ]
   },
   "yaw": 62.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.92
  }
 ],
 "items": [
  {
   "hfov": 32.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 759,
      "class": "ImageResourceLevel",
      "height": 330,
      "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_10_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -25.92,
   "yaw": 62.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_7786368B_67FD_0690_41C7_7B8005F8796B",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_1DEBD3EB_475C_015B_41CF_07783048E354",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 167.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.23,
   "yaw": 167.75,
   "hfov": 8.36,
   "image": "this.AnimatedImageResource_FCBCB45C_ECCE_BECD_41BE_5D86A8F714B0",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7BECC041_47C4_1F47_41CB_209499F0CD35, this.camera_771C94CE_67FD_1A90_41D8_F75AAB26B210); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_1BAD18D9_475C_0F47_41C2_A105CA595DA1",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": 57.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.42
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.42,
   "yaw": 57.42,
   "hfov": 8.35,
   "image": "this.AnimatedImageResource_FCBC545C_ECCE_BECD_41E2_E90CCD28EB9F",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7216FE44_47C4_034D_41CF_4876F81C852B, this.camera_770F24ED_67FD_1A90_41C4_1F0318E08C15); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_1B17BF10_474C_02C5_41B4_349472046BA8",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": -31.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.42
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.42,
   "yaw": -31.26,
   "hfov": 8.35,
   "image": "this.AnimatedImageResource_FCBC645C_ECCE_BECD_41CC_667547FC1AA9",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_70C05E52_61C2_4D97_41BF_249B122E6F91",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 38.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": -29.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.52
  }
 ],
 "items": [
  {
   "hfov": 38.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 935,
      "class": "ImageResourceLevel",
      "height": 481,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_6_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -29.52,
   "yaw": -29.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7158B4D6_61C2_5E9F_41C8_C330B6F185F0",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 36.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_7_0_0_map.gif"
     }
    ]
   },
   "yaw": 58.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.54
  }
 ],
 "items": [
  {
   "hfov": 36.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 892,
      "class": "ImageResourceLevel",
      "height": 342,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_7_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -29.54,
   "yaw": 58.16
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_290D9A52_2482_E7C9_4155_4E811A4365FC",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 34.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_10_0_0_map.gif"
     }
    ]
   },
   "yaw": 168.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.63
  }
 ],
 "items": [
  {
   "hfov": 34.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 855,
      "class": "ImageResourceLevel",
      "height": 378,
      "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_10_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -31.63,
   "yaw": 168.71
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_5BC92C8C_47CC_07DD_41D0_CB2471ED5FD5",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_486E5429_4744_06C7_41B4_2CC8E86CE93C",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 116.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.28
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.28,
   "yaw": 116.84,
   "hfov": 8.04,
   "image": "this.AnimatedImageResource_FCBE2460_ECCE_BEF5_41B7_6F2CDCCD6240",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B, this.camera_7757B45F_67FD_19B0_41C1_47DAF12CCACD); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_487E26B1_4744_03C7_41C7_3FC06EC89554",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 03 Right"
 },
 "maps": [
  {
   "hfov": 5.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -40.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 46.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 46.31,
   "yaw": -40.64,
   "hfov": 5.18,
   "image": "this.AnimatedImageResource_FCB9C460_ECCE_BEF5_41C1_98C5765A9CE2",
   "distance": 50
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1, this.camera_775A544F_67FD_1990_41CE_6B5B47108F9F); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_51968C2C_475C_06DD_4195_9B4FBAE3C55B",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 64.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.51
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.51,
   "yaw": 64.38,
   "hfov": 8.82,
   "image": "this.AnimatedImageResource_FC8B544C_ECCE_BECD_41EB_060CF9AC657B",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_5FEA86A9_475C_03C7_4139_4335BC1B658E",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 147.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20,
   "yaw": 147.12,
   "hfov": 8.43,
   "image": "this.AnimatedImageResource_FC8B644C_ECCE_BECD_41DC_EECBAEF736DC",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D305176_47C4_014D_41D1_200520CB552E, this.camera_7682E5A4_67FD_1A90_41A6_9A3B64116EA9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_71BD3315_61C1_FB9D_41D6_2783EB694B4A",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 33.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_5_0_0_map.gif"
     }
    ]
   },
   "yaw": 147.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.69
  }
 ],
 "items": [
  {
   "hfov": 33.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 805,
      "class": "ImageResourceLevel",
      "height": 370,
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_5_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -28.69,
   "yaw": 147.45
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7F820B4F_70B7_A8EF_41D4_ECFB4D3B3F92",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "yaw": 65.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.56
  }
 ],
 "items": [
  {
   "hfov": 39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 872,
      "class": "ImageResourceLevel",
      "height": 458,
      "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_6_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -17.56,
   "yaw": 65.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_559439B6_477C_01CD_41C6_310910C20AF6_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_76BC078F_67FD_0690_41C2_FF1510F89A08",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77C55634_67FD_19F0_41D6_1A41F53D3DAC",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77B0D643_67FD_1990_41C3_AF0685964011",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_77800420_67FD_1990_41C3_BF422FD6875C",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_24637F8D_48C4_01DF_41CC_8D1AEEB40EF1",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -61.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.39
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.39,
   "yaw": -61.13,
   "hfov": 7.73,
   "image": "this.AnimatedImageResource_FC85D44F_ECCE_BECB_419A_33FC9255C26D",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB, this.camera_774816D5_67FD_06B0_4191_AA8B02D042C1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_73658D41_6142_408D_41C5_4C7F5931E905",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": 158.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.4,
   "yaw": 158.19,
   "hfov": 8.35,
   "image": "this.AnimatedImageResource_FC85E44F_ECCE_BECB_41E9_FBF3A3347114",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3, this.camera_775C36C6_67FD_0690_41D1_AA9F4B65FBE0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E19D9C1_6C3B_7152_41C7_0C346484A829",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": -61.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.87
  }
 ],
 "items": [
  {
   "hfov": 26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 712,
      "class": "ImageResourceLevel",
      "height": 306,
      "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0_HS_4_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -38.87,
   "yaw": -61.14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_5BC0C6CC_47CC_035D_41AE_6877DF5E15A0",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_76FBC73B_67FD_07F0_41C6_5831E1CF08B2",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_776B06A8_67FD_0690_41AE_289EC3BCB1BB",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_7BEE3631_47C4_02C7_41C4_0BF0FCD07FF9",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_7BE8A634_47C4_02CD_41CB_0D9C8C499BD1",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_5C2E0C0C_47C4_06DD_41C2_52329A50DF78",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 7.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": -22.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.68
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.68,
   "yaw": -22.16,
   "hfov": 7.79,
   "image": "this.AnimatedImageResource_FC8AE44C_ECCE_BECD_41D8_BE4FEE169CB3",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_559439B6_477C_01CD_41C6_310910C20AF6, this.camera_76FE8505_67FD_1B93_41BC_9D29F27F9296); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_5B75A6D7_47C4_034B_41BA_19FF1A7061EE",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": 129.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.24
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.24,
   "yaw": 129.47,
   "hfov": 8.47,
   "image": "this.AnimatedImageResource_FC8A844D_ECCE_BECF_41E3_16799D062BBF",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4, this.camera_76E85523_67FD_1B90_41D3_1C2BBC771229); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_6EB2BC90_61C3_CE93_419B_305D87BF7821",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "yaw": -22.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.55
  }
 ],
 "items": [
  {
   "hfov": 32.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 902,
      "class": "ImageResourceLevel",
      "height": 366,
      "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0_HS_3_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -39.55,
   "yaw": -22.05
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_5D305176_47C4_014D_41D1_200520CB552E_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_D0C5729A_DD62_098F_41E1_BF5C923E1FA8",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 1694.06,
  "x": 4140.26,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_0_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 4140.26,
  "height": 101.02,
  "y": 1694.06,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_0.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CD37C41E_DD6E_0887_41E5_1239F4B30893",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 2026.81,
  "x": 4156.13,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_1_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 4156.13,
  "height": 101.02,
  "y": 2026.81,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_1.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CDAF1CC5_DD6E_1985_41E5_6FED3162F92D",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 2029.89,
  "x": 4532.87,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_2_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 4532.87,
  "height": 101.02,
  "y": 2029.89,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_2.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CC713233_DD62_089D_41D3_3FC3E3423E82",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 1684.02,
  "x": 4551.81,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_3_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 4551.81,
  "height": 101.02,
  "y": 1684.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_3.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CF9E9087_DDA6_0985_41DC_71993C828476",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 2766.65,
  "x": 3978.04,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_4_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 3978.04,
  "height": 101.02,
  "y": 2766.65,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_4.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CED9381E_DDA6_7887_41E3_BD0B569D70D3",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 2959.02,
  "x": 3318.13,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_5_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 3318.13,
  "height": 101.02,
  "y": 2959.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_5.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CF91A3C9_DDA2_0F8D_41DD_12D8628E37D5",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 865.33,
  "x": 5042.36,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_6_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 5042.36,
  "height": 101.02,
  "y": 865.33,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_6.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CECB63DC_DDA2_0F8B_41BA_4331D7839F31",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 570.79,
  "x": 5039.29,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_7_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 5039.29,
  "height": 101.02,
  "y": 570.79,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_7.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_CE40686A_DDA2_388F_41E1_709257C3FF08",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 1933.22,
  "x": 5358.55,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_8_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 5358.55,
  "height": 101.02,
  "y": 1933.22,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_8.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_C9A2F6FE_DDA2_0987_41A9_2D7029051828",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 1256.05,
  "x": 5421.86,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_9_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 5421.86,
  "height": 101.02,
  "y": 1256.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_9.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_E6F77091_EB8C_C0A4_41CA_96CDC978E301",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 715.22,
  "x": 3911.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_10_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 3911.01,
  "height": 101.02,
  "y": 715.22,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_10.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_E5BEFB81_EB8C_40A4_41D8_08B3393F1B42",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 2531.7,
  "x": 4558.45,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_11_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 4558.45,
  "height": 101.02,
  "y": 2531.7,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_11.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_E5317620_EB8C_C3E4_41D6_43836FC63094",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 1347.54,
  "x": 3665.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_12_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 3665.57,
  "height": 101.02,
  "y": 1347.54,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_12.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_E4F4FFCE_EB8D_C0BC_41D6_8E20C60B2908",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 384.57,
  "x": 963.14,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_13_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 963.14,
  "height": 101.02,
  "y": 384.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_13.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_E42A1CE3_EB8C_C064_41D7_E44DD86AD942",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 691.91,
  "x": 2445.33,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_14_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 2445.33,
  "height": 101.02,
  "y": 691.91,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_14.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_FBFC292E_EB94_41FC_41DA_2CE67F8664D3",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 1148.86,
  "x": 2590.23,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_15_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 2590.23,
  "height": 101.02,
  "y": 1148.86,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_15.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_FBA09A10_EB94_C3A4_41DF_634CE3166B2E",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "map": {
  "width": 101,
  "height": 101.02,
  "y": 1281.31,
  "x": 1786.4,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_16_map.gif"
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0
 },
 "image": {
  "x": 1786.4,
  "height": 101.02,
  "y": 1281.31,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "width": 53,
     "class": "ImageResourceLevel",
     "height": 53,
     "url": "media/map_D062F067_DD62_0885_41E4_9834BACA0E6D_HS_16.png"
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "width": 101
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true
},
{
 "id": "sequence_55889D4B_477C_015B_41C5_3A26BDEFBCCB",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_773256F2_67FD_0670_41C0_EF38BD4C9DC8",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_53F3059F_4744_01FB_41D0_FB4C556FDB90",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 146.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.63,
   "yaw": 146.81,
   "hfov": 8.71,
   "image": "this.AnimatedImageResource_FC8EF447_ECCE_BE3B_41E4_62402142549D",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_70A79B89_61CE_CB75_41A8_A5FFBF24DF65",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 37.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "yaw": 146.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.19
  }
 ],
 "items": [
  {
   "hfov": 37.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 852,
      "class": "ImageResourceLevel",
      "height": 358,
      "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0_HS_2_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -22.19,
   "yaw": 146.93
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "overlay_56414E2D_474B_D957_41AB_36A4D5A3D184",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 103.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.97,
   "yaw": 103.99,
   "hfov": 8.37,
   "image": "this.AnimatedImageResource_FCBE445E_ECCE_BECD_41AC_6B963F5ED62C",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_24DB51FB_48C4_013B_41C3_C0E73CE60816",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "yaw": -26.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.92
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.92,
   "yaw": -26.11,
   "hfov": 8.32,
   "image": "this.AnimatedImageResource_FCBE145E_ECCE_BECD_41D9_3F2E9CBD2739",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0, this.camera_77D1F5F6_67FD_1A70_41C8_81FB06A1B06E); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "overlay_7E746EAF_70B2_A9AF_41C8_9A119E37E325",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "yaw": 104.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.44
  }
 ],
 "items": [
  {
   "hfov": 32.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 784,
      "class": "ImageResourceLevel",
      "height": 421,
      "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0_HS_4_0.png"
     }
    ]
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -28.44,
   "yaw": 104.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_576D64C0_474E_EACD_418F_5627A63D5320_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_7795B411_67FD_19B0_41D6_D6B567F0B53F",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_775A444F_67FD_1990_41D1_3DDCEC583775",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_56932E34_474C_02CD_41C6_D08F2205CFCF",
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "hfov": 8.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_0_HS_0_0_0_map.gif"
     }
    ]
   },
   "yaw": 139.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.51
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.51,
   "yaw": 139.96,
   "hfov": 8.6,
   "image": "this.AnimatedImageResource_FC8F5445_ECCE_BE3F_41E1_7F4FD0972E47",
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true
},
{
 "id": "panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0",
 "angle": 0,
 "distance": 50,
 "hfov": 45,
 "rotate": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 654,
    "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_tcap0.png"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "inertia": false
},
{
 "id": "sequence_1D722455_474C_074F_41CB_319E3246343E",
 "movements": [
  {
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "AnimatedImageResource_FC84A451_ECCE_BED7_41BC_150CEED032CF",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5B13FA21_47C4_02C7_41CA_1D64F06D0816_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC805456_ECCE_BEDD_41CC_59452A0A72D6",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC81C456_ECCE_BEDD_41E9_6FDC993E2F31",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC818456_ECCE_BEDD_41E0_F3C557A0EAE7",
 "levels": [
  {
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540,
   "url": "media/panorama_7BECB705_47C4_02CF_41C3_976C33A9FAF3_0_HS_3_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBE945F_ECCE_BECB_41E1_71A36B37B369",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBEA460_ECCE_BEF5_41D0_C1581DF00BCC",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBE4460_ECCE_BEF5_41E4_CA754AB28DE8",
 "levels": [
  {
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 960,
   "url": "media/panorama_576F06CE_474D_76D5_41CA_7F4E53A6346B_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC837459_ECCE_BED7_41C5_B5A927B329FA",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_091933A6_4744_01CD_41CF_4BBA8756EF22_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC81A455_ECCE_BEDF_41CA_02A849BE45F1",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC817455_ECCE_BEDF_41E2_C6AACC75B27E",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_72160A3E_47C4_033D_41C2_85C3093DC483_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC80D455_ECCE_BEDF_41E4_6BEC178F30AB",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC80F455_ECCE_BEDF_41ED_64AAD8B6E9DB",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7216749F_47C4_07FB_41D1_496FECE7805B_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC81C454_ECCE_BEDD_41EC_09DABA8789CD",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_72163000_47C4_7EC5_41C8_7BC81B5FBDC0_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC841451_ECCE_BED7_41ED_18E577067237",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC842452_ECCE_BED5_41DC_D2AF57A25D9E",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC87C452_ECCE_BED5_41DC_2731E430D84A",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_6DC139F3_47CC_014B_41C3_DFD81E2CCFB6_0_HS_4_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC857450_ECCE_BED5_41E8_8755024CC4BC",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC851450_ECCE_BED5_41E9_57430C88E65E",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC853451_ECCE_BED7_41DE_367A2E73E5A5",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BE1B686_47C4_03CD_41CA_26AADCE60401_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC877452_ECCE_BED5_41E0_DB7C78B25AB8",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC871453_ECCE_BEDB_41EA_E052D6047F9F",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_6974B7DF_47C4_017B_41D0_46B196447485_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBE945E_ECCE_BECD_41E6_38A247224099",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5595BB8D_477C_01DF_41B6_7FD4AC9F6207_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC800458_ECCE_BED5_41A5_3C45732086C9",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC802458_ECCE_BED5_41C2_FEF111F552B0",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC83C458_ECCE_BED5_41D6_1E4244549829",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BEC09C9_47C4_0147_41C0_353DCA5F47F7_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC869453_ECCE_BEDB_41BF_171C6BCCEE21",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC865453_ECCE_BEDB_41EA_C9B74AD341AE",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC867454_ECCE_BEDD_41D4_6732AEA45691",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BD392C6_47CC_034D_41C1_F035E319FA9D_0_HS_3_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8BC44B_ECCE_BECB_41EC_5F7E2CB3D636",
 "levels": [
  {
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300,
   "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8BF44B_ECCE_BECB_41EA_F2DBA623C2B4",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5468003F_477C_3F3B_41D1_0300CE68A2DB_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8A144D_ECCE_BECF_41E5_B4B0FA1864E1",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8A344D_ECCE_BECF_41C7_4269A812F28D",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC85D44D_ECCE_BECF_41E8_825DBACAB66A",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5D75A5AD_47C4_01DF_41C6_96168482CEF4_0_HS_5_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8A444F_ECCE_BECB_41B5_B5A4B86A2D46",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8A644F_ECCE_BECB_41C4_F0B5046AF571",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5A354ECE_47CC_035D_41D0_51B614D62DE3_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8E5448_ECCE_BE35_41EB_2CFF886E8928",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8E0448_ECCE_BE35_41E5_94C4E6F5B80E",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC89D448_ECCE_BE35_41DD_5D45010D752F",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_4_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC89E448_ECCE_BE35_41EC_38B4CE8BD380",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_6_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC898448_ECCE_BE35_41D4_FD0018B125F6",
 "levels": [
  {
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300,
   "url": "media/panorama_67D38E9C_6C1E_D3F2_41D1_3A90EE2C8209_0_HS_8_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBF845D_ECCE_BECF_41D4_FD333F71384C",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7216FE44_47C4_034D_41CF_4876F81C852B_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC810457_ECCE_BEDB_41B7_718E2DC4CC5F",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC812457_ECCE_BEDB_41B2_B518BB4E544C",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC80E457_ECCE_BEDB_41AC_E04723EF2162",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7B0AFF0C_47C4_02DD_41A1_246FF06C0347_0_HS_4_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCB9A461_ECCE_BEF7_41DC_B7F7F7C08DEE",
 "levels": [
  {
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1440,
   "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCB94461_ECCE_BEF7_41D3_5478A31B6DCF",
 "levels": [
  {
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1440,
   "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCB96461_ECCE_BEF7_41E0_1D197EF04FC7",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_576FE863_474D_D9D3_41CF_D1F3686B4EB1_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBF745F_ECCE_BECB_41E0_312522016554",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBF145F_ECCE_BECB_41ED_2CD9BB22BFA4",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_565F58A0_474E_D94D_41C1_1D6A7DCE0EA0_0_HS_3_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC85544E_ECCE_BECD_41EB_74181526D046",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8AC44E_ECCE_BECD_41A0_3A0CDD94A24C",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5AD1B6BB_47CC_033B_41B6_E439F648342D_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBF645D_ECCE_BECF_416A_7618F7DD5728",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBF045D_ECCE_BECF_41E6_076068E6F5C4",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_559532B3_477C_03CB_41C1_B9E8CD06F3C5_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBD745B_ECCE_BECB_4172_755AA0482D9C",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBD345B_ECCE_BECB_41BF_56E7F2C14BFB",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_1925243B_474C_073B_41C5_503370A08964_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC832459_ECCE_BED7_41A2_8B195D589144",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC82C459_ECCE_BED7_41DD_8C835814898C",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_68028359_67FD_1FB0_41D8_8DBD9EF1E5E3",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BECC041_47C4_1F47_41CB_209499F0CD35_0_HS_8_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC82145A_ECCE_BED5_41D4_FD50267ABD18",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC82345A_ECCE_BED5_41E4_D32AC7F289F9",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBDC45B_ECCE_BECB_41D0_3AA8EFA77475",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_2F67D9BD_474C_013F_41C3_EF57F3B5B8FF_0_HS_4_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBCB45C_ECCE_BECD_41BE_5D86A8F714B0",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBC545C_ECCE_BECD_41E2_E90CCD28EB9F",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBC645C_ECCE_BECD_41CC_667547FC1AA9",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_7BEF3B4C_47C4_015D_41B7_6315613E6FCA_0_HS_4_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBE2460_ECCE_BEF5_41B7_6F2CDCCD6240",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCB9C460_ECCE_BEF5_41C1_98C5765A9CE2",
 "levels": [
  {
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 960,
   "url": "media/panorama_57815F3E_474D_57B5_41A5_8ED01C8779B0_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8B544C_ECCE_BECD_41EB_060CF9AC657B",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8B644C_ECCE_BECD_41DC_EECBAEF736DC",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_559439B6_477C_01CD_41C6_310910C20AF6_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC85D44F_ECCE_BECB_419A_33FC9255C26D",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC85E44F_ECCE_BECB_41E9_FBF3A3347114",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5BCFF9C5_47CC_014F_41C2_5EAA14F8BEFE_0_HS_2_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8AE44C_ECCE_BECD_41D8_BE4FEE169CB3",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8A844D_ECCE_BECF_41E3_16799D062BBF",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_5D305176_47C4_014D_41D1_200520CB552E_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8EF447_ECCE_BE3B_41E4_62402142549D",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_495109AE_46CE_BB55_41CA_C9DE0D856651_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBE445E_ECCE_BECD_41AC_6B963F5ED62C",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FCBE145E_ECCE_BECD_41D9_3F2E9CBD2739",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_576D64C0_474E_EACD_418F_5627A63D5320_0_HS_1_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "id": "AnimatedImageResource_FC8F5445_ECCE_BE3F_41E1_7F4FD0972E47",
 "levels": [
  {
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420,
   "url": "media/panorama_4B8785BE_46DE_AAB5_41D1_5987900BF942_0_HS_0_0.png"
  }
 ],
 "rowCount": 6,
 "frameCount": 21,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "downloadEnabled": true,
 "width": "100%",
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); window.open(url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\\text-align:left\\><SPAN STYLE=\\color:#FFFFFF;font-size:12px;font-family:Verdana\\><span color=\\white\\ font-family=\\Verdana\\ font-size=\\12px\\>' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'to' : 'from')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(info.itemCondition !== undefined && !info.itemCondition.call(this, src)) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  }
 },
 "shadow": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "data": {
  "name": "Player2181"
 },
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "layout": "absolute"
};


	function HistoryData(playList) {
		this.playList = playList;
		this.list = [];
		this.pointer = -1;
	}

	HistoryData.prototype.add = function(index){
		if(this.pointer < this.list.length && this.list[this.pointer] == index) {
			return;
		}
		++this.pointer;
		this.list.splice(this.pointer, this.list.length - this.pointer, index);
	};

	HistoryData.prototype.back = function(){
		if(!this.canBack()) return;
		this.playList.set('selectedIndex', this.list[--this.pointer]);
	};

	HistoryData.prototype.forward = function(){
		if(!this.canForward()) return;
		this.playList.set('selectedIndex', this.list[++this.pointer]);
	};

	HistoryData.prototype.canBack = function(){
		return this.pointer > 0;
	};

	HistoryData.prototype.canForward = function(){
		return this.pointer >= 0 && this.pointer < this.list.length-1;
	};


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
