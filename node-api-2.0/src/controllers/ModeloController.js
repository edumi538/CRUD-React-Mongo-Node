module.exports =
{
    async index( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM veiculo_modelo LIMIT 10', ( err, products ) =>
            {
                if( err )
                    res.json( err );

                res.json( products );
            });
        });
    },

    async store( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            const query = connection.query( 'INSERT INTO veiculo_modelo set ?', req.body, ( err, products)  =>
            {
                res.json( { message: 'Sucesso!' } ) ;
            })
        })
    },

    async show( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM veiculo_modelo WHERE idModelo = ?', req.params.idModelo, ( err, rows ) =>
            {
                if( err )
                    res.json( err );
                
                res.json( rows[ 0 ] );
            });
        });
    },
      
    async update( req, res )
    {
        const { idModelo } = req.params;

        req.getConnection( ( err, conn ) =>
        {
            conn.query( 'UPDATE veiculo_modelo set ? where idModelo = ?', [ req.body, idModelo ], ( err, rows ) =>
            {
                if( err )
                    res.json( err );
            
                res.json( { message: 'Sucesso!' } );
            });
        });
    },

    async delete( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'DELETE FROM veiculo_modelo WHERE idModelo = ?', req.params.idModelo, ( err, rows ) =>
            {
                if( err )
                    res.json( err );

                res.json( { message: 'Sucesso!' } );
            });
        });
    }
}