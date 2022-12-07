show columns from productos;
INSERT INTO productos (nombre, precio, fecha_alta, idCategoria, existencia)
VALUES ('Puerquito', 12.5, curdate(), 10, 3);
select * from productos;
UPDATE productos SET idCategoria = 10 
WHERE idProducto = 22;
