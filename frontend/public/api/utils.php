<?php

function decode($str)
{
    $asArray = true;
    $depth = 512;
    $fdata = rawurldecode($str);

    return json_decode($fdata, $asArray, $depth, JSON_THROW_ON_ERROR);
}

function encode($obj)
{
    return json_encode($obj, JSON_UNESCAPED_UNICODE);
}

function getItemIndexById($items, $id)
{
    foreach ($items as $ind => $item) {
        if ($item["id"] === $id) {
            return $ind;
        }
    }

    return -1;
}
