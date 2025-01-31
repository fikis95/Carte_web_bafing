var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_yaf_region_1 = new ol.format.GeoJSON();
var features_yaf_region_1 = format_yaf_region_1.readFeatures(json_yaf_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_region_1.addFeatures(features_yaf_region_1);
var lyr_yaf_region_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_region_1, 
                style: style_yaf_region_1,
                interactive: true,
                title: '<img src="styles/legend/yaf_region_1.png" /> yaf_region'
            });
var format_yaf_depart_2 = new ol.format.GeoJSON();
var features_yaf_depart_2 = format_yaf_depart_2.readFeatures(json_yaf_depart_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_depart_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_depart_2.addFeatures(features_yaf_depart_2);
var lyr_yaf_depart_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_depart_2, 
                style: style_yaf_depart_2,
                interactive: true,
                title: '<img src="styles/legend/yaf_depart_2.png" /> yaf_depart'
            });
var format_yaf_souspref_3 = new ol.format.GeoJSON();
var features_yaf_souspref_3 = format_yaf_souspref_3.readFeatures(json_yaf_souspref_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_souspref_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_souspref_3.addFeatures(features_yaf_souspref_3);
var lyr_yaf_souspref_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_souspref_3, 
                style: style_yaf_souspref_3,
                interactive: true,
                title: '<img src="styles/legend/yaf_souspref_3.png" /> yaf_souspref'
            });
var format_yaf_retenueEau_4 = new ol.format.GeoJSON();
var features_yaf_retenueEau_4 = format_yaf_retenueEau_4.readFeatures(json_yaf_retenueEau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_retenueEau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_retenueEau_4.addFeatures(features_yaf_retenueEau_4);
var lyr_yaf_retenueEau_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_retenueEau_4, 
                style: style_yaf_retenueEau_4,
                interactive: true,
                title: '<img src="styles/legend/yaf_retenueEau_4.png" /> yaf_retenueEau'
            });
var format_yaf_coursEau_5 = new ol.format.GeoJSON();
var features_yaf_coursEau_5 = format_yaf_coursEau_5.readFeatures(json_yaf_coursEau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_coursEau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_coursEau_5.addFeatures(features_yaf_coursEau_5);
var lyr_yaf_coursEau_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_coursEau_5, 
                style: style_yaf_coursEau_5,
                interactive: true,
                title: '<img src="styles/legend/yaf_coursEau_5.png" /> yaf_coursEau'
            });
var format_yaf_localites_6 = new ol.format.GeoJSON();
var features_yaf_localites_6 = format_yaf_localites_6.readFeatures(json_yaf_localites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_localites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_localites_6.addFeatures(features_yaf_localites_6);
var lyr_yaf_localites_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_localites_6, 
                style: style_yaf_localites_6,
                interactive: true,
                title: '<img src="styles/legend/yaf_localites_6.png" /> yaf_localites'
            });
var format_yaf_route_7 = new ol.format.GeoJSON();
var features_yaf_route_7 = format_yaf_route_7.readFeatures(json_yaf_route_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_route_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_route_7.addFeatures(features_yaf_route_7);
var lyr_yaf_route_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_route_7, 
                style: style_yaf_route_7,
                interactive: true,
                title: '<img src="styles/legend/yaf_route_7.png" /> yaf_route'
            });
var format_yaf_localitesPoint_8 = new ol.format.GeoJSON();
var features_yaf_localitesPoint_8 = format_yaf_localitesPoint_8.readFeatures(json_yaf_localitesPoint_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_localitesPoint_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_localitesPoint_8.addFeatures(features_yaf_localitesPoint_8);
var lyr_yaf_localitesPoint_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_localitesPoint_8, 
                style: style_yaf_localitesPoint_8,
                interactive: true,
                title: '<img src="styles/legend/yaf_localitesPoint_8.png" /> yaf_localitesPoint'
            });
