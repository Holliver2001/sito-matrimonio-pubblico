<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recupero dei dati dal form
    $nome1 = $_POST['nome1'];
    $nome2 = $_POST['nome2'];
    $nome3 = $_POST['nome3'];
    $nome4 = $_POST['nome4'];
    $nome5 = $_POST['nome5'];
    $email = $_POST['email'];
    $presenza = $_POST['presenza'];
    $allergie = $_POST['allergie'];
    $telefono = $_POST['telefono'];

    // Percorso del file CSV
    $file = "disponibilita.csv";

    // Verifica se esiste già
    $file_exists = file_exists($file);

    // Apre (o crea) il file in modalità aggiunta
    $fp = fopen($file, "a");

    // Se il file è nuovo, scrive l'intestazione
    if (!$file_exists) {
        fputcsv($fp, [
            "Nome 1 (obbligatorio)",
            "Nome 2",
            "Nome 3",
            "Nome 4",
            "Nome 5",
            "Email",
            "Presenza",
            "Allergie / Intolleranze",
            "Telefono"
        ]);
    }

    // Scrive i dati della riga
    fputcsv($fp, [
        $nome1,
        $nome2,
        $nome3,
        $nome4,
        $nome5,
        $email,
        $presenza,
        $allergie,
        $telefono
    ]);

    fclose($fp);

    // Redirect alla pagina di ringraziamento
    header("Location: https://matrimonio-nicoletta-davide.netlify.app/grazie.html");
    exit;
} else {
    echo "Errore: modulo non inviato correttamente.";
}
?>
