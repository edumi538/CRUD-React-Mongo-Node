module.exports =
{
    async index( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM locacao LIMIT 10', ( err, products ) =>
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
            const query = connection.query( 'INSERT INTO locacao set ?', req.body, ( err, products)  =>
            {
                res.json( { message: 'Sucesso!' } ) ;
            })
        })
    },

    async show( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM locacao WHERE idLocacao = ?', req.params.idLocacao, ( err, rows ) =>
            {
                if( err )
                    res.json( err );
                
                res.json( rows[ 0 ] );
            });
        });
    },
      
    async update( req, res )
    {
        const { idLocacao } = req.params;

        req.getConnection( ( err, conn ) =>
        {
            conn.query( 'UPDATE locacao set ? where idLocacao = ?', [ req.body, idLocacao ], ( err, rows ) =>
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
            connection.query( 'DELETE FROM locacao WHERE idLocacao = ?', req.params.idLocacao, ( err, rows ) =>
            {
                if( err )
                    res.json( err );

                res.json( { message: 'Sucesso!' } );
            });
        });
    }
}