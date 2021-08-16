function Login()
{
    player_1name = document.getElementById("input1").value;
    player_2name = document.getElementById("input2").value;

    localStorage.setItem("Player 1 name", player_1name);
    localStorage.setItem("Player 2 name", player_2name);

    window.location = "game.html";
}