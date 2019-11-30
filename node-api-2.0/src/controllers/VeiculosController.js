module.exports =
{
    async index( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM veiculo LIMIT 10', ( err, products ) =>
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
            const query = connection.query( 'INSERT INTO veiculo set ?', req.body, ( err, products)  =>
            {
                res.json( { message: 'Sucesso!' } ) ;
            })
        })
    },

    async show( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM veiculo WHERE idVeiculo = ?', req.params.idVeiculo, ( err, rows ) =>
            {
                if( err )
                    res.json( err );
                
                res.json( rows[ 0 ] );
            });
        });
    },
      
    async update( req, res )
    {
        const { idVeiculo } = req.params;

        req.getConnection( ( err, conn ) =>
        {
            conn.query( 'UPDATE veiculo set ? where idVeiculo = ?', [ req.body, idVeiculo ], ( err, rows ) =>
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
            connection.query( 'DELETE FROM veiculo WHERE idVeiculo = ?', req.params.idVeiculo, ( err, rows ) =>
            {
                if( err )
                    res.json( err );

                res.json( { message: 'Sucesso!' } );
            });
        });
    }
}