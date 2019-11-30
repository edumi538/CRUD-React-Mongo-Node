module.exports =
{
    async index( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM motorista LIMIT 10', ( err, products ) =>
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
            const query = connection.query( 'INSERT INTO motorista set ?', req.body, ( err, products)  =>
            {
                res.json( { message: 'Sucesso!' } ) ;
            })
        })
    },

    async show( req, res )
    {
        req.getConnection( ( err, connection ) =>
        {
            connection.query( 'SELECT * FROM motorista WHERE idMotorista = ?', req.params.idMotorista, ( err, rows ) =>
            {
                if( err )
                    res.json( err );
                
                res.json( rows[ 0 ] );
            });
        });
    },
      
    async update( req, res )
    {
        const { idMotorista } = req.params;

        req.getConnection( ( err, conn ) =>
        {
            conn.query( 'UPDATE motorista set ? where idMotorista = ?', [ req.body, idMotorista ], ( err, rows ) =>
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
            connection.query( 'DELETE FROM motorista WHERE idMotorista = ?', req.params.idMotorista, ( err, rows ) =>
            {
                if( err )
                    res.json( err );

                res.json( { message: 'Sucesso!' } );
            });
        });
    }
}