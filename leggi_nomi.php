<?php
require 'vendor/autoload.php'; // richiede PhpSpreadsheet

use PhpOffice\PhpSpreadsheet\IOFactory;

$file = 'invitati.xlsx';

if (!file_exists($file)) {
    echo json_encode([]);
    exit;
}

$spreadsheet = IOFactory::load($file);
$sheet = $spreadsheet->getActiveSheet();

$nomi = [];
foreach ($sheet->getRowIterator() as $row) {
    $valore = $sheet->getCell('A' . $row->getRowIndex())->getValue();
    if (!empty($valore)) {
        $nomi[] = trim($valore);
    }
}

header('Content-Type: application/json');
echo json_encode($nomi);
?>