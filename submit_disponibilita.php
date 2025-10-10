<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupero dati dal modulo
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $presenza = $_POST['presenza'];
    $numero = $_POST['numero'];
    $messaggio = $_POST['messaggio'];

    // Percorso del file CSV
    $file = "disponibilita.csv";

    // Controlla se il file esiste già
    $file_exists = file_exists($file);

    // Apri il file in modalità "append"
    $fp = fopen($file, "a");

    // Se il file è nuovo, aggiungi l'intestazione
    if (!$file_exists) {
        fputcsv($fp, ["Nome", "Email", "Presenza", "Numero Persone", "Messaggio"]);
    }

    // Aggiungi i dati del form
    fputcsv($fp, [$nome, $email, $presenza, $numero, $messaggio]);

    fclose($fp);

    // Redirect alla pagina di conferma
    header("Location: grazie.html");
    exit;
} else {
    echo "Errore: il modulo non è stato inviato correttamente.";
}
?>
