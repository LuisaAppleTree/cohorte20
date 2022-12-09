SELECT * FROM productos;
SELECT * FROM categoria;
/*join*/
SELECT * FROM productos, categoria 
WHERE idCategoria = id;
/*inner join*/
SELECT p.nombre, p.precio, p.existencia, c.nombre FROM productos AS p INNER JOIN categoria AS c  
ON p.idCategoria = c.id;
/*left join*/
SELECT p.nombre, p.precio, p.existencia, t.nombre FROM productos AS p LEFT JOIN temporal AS t  
ON p.idCategoria = t.id;
/*right join*/
SELECT p.nombre, p.precio, p.existencia, t.nombre FROM productos AS p RIGHT JOIN temporal AS t  
ON p.idCategoria = t.id;
SELECT * FROM productos;
SELECT * FROM categoria;
SELECT * FROM proveedores;
SELECT * FROM categoria UNION
SELECT * FROM proveedores;
SELECT * FROM categoria UNION
SELECT nombre, precio FROM productos;
/*consulta multitabla*/
SELECT p.nombre AS product_nombre, c.nombre AS category_nombre
FROM productos AS p INNER JOIN categoria 
AS c ON p.idCategoria = c.id;
/*----*/
SELECT p.nombre as nom_producto, c.nombre as nom_categoria, pv.nombre as nom_proveedor
FROM productos AS p 
inner JOIN categoria AS c 
ON p.idCategoria = c.id
inner join detalle_producto_proveedor as det
on p.idProducto=det.idProducto
inner join proveedores as pv
on det.idProveedor = pv.id
where p.existencia > 20;

