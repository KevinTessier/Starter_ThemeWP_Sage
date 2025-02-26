<?php

namespace App;

/**
 * Helper Class
 *
 * @param
 * @return
 * @version 1.0.0
 * @see url context
 * @author Kevin Tessier <kevin-tessier@protonmail.com>
 */

class Helpers
{

    public static function getStyleExist($asset_name) {
        $manifest_path = get_template_directory() . '/public/manifest.json';
        $manifest = json_decode(file_get_contents($manifest_path), true);
        return isset($manifest[$asset_name]) ? true : false;
    }

    public static function processBlocksRecursively($blockArray) {
        $cleanedBlocks = []; // Tableau pour stocker les versions nettoyées des blockNames

        if (!empty($blockArray)) {
            foreach ($blockArray as $value) {
                // Vérifier si le bloc a un 'blockName'
                if (isset($value['blockName'])) {
                    $blockName = $value['blockName'];

                    // Nettoyer le nom du bloc en remplaçant '/' par 'blocks/_'
                    $strClean = str_replace("/", "blocks/_", strstr($blockName, '/'));
                    $cleanedBlocks[] = $strClean; // Ajouter le nom nettoyé au tableau
                }

                // Vérifier si le bloc contient des blocs enfants (innerBlocks) et les traiter récursivement
                if (isset($value['innerBlocks']) && is_array($value['innerBlocks'])) {
                    $cleanedBlocks = array_merge($cleanedBlocks, Helpers::processBlocksRecursively($value['innerBlocks']));
                }
            }
        }

        return $cleanedBlocks; // Retourner le tableau des blockNames nettoyés
    }

    public static function parseDate(float $date, String $format) {
        $timestamp_seconds = $date / 1000;
        $dateParse = date($format, $timestamp_seconds);
        return $dateParse;
    }

    public static function getYouTubeVideoId($url) {
        // Utilise une expression régulière pour extraire l'ID
        $pattern = '/(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([a-zA-Z0-9_-]+)/i';
        if (preg_match($pattern, $url, $matches)) {
            return $matches[1];
        }
        return null; // Retourne null si aucun ID n'est trouvé
    }

    public static function valueExists($data, $value) {
        foreach ($data as $key => $item) {
            if (is_array($item)) {
                // Recherche récursive dans les sous-éléments
                if (Helpers::valueExists($item, $value)) {
                    return true;
                }
            } elseif ($item === $value) {
                return true;
            }
        }
        return false;
    }

}

?>
