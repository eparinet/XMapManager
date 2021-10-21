<script language="javascript">
                        
//===============================================
// Features Options
//===============================================
var xmapManagerOptions = { 
                            lang           : 'en' ,
                            height         : '400px', minHeight: '100PX', maxHeight: '90VH',
                            width          : '90%'  , minWidth : '300PX', maxWidth : '100%',
        
                            ProviderName   : 'OpenLayers', // OpenLayers, Google, Kakao, Naver
                            ProviderOption : {  
                                              // OpenLayers Options
                                              layers: [   
                                                       { 
                                                         layerName  : 'OSM Map',  
                                                         layerType  : 'TileLayer', //  TileLayer, VectorLayer, VectorImageLayer  
                                                         sourceType : 'OSM',       //  'OSM', 'XYZ', 'Vector', 'Stamen', 'TileWMS', 'TileJSON' 
                                                         sourceURL  : '',          //  
                                                         attribution: 'Map Source Copy right(c)',
                                                         opacity    : 1,
                                                         visible    : true,
                                                         zIndex     : 1,
                                                       },
                                                      ]
                                             },
 
                            // markerIcon: 'icon url' or 'marker01', 'marker02', 'marker03', 'marker04', 'marker05', 'marker06', 'marker07', 'marker08', 'marker09', 'marker10', 'marker11', 'marker12'
                            DefaultMarker  : { markerIcon: 'marker06', IsPopupTitle: false, IsShowMarkerNo:true, TextPosition:'top' },  // TextPosition[top, middle, bottom]
                            ClusterMarker  : { IsCluster: true, MaxDistance: 150, MinDistance: 100, markerIcon:'' },                    // Cluster Marker
                            Compensation   : { IsKoreaSea:true, CompLAT: 0, CompLNG: 0, MaxResolution:7500, fontSize:'12px' },          // East Sea of Korea 

                            IsLoactionGEO  : false,   // Default User Location GEO
                            LocationLAT    : 0,       // Default Location LAT
                            LocationLNG    : 0,       // Default Location LNG

                            IsShowCoord    : false,   // Marker Coord
                            IsZoomFixed    : false,   // Zoom Level Fixed
                            IsShowFit      : false,   // Zoom Level Fit
         
                            MapZoomLevel   : { LevelDefault: 3, LevelLabel: 12, LebelMarker: 15 },   //  Min(0) ~ Max(20) 
                            MapDataLabel   : { IsShow: true, IsPopup: true, IsPopupTitle: false,  IsLineTraking: true, height:'30px', width:'45px', position:'top',  },  // top, bottom 
                            MapDataList    : [  ]     // Maker Data List

                        };   



//===============================================
// Marker Data Options
//===============================================
var xmapManagerOptions = { 
                           MapDataList: [ 
                                          {  
                                            markerLat    : 37.57568549970196,                                // marker lat
                                            markerLng    : 126.97682018488811,                               // marker lng
                                            markerIcon   :'marker01',                                        // icon Url Or 'marker01' ~ 'marker12'
                                            markerLabel  :'No.01'     ,                                      // marker label
                                            markerTitle  :'Gwanghwamun',                                     // marker title
                                            markerLink   :'https://en.wikipedia.org/wiki/Gwanghwamun',       // marker Popup Link
                                            markerContent:'Marker Popup Content.. link1' // marker Popup Contents
                                            labelImageUrl:'http://img.koreatimes.co.kr/upload/news/100810_pp_hiseoul.jpg',                        // label thumbnail Image
                                            labelContent :'Label Description',                               // label thumbnail Description
                                          },                               
                                          {  
                                            markerLat    : 37.574114494718145,                               // marker lat
                                            markerLng    : 126.97686482349788,                               // marker lng
                                            markerIcon   :'marker02',                                        // icon Url Or 'marker01' ~ 'marker12'
                                            markerLabel  :'No.02'     ,                                      // marker label
                                            markerTitle  :'Statue of King Sejong (Gwanghwamun)',             // marker title
                                            markerLink   :'https://en.wikipedia.org/wiki/Sejong_the_Great',  // marker Popup Link
                                            markerContent:'Marker Popup Content.. link2' // marker Popup Contents
                                            labelImageUrl:'http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Statue_of_King_Sejong.jpg/220px-Statue_of_King_Sejong.jpg',  // label thumbnail Image
                                            labelContent :'Label Description',                               // label thumbnail Description
                                          },
                                          {  
                                            markerLat    : 37.57072881966248,                                // marker lat
                                            markerLng    : 126.9769339065269,                                // marker lng
                                            markerIcon   :'marker03',                                        // icon Url Or 'marker01' ~ 'marker12'
                                            markerLabel  :'No.03'     ,                                      // marker label
                                            markerTitle  :'Statue of Admiral Yi Sun-sin',                    // marker title
                                            markerLink   :'https://en.wikipedia.org/wiki/Statue_of_Admiral_Yi_Sun-sin',  // marker Popup Link
                                            markerContent:'Marker Popup Content.. link3' // marker Popup Contents
                                            labelImageUrl:'http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Yi-Sun-sin.jpg/220px-Yi-Sun-sin.jpg',  // label thumbnail Image
                                            labelContent :'Label Description',                               // label thumbnail Description
                                          },
                                        ]
                       };   





var xmapManagerFrame   = document.body.querySelector('#xmapManagerEX');
var xmapManager        = new XmapManager(xmapManagerFrame, xmapManagerOptions);







</script>