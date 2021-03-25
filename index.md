
<body>
    <div class="container">
        <div class="box" ng-controller="addUsuarioController">
            <form name="formItem">
                <input type="text" placeholder="Name" ng-model="usuario.nome">
                <input type="email" placeholder="E-mail" ng-model = "usuario.email">
                <input type="number" placeholder="Telefone" ng-model = "usuario.telefone">

                <input type="button" value="Register" ng-click="adicionarvalor()">
        
            </form>

            <div class="TableRegister">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</td>
                            <th>E-mail</td>
                            <th>Telefone</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="usuario in usuarios">
                            <td>{{ usuario.nome }}</td>
                            <td>{{ usuario.email }}</td>
                            <td>{{ usuario.telefone }}</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="listRegister">
                <ul ng-repeat="usuario in usuarios">
                    <li><strong>Nome: </strong>{{usuario.nome}}</li>
                    <li><strong>Email: </strong>{{usuario.email}}</li>
                    <li><strong>Telefone: </strong>{{usuario.telefone}}</li>
                </ul>
            </div>
        </div>
        
    </div>

    <script src="./index.js"></script>
</body>

