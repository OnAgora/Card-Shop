export const setupPiece = () => {
    return `
    
    import NonFungibleToken from 0x631e88ae7f1d7c20
    import MetadataViews from 0x631e88ae7f1d7c20
    import Piece from 0x5d6f0e8f038c12e3
    
    // This transaction configures an account to hold a Piece NFT.

    transaction {
        prepare(signer: AuthAccount) {
            // if the account doesn't already have a collection
            if signer.borrow<&Piece.Collection>(from: Piece.CollectionStoragePath) == nil {
    
                // create a new empty collection
                let collection <- Piece.createEmptyCollection()
    
                // save it to the account
                signer.save(<-collection, to: Piece.CollectionStoragePath)
    
                // create a public capability for the collection
                signer.link<&Piece.Collection{NonFungibleToken.CollectionPublic, NonFungibleToken.Receiver, MetadataViews.ResolverCollection}>(Piece.CollectionPublicPath, target: Piece.CollectionStoragePath)
            }
        }
    }`
}

