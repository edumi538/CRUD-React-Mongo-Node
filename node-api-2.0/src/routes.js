const MotoristaController   = require( './controllers/MotoristaController' ),
      VeiculosController    = require( './controllers/VeiculosController'  ),
      ClienteController     = require( './controllers/ClienteController'   ),
      LocacaoController     = require( './controllers/LocacaoController'   ),
      ModeloController      = require( './controllers/ModeloController'    ),
      MarcaController       = require( './controllers/MarcaController'     ),
      express               = require( 'express' ),
      routes                = express.Router( );

/*Motorista*/
routes.get   ( '/motorista',                 MotoristaController.index  );
routes.get   ( '/motorista/:idMotorista',    MotoristaController.show   );
routes.post  ( '/motorista',                 MotoristaController.store  );
routes.put   ( '/motorista/:idMotorista',    MotoristaController.update );
routes.delete( '/motorista/:idMotorista',    MotoristaController.delete );

/*Veiculo*/
routes.get   ( '/veiculo',                   VeiculosController.index   );
routes.get   ( '/veiculo/:idVeiculo',        VeiculosController.show    );
routes.post  ( '/veiculo',                   VeiculosController.store   );
routes.put   ( '/veiculo/:idVeiculo',        VeiculosController.update  );
routes.delete( '/veiculo/:idVeiculo',        VeiculosController.delete  );

/*Cliente*/
routes.get   ( '/cliente',                   ClienteController.index    );
routes.get   ( '/cliente/:idCliente',        ClienteController.show     );
routes.post  ( '/cliente',                   ClienteController.store    );
routes.put   ( '/cliente/:idCliente',        ClienteController.update   );
routes.delete( '/cliente/:idCliente',        ClienteController.delete   );

/*Locacao*/
routes.get   ( '/locacao',                   LocacaoController.index    );
routes.get   ( '/locacao/:idLocacao',        LocacaoController.show     );
routes.post  ( '/locacao',                   LocacaoController.store    );
routes.put   ( '/locacao/:idLocacao',        LocacaoController.update   );
routes.delete( '/locacao/:idLocacao',        LocacaoController.delete   );

/*Modelo*/
routes.get   ( '/modelo',                    ModeloController.index   );
routes.get   ( '/modelo/:idModelo',          ModeloController.show    );
routes.post  ( '/modelo',                    ModeloController.store   );
routes.put   ( '/modelo/:idModelo',          ModeloController.update  );
routes.delete( '/modelo/:idModelo',          ModeloController.delete  );

/*Marca*/
routes.get   ( '/marca',                     MarcaController.index    );
routes.get   ( '/marca/:idMarca',            MarcaController.show     );
routes.post  ( '/marca',                     MarcaController.store    );
routes.put   ( '/marca/:idMarca',            MarcaController.update   );
routes.delete( '/marca/:idMarca',            MarcaController.delete   );

module.exports = routes;