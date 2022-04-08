<html>

<head>
  <style>
    body {
      background: #1952b4cc;
    }
    .center {
      margin-left: auto;
      margin-right: auto;
    }

    table,
    td,
    th {
      border: 1px solid black;
    }

    table {
      border-collapse: collapse;
      width: 50%;
      margin-top: 20px;
    }

    td {
      text-align: center;
    }

    h1 {
      text-align: center;
      color: burlywood;
      margin-top: 50px;
    }
  </style>
</head>

<body>
  <h1>"THANKS FOR CONTACT WITH ME"</h1><br>

  <table class="center">

    <tr>
      <td>Welcome <?php echo $_POST["name"]; ?><br></td>
    </tr>
    <tr>
      <td>Your email address is: <?php echo $_POST["email"]; ?><br></td>
    </tr>
    <tr>
      <td>Message is :<?php echo $_POST["message"]; ?></td>
    </tr>
  </table>

</body>

</html>