export const validateFormValues = (item)=>{
    let err = ""
    console.log("item obj :", item);
    let {name, quantity, quantityMetric, desc, price } = item
    if(name.trim().length === 0)
        err += "<p>Name cannot be blank.</p>";
    if(quantity === 0 || quantity < 0 )
        err += "<p>Quantity cannot be blank & must be greater than 0.</p>";
    if(quantityMetric.trim() === "" )
        err += "<p>Please select valid quantity metric.</p>";
    if(desc.trim().length === 0 )
        err += "<p>Description cannot be blank.</p>";
    if(price === 0 || price < 0 )
        err += "<p>Price cannot be blank & must be greater than 0.</p>";

    return err;
}