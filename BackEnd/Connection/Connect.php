<?php
class Connect
{
    private $host;
    private $user;
    private $pass;
    private $databaseName;
    private $myConnection;
    public function __construct()
    {
        $this->host = 'localhost';
        $this->user = 'root';
        $this->pass = 'admin';
        $this->databaseName = 'qlhs';
    }

    function getConnection()
    {
        $connect = mysqli_connect($this->host, $this->user, $this->pass, $this->databaseName);
        if (!$connect) {
            die('Not connect to database!');
        } else {
            $this->myConnection = $connect;
            $font = mysqli_set_charset($connect, 'utf8');
        }
        return $this->myConnection;
    }
    function closeConnection()
    {
        mysqli_close($this->myConnection);
    }
}