var format_yaf_chefLeuReg_9 = new ol.format.GeoJSON();
var features_yaf_chefLeuReg_9 = format_yaf_chefLeuReg_9.readFeatures(json_yaf_chefLeuReg_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_chefLeuReg_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_chefLeuReg_9.addFeatures(features_yaf_chefLeuReg_9);
var lyr_yaf_chefLeuReg_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_chefLeuReg_9, 
                style: style_yaf_chefLeuReg_9,
                interactive: true,
                title: '<img src="styles/legend/yaf_chefLeuReg_9.png" /> yaf_chefLeuReg'
            });
var format_yaf_chefLieuDepart_10 = new ol.format.GeoJSON();
var features_yaf_chefLieuDepart_10 = format_yaf_chefLieuDepart_10.readFeatures(json_yaf_chefLieuDepart_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_chefLieuDepart_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_chefLieuDepart_10.addFeatures(features_yaf_chefLieuDepart_10);
var lyr_yaf_chefLieuDepart_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_chefLieuDepart_10, 
                style: style_yaf_chefLieuDepart_10,
                interactive: true,
                title: '<img src="styles/legend/yaf_chefLieuDepart_10.png" /> yaf_chefLieuDepart'
            });
var format_yaf_chefLieuSousPref_11 = new ol.format.GeoJSON();
var features_yaf_chefLieuSousPref_11 = format_yaf_chefLieuSousPref_11.readFeatures(json_yaf_chefLieuSousPref_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_chefLieuSousPref_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_chefLieuSousPref_11.addFeatures(features_yaf_chefLieuSousPref_11);
var lyr_yaf_chefLieuSousPref_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_chefLieuSousPref_11, 
                style: style_yaf_chefLieuSousPref_11,
                interactive: true,
                title: '<img src="styles/legend/yaf_chefLieuSousPref_11.png" /> yaf_chefLieuSousPref'
            });
var format_yaf_equipement_12 = new ol.format.GeoJSON();
var features_yaf_equipement_12 = format_yaf_equipement_12.readFeatures(json_yaf_equipement_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaf_equipement_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaf_equipement_12.addFeatures(features_yaf_equipement_12);
var lyr_yaf_equipement_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaf_equipement_12, 
                style: style_yaf_equipement_12,
                interactive: true,
                title: '<img src="styles/legend/yaf_equipement_12.png" /> yaf_equipement'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_yaf_region_1.setVisible(true);lyr_yaf_depart_2.setVisible(true);lyr_yaf_souspref_3.setVisible(true);lyr_yaf_retenueEau_4.setVisible(true);lyr_yaf_coursEau_5.setVisible(true);lyr_yaf_localites_6.setVisible(true);lyr_yaf_route_7.setVisible(true);lyr_yaf_localitesPoint_8.setVisible(true);lyr_yaf_chefLeuReg_9.setVisible(true);lyr_yaf_chefLieuDepart_10.setVisible(true);lyr_yaf_chefLieuSousPref_11.setVisible(true);lyr_yaf_equipement_12.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_yaf_region_1,lyr_yaf_depart_2,lyr_yaf_souspref_3,lyr_yaf_retenueEau_4,lyr_yaf_coursEau_5,lyr_yaf_localites_6,lyr_yaf_route_7,lyr_yaf_localitesPoint_8,lyr_yaf_chefLeuReg_9,lyr_yaf_chefLieuDepart_10,lyr_yaf_chefLieuSousPref_11,lyr_yaf_equipement_12];
