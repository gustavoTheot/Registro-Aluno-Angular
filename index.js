var app = angular.module("myApp", []);
let adicionarusuario = function($scope){
    $scope.nome = "";
    $scope.email = "";
    $scope.telefone = ""
    $scope.usuarios = []

    $scope.adicionarvalor = function(){
        $scope.usuarios.push({
            nome: $scope.usuario.nome,
            email: $scope.usuario.email,
            telefone: $scope.usuario.telefone
        })
        console.log('Adicionado')

        $scope.usuario.nome = '';
        $scope.usuario.email = '';
        $scope.usuario.telefone = '';
    }
    
    /*Exemplo de como deixar valores fixos
    $scope.usuarios = [
        {nome: 'Gustavo', email: "Gustavo@gmail.com", telefone: 2133669},
        {nome: 'Adilson', email: "Adilson@gmail.com", telefone: 2133669},
    ];
    */
    
}

app.controller("addUsuarioController", adicionarusuario);

