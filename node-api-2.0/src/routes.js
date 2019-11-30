const MotoristaController   = require( './controllers/MotoristaController' ),
      VeiculosController    = require( './controllers/VeiculosController'  ),
      ClienteController     = require( './controllers/ClienteController'   ),
      LocacaoController     = require( './controllers/LocacaoController'   ),
      ModeloController      = require( './controllers/ModeloController'    ),
      MarcaController       = require( './controllers/MarcaController'     ),
      express               = require( 'express' ),
      routes                = express.Router( );

/*Motorista*/
routes.get   ( '/motorista',                MotoristaController.index  );
routes.get   ( '/motorista/:id',            MotoristaController.show   );
routes.post  ( '/motorista',                MotoristaController.store  );
routes.put   ( '/motorista/:id',            MotoristaController.update );
routes.delete( '/motorista/:id',            MotoristaController.delete );

/*Veiculo*/
routes.get   ( '/veiculo',                  VeiculosController.index   );
routes.get   ( '/veiculo/:id',              VeiculosController.show    );
routes.post  ( '/veiculo',                  VeiculosController.store   );
routes.put   ( '/veiculo/:id',              VeiculosController.update  );
routes.delete( '/veiculo/:id',              VeiculosController.delete  );

/*Cliente*/
routes.get   ( '/cliente',                  ClienteController.index    );
routes.get   ( '/cliente/:id',              ClienteController.show     );
routes.post  ( '/cliente',                  ClienteController.store    );
routes.put   ( '/cliente/:id',              ClienteController.update   );
routes.delete( '/cliente/:id',              ClienteController.delete   );

/*Locacao*/
routes.get   ( '/locacao',                  LocacaoController.index    );
routes.get   ( '/locacao/:id',              LocacaoController.show     );
routes.post  ( '/locacao',                  LocacaoController.store    );
routes.put   ( '/locacao/:id',              LocacaoController.update   );
routes.delete( '/locacao/:id',              LocacaoController.delete   );

/*Modelo*/
routes.get   ( '/modelo',                    ModeloController.index   );
routes.get   ( '/modelo/:id',                ModeloController.show    );
routes.post  ( '/modelo',                    ModeloController.store   );
routes.put   ( '/modelo/:id',                ModeloController.update  );
routes.delete( '/modelo/:id',                ModeloController.delete  );

/*Marca*/
routes.get   ( '/marca',                     MarcaController.index    );
routes.get   ( '/marca/:id',                 MarcaController.show     );
routes.post  ( '/marca',                     MarcaController.store    );
routes.put   ( '/marca/:id',                 MarcaController.update   );
routes.delete( '/marca/:id',                 MarcaController.delete   );

module.exports = routes;