lyr_yaf_region_1.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'nmreg': 'nmreg', 'nmpays': 'nmpays', 'iddistrict': 'iddistrict', 'idregion': 'idregion', 'nb_dept': 'nb_dept', 'nb_spref': 'nb_spref', 'nb_commune': 'nb_commune', 'nblocalite': 'nblocalite', 'pop_2014': 'pop_2014', 'per_pop_to': 'per_pop_to', 'hom_2014': 'hom_2014', 'fem_2014': 'fem_2014', 'rap_masc_2': 'rap_masc_2', 'reg_label': 'reg_label', });
lyr_yaf_depart_2.set('fieldAliases', {'gid': 'gid', 'nmdept': 'nmdept', 'nmreg': 'nmreg', 'rap_masc_2': 'rap_masc_2', 'tx_urbanis': 'tx_urbanis', 'tx_accrois': 'tx_accrois', 'nbr_spref': 'nbr_spref', 'nbr_commu': 'nbr_commu', 'pop_1998': 'pop_1998', 'pop_2012': 'pop_2012', 'nbr_habita': 'nbr_habita', 'nbr_locali': 'nbr_locali', 'pop2014': 'pop2014', 'homme_2014': 'homme_2014', 'femme_2014': 'femme_2014', 'effec_1998': 'effec_1998', });
lyr_yaf_souspref_3.set('fieldAliases', {'gid': 'gid', 'nmdept': 'nmdept', 'nmspref': 'nmspref', 'nmreg': 'nmreg', 'Source': 'Source', 'pop_homme': 'pop_homme', 'pop_femme': 'pop_femme', 'pop_totale': 'pop_totale', });
lyr_yaf_retenueEau_4.set('fieldAliases', {'gid': 'gid', 'Nom': 'Nom', });
lyr_yaf_coursEau_5.set('fieldAliases', {'gid': 'gid', 'Nom': 'Nom', 'source': 'source', });
lyr_yaf_localites_6.set('fieldAliases', {'gid': 'gid', 'nmhbitat': 'nmhbitat', 'milieu': 'milieu', 'source': 'source', 'nom_loc': 'nom_loc', 'nmdept': 'nmdept', 'nmreg': 'nmreg', 'nom_maj': 'nom_maj', 'pop_1998': 'pop_1998', 'pop_2012': 'pop_2012', 'nb_etbsant': 'nb_etbsant', });
lyr_yaf_route_7.set('fieldAliases', {'gid': 'gid', 'nature': 'nature', 'revetement': 'revetement', 'viabilite': 'viabilite', 'source': 'source', 'categorie': 'categorie', 'longueur': 'longueur', 'Nom': 'Nom', 'type': 'type', 'nmdept': 'nmdept', 'nmspref': 'nmspref', 'nmreg': 'nmreg', });
lyr_yaf_localitesPoint_8.set('fieldAliases', {'gid': 'gid', 'nmhbitat': 'nmhbitat', 'milieu': 'milieu', 'source': 'source', 'nom_loc': 'nom_loc', 'nmdept': 'nmdept', 'nmreg': 'nmreg', 'nom_maj': 'nom_maj', 'pop_1998': 'pop_1998', 'pop_2012': 'pop_2012', 'nb_etbsant': 'nb_etbsant', 'X': 'X', 'Y': 'Y', });
lyr_yaf_chefLeuReg_9.set('fieldAliases', {'gid': 'gid', 'toponymie': 'toponymie', });
lyr_yaf_chefLieuDepart_10.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'toponymie': 'toponymie', 'administra': 'administra', });
lyr_yaf_chefLieuSousPref_11.set('fieldAliases', {'gid': 'gid', 'toponymie': 'toponymie', });
lyr_yaf_equipement_12.set('fieldAliases', {'gid': 'gid', 'noms': 'noms', 'donnee': 'donnee', 'nmdept': 'nmdept', 'nmspref': 'nmspref', 'nmreg': 'nmreg', 'intitule': 'intitule', 'categorie': 'categorie', 'class_data': 'class_data', 'localite': 'localite', });
lyr_yaf_region_1.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'nmreg': 'TextEdit', 'nmpays': 'TextEdit', 'iddistrict': 'TextEdit', 'idregion': 'TextEdit', 'nb_dept': 'TextEdit', 'nb_spref': 'TextEdit', 'nb_commune': 'TextEdit', 'nblocalite': 'TextEdit', 'pop_2014': 'TextEdit', 'per_pop_to': 'TextEdit', 'hom_2014': 'TextEdit', 'fem_2014': 'TextEdit', 'rap_masc_2': 'TextEdit', 'reg_label': 'TextEdit', });
lyr_yaf_depart_2.set('fieldImages', {'gid': 'TextEdit', 'nmdept': 'TextEdit', 'nmreg': 'TextEdit', 'rap_masc_2': 'TextEdit', 'tx_urbanis': 'TextEdit', 'tx_accrois': 'TextEdit', 'nbr_spref': 'TextEdit', 'nbr_commu': 'TextEdit', 'pop_1998': 'TextEdit', 'pop_2012': 'TextEdit', 'nbr_habita': 'TextEdit', 'nbr_locali': 'TextEdit', 'pop2014': 'TextEdit', 'homme_2014': 'TextEdit', 'femme_2014': 'TextEdit', 'effec_1998': 'TextEdit', });
lyr_yaf_souspref_3.set('fieldImages', {'gid': 'TextEdit', 'nmdept': 'TextEdit', 'nmspref': 'TextEdit', 'nmreg': 'TextEdit', 'Source': 'TextEdit', 'pop_homme': 'TextEdit', 'pop_femme': 'TextEdit', 'pop_totale': 'TextEdit', });
lyr_yaf_retenueEau_4.set('fieldImages', {'gid': 'TextEdit', 'Nom': 'TextEdit', });
lyr_yaf_coursEau_5.set('fieldImages', {'gid': 'TextEdit', 'Nom': 'TextEdit', 'source': 'TextEdit', });
lyr_yaf_localites_6.set('fieldImages', {'gid': 'TextEdit', 'nmhbitat': 'TextEdit', 'milieu': 'TextEdit', 'source': 'TextEdit', 'nom_loc': 'TextEdit', 'nmdept': 'TextEdit', 'nmreg': 'TextEdit', 'nom_maj': 'TextEdit', 'pop_1998': 'TextEdit', 'pop_2012': 'TextEdit', 'nb_etbsant': 'TextEdit', });
lyr_yaf_route_7.set('fieldImages', {'gid': 'TextEdit', 'nature': 'TextEdit', 'revetement': 'TextEdit', 'viabilite': 'TextEdit', 'source': 'TextEdit', 'categorie': 'TextEdit', 'longueur': 'TextEdit', 'Nom': 'TextEdit', 'type': 'TextEdit', 'nmdept': 'TextEdit', 'nmspref': 'TextEdit', 'nmreg': 'TextEdit', });
lyr_yaf_localitesPoint_8.set('fieldImages', {'gid': 'TextEdit', 'nmhbitat': 'TextEdit', 'milieu': 'TextEdit', 'source': 'TextEdit', 'nom_loc': 'TextEdit', 'nmdept': 'TextEdit', 'nmreg': 'TextEdit', 'nom_maj': 'TextEdit', 'pop_1998': 'TextEdit', 'pop_2012': 'TextEdit', 'nb_etbsant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_yaf_chefLeuReg_9.set('fieldImages', {'gid': 'TextEdit', 'toponymie': 'TextEdit', });
lyr_yaf_chefLieuDepart_10.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'toponymie': 'TextEdit', 'administra': 'TextEdit', });
lyr_yaf_chefLieuSousPref_11.set('fieldImages', {'gid': 'TextEdit', 'toponymie': 'TextEdit', });
lyr_yaf_equipement_12.set('fieldImages', {'gid': 'TextEdit', 'noms': 'TextEdit', 'donnee': 'TextEdit', 'nmdept': 'TextEdit', 'nmspref': 'TextEdit', 'nmreg': 'TextEdit', 'intitule': 'TextEdit', 'categorie': 'TextEdit', 'class_data': 'TextEdit', 'localite': 'TextEdit', });
lyr_yaf_region_1.set('fieldLabels', {'gid': 'inline label', '__gid': 'no label', 'nmreg': 'inline label', 'nmpays': 'inline label', 'iddistrict': 'inline label', 'idregion': 'inline label', 'nb_dept': 'inline label', 'nb_spref': 'inline label', 'nb_commune': 'inline label', 'nblocalite': 'header label', 'pop_2014': 'inline label', 'per_pop_to': 'inline label', 'hom_2014': 'inline label', 'fem_2014': 'inline label', 'rap_masc_2': 'inline label', 'reg_label': 'inline label', });
lyr_yaf_depart_2.set('fieldLabels', {'gid': 'header label', 'nmdept': 'header label', 'nmreg': 'header label', 'rap_masc_2': 'inline label', 'tx_urbanis': 'inline label', 'tx_accrois': 'inline label', 'nbr_spref': 'no label', 'nbr_commu': 'inline label', 'pop_1998': 'inline label', 'pop_2012': 'inline label', 'nbr_habita': 'inline label', 'nbr_locali': 'inline label', 'pop2014': 'inline label', 'homme_2014': 'inline label', 'femme_2014': 'inline label', 'effec_1998': 'inline label', });
lyr_yaf_souspref_3.set('fieldLabels', {'gid': 'inline label', 'nmdept': 'inline label', 'nmspref': 'inline label', 'nmreg': 'inline label', 'Source': 'no label', 'pop_homme': 'inline label', 'pop_femme': 'inline label', 'pop_totale': 'inline label', });
lyr_yaf_retenueEau_4.set('fieldLabels', {'gid': 'inline label', 'Nom': 'inline label', });
lyr_yaf_coursEau_5.set('fieldLabels', {'gid': 'inline label', 'Nom': 'inline label', 'source': 'no label', });
lyr_yaf_localites_6.set('fieldLabels', {'gid': 'inline label', 'nmhbitat': 'inline label', 'milieu': 'inline label', 'source': 'no label', 'nom_loc': 'inline label', 'nmdept': 'inline label', 'nmreg': 'inline label', 'nom_maj': 'inline label', 'pop_1998': 'inline label', 'pop_2012': 'inline label', 'nb_etbsant': 'inline label', });
lyr_yaf_route_7.set('fieldLabels', {'gid': 'inline label', 'nature': 'inline label', 'revetement': 'inline label', 'viabilite': 'inline label', 'source': 'no label', 'categorie': 'inline label', 'longueur': 'inline label', 'Nom': 'inline label', 'type': 'inline label', 'nmdept': 'inline label', 'nmspref': 'inline label', 'nmreg': 'inline label', });
lyr_yaf_localitesPoint_8.set('fieldLabels', {'gid': 'inline label', 'nmhbitat': 'inline label', 'milieu': 'inline label', 'source': 'no label', 'nom_loc': 'inline label', 'nmdept': 'inline label', 'nmreg': 'inline label', 'nom_maj': 'inline label', 'pop_1998': 'inline label', 'pop_2012': 'inline label', 'nb_etbsant': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_yaf_chefLeuReg_9.set('fieldLabels', {'gid': 'inline label', 'toponymie': 'inline label', });
lyr_yaf_chefLieuDepart_10.set('fieldLabels', {'gid': 'inline label', '__gid': 'no label', 'toponymie': 'inline label', 'administra': 'inline label', });
lyr_yaf_chefLieuSousPref_11.set('fieldLabels', {'gid': 'no label', 'toponymie': 'inline label', });
lyr_yaf_equipement_12.set('fieldLabels', {'gid': 'no label', 'noms': 'inline label', 'donnee': 'inline label', 'nmdept': 'inline label', 'nmspref': 'inline label', 'nmreg': 'inline label', 'intitule': 'no label', 'categorie': 'inline label', 'class_data': 'no label', 'localite': 'inline label', });
lyr_yaf_equipement_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});