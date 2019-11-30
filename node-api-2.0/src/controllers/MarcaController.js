module.exports =
{
    async index( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM veiculo_marca LIMIT 10', ( err, products ) =>
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
            const query = connection.query( 'INSERT INTO veiculo_marca set ?', req.body, ( err, products)  =>
            {
                res.json( { message: 'Sucesso!' } ) ;
            })
        })
    },

    async show( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM veiculo_marca WHERE idMarca = ?', req.params.idMarca, ( err, rows ) =>
            {
                if( err )
                    res.json( err );
                
                res.json( rows[ 0 ] );
            });
        });
    },
      
    async update( req, res )
    {
        const { idMarca } = req.params;

        req.getConnection( ( err, conn ) =>
        {
            conn.query( 'UPDATE veiculo_marca set ? where idMarca = ?', [ req.body, idMarca ], ( err, rows ) =>
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
            connection.query( 'DELETE FROM veiculo_marca WHERE idMarca = ?', req.params.idMarca, ( err, rows ) =>
            {
                if( err )
                    res.json( err );

                res.json( { message: 'Sucesso!' } );
            });
        });
    }
}