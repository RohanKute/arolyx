

module.exports.reduceImageSize = (products, size)=>{
     return products.map((product) => {
        product.img = product.img.map((img) => {
            img.url = img.url.replace('upload', `upload/w_${size},h_${size}`)
            img.publicId = img.publicId
            return img
       })
       return product;
    })
}