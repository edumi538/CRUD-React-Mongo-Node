const   myConnection  = require( 'express-myconnection' ),
        bodyParser    = require( 'body-parser' ),
        request       = require( 'request' ),
        express       = require( 'express' ),
        morgan        = require( 'morgan' ),
        mysql         = require( 'mysql' );
        path          = require( 'path' ),
        cors          = require( 'cors' );

const app = express( );

// Importando Rotas.
const customerRoutes = require( "./src/routes" );

// Middlewares.
app.use( express.json( ) );
app.use( cors( ) );

app.use( morgan( 'dev' ) );
app.use( myConnection( mysql,
{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'locaveiculos'
}, 'single' ) );

app.use( bodyParser.json( ) )
app.use( bodyParser.urlencoded( { extended: true } ))

// Rotas.
app.use( '/', customerRoutes );

// Iniciando Servidor.
app.listen( 3000, ( ) => {
  console.log( `Servidor iniciado na porta: 3000` );
});