<?php
    $db = mysqli_connect('sitedev.ipxon.net','tesis','tesis.2018','tesis');
?>
<html>
    <body>
          <?php
                $query = "SELECT * FROM Guille;";
                $result = mysqli_query($db, $query);
                while($row = mysqli_fetch_assoc($result)) {
                      // Display your datas on the page
                }
          ?>
    </body>
</html